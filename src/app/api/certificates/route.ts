import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import GenerateCertificateNumber from "@/lib/certificate";
import { createCertificateSchema } from "@/lib/validations/certificate";
import {issueCertificateOnBlockchain} from "@/lib/blockchain";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming body:", body);
    const parsedBody = createCertificateSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid certificate data" },
        { status: 400 },
      );
    }

    const student = await prisma.student.findUnique({
      where: { id: parsedBody.data.studentId },
    });

    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    const certificateNumber = await GenerateCertificateNumber();

    const blockchainResponse = await issueCertificateOnBlockchain(
      certificateNumber,
    );

    const certificate = await prisma.certificate.create({
      data: {
        certificateNumber,
        certificateName: parsedBody.data.certificateName,
        studentId: parsedBody.data.studentId,

        txHash: blockchainResponse.txHash,
      },
    });

    return NextResponse.json({ success: true, certificate }, { status: 201 });
  } catch (error) {
    console.error("Error creating certificate:", error);
    return NextResponse.json(
      { error: "Failed to create certificate" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      include: { student: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, certificates }, { status: 200 });
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return NextResponse.json(
      { error: "Failed to fetch certificates" },
      { status: 500 },
    );
  }
}
