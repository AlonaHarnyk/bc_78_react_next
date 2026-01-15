import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";
import { ApiError } from "../types";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search");
  const hasWork = request.nextUrl.searchParams.get("hasWork");
  try {
    const { data } = await api.get("/contacts", {
      params: { search, hasWork },
    });
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json({ status: err.response?.data.status ?? 500 });
  }
}
