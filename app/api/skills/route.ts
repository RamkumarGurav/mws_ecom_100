import connect from "@/lib/db";
import Skill from "@/lib/models/skill";
import { NextRequest, NextResponse } from "next/server";
import errorHandler from "../_utils/errorHandler";

export async function GET(res: NextRequest) {
  try {
    await connect();

    // Find all skills
    const skills = await Skill.find();

    // Get the count of skills
    const count = await Skill.countDocuments();
    return NextResponse.json({ success: true, count, data: skills });
  } catch (error) {
    return errorHandler(error, req);
  }
}

export async function POST(request: Request) {
  try {
    await connect();

    const body = await request.json();

    const newSkill = new Skill(body);

    await newSkill.save();

    return NextResponse.json(
      { success: true, data: newSkill },
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Error in fetching skills" + error, {
      status: 500,
    });
  }
}
