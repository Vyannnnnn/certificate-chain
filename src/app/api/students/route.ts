import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { studentSchema } from "@/lib/validations/student";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = studentSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { success: false, errors: z.flattenError(parsedBody.error) },
        { status: 400 },
      );
    }

    const existingStudent = await prisma.student.findUnique({
      where: { nim: parsedBody.data.nim },
    });

    if (existingStudent) {
      return NextResponse.json(
        { success: false, error: "Student with this NIM already exists" },
        { status: 400 },
      );
    }

    const student = await prisma.student.create({
      data: parsedBody.data,
    });

    return NextResponse.json({ success: true, data: student }, { status: 201 });
  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create student" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(
      { success: true, data: students },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch students" },
      { status: 500 },
    );
  }
}
