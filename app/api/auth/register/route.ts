import { NextRequest, NextResponse } from "next/server";
import { authApi } from "../../api";
import { ApiError } from "../../types";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { isAxiosError } from "axios";

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    const { data, headers } = await authApi.post("/auth/register", userData);

    const cookieStore = await cookies();
    // Отримуємо значення set-cookie з хедерів
    const setCookie = headers["set-cookie"];
    // Додаємо перевірку існування setCookie
    if (setCookie) {
      // Примусово робимо масив
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
      // Проходимось по масиву та парсимо кожне значення
      // щоб отримати результат у вигляді обʼєкту
      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);
        // Створюємо налаштування для cookies
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed["Max-Age"]),
        };

        // Методом cookieStore.set додаємо кукі до нашого запиту
        if (parsed.accessToken) {
          // cookieStore.set('імʼя ключа',  'значення токену',  додаткові налаштування)
          cookieStore.set("accessToken", parsed.accessToken, options);
        }
        if (parsed.refreshToken) {
          cookieStore.set("refreshToken", parsed.refreshToken, options);
        }
      }

      // Тільки якщо є setCookie повертаємо результат
      return NextResponse.json(data);
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.status }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
