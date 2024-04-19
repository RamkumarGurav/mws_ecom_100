import connect from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();

    const users = await User.find();
    return NextResponse.json({ success: true, data: users });
  } catch (err) {
    return new NextResponse("Error in fetching users" + err, { status: 500 });
  }
}
