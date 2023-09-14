import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Pannawit Setsiriwanit",
    studentId: "650610784",
  });
};
