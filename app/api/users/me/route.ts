import { User } from "@/libs/types";
import { authApi } from "../../api";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../types";

export async function GET(request: NextRequest) {
  try {
    const { data } = await authApi.get<User>("users/me");
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json({ status: err.response?.data.status ?? 500 });
  }
}
