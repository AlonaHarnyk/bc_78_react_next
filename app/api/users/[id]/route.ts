import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { ApiError } from "../../types";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const { data } = await api.get(`/users/${id}`);
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    console.log(err);
    return NextResponse.json({ status: err.response?.data.status ?? 500 });
  }
}
