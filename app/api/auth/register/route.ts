import { NextRequest, NextResponse } from "next/server";
import { authApi } from "../../api";
import { ApiError } from "../../types";
import { cookies } from "next/headers";
import { parse } from "cookie";

export async function POST(request: NextRequest) {
  try {
    const userData = request.json();
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
    const err = error as ApiError;
    return NextResponse.json({ status: err.response?.data.status ?? 500 });
  }
}
