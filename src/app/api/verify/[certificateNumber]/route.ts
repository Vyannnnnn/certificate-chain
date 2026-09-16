import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: {
    params: Promise<{ certificateNumber: string }>;
  },
) {
  try {
    const { certificateNumber } = await context.params;
    const certificate = await prisma.certificate.findUnique({
      where: {
        certificateNumber,
      },
      include: {
        student: true,
      },
    });

    if (!certificate) {
      return NextResponse.json(
        { success: false, valid: false, message: "Certificate not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, valid: true, data: certificate },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return NextResponse.json(
      {
        success: false,
        valid: false,
        message: "An error occurred while fetching the certificate",
      },
      { status: 500 },
    );
  }
}
