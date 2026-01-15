import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { ApiError } from "../../types";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  try {
    const { data } = await api.get(`/contacts/${id}`);
    return NextResponse.json(data);
  } catch (error) {
    const err = error as ApiError;
    return NextResponse.json({ status: err.response?.data.status ?? 500 });
  }
}
