import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let reqBody = await req.formData();
    let file = reqBody.get("file");
    if (!file) {
      return NextResponse.json(
        { success: false, message: "No Image Found", status: 400 },
        { status: 400 }
      );
    }

    // Check if file is actually a File object
    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, message: "Invalid file type", status: 400 },
        { status: 400 }
      );
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const ext = file.name.split(".").pop();
    const fileName = `${new Date().getMilliseconds()}.${ext}`;
    const path = `public/uploads/projects/${fileName}`;
    await writeFile(path, buffer);
    return NextResponse.json({
      success: true,
      message: "File successfully uploaded",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 }
    );
  }
}
