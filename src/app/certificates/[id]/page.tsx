import { prisma } from "@/lib/prisma";
import { generateQRCode } from "@/lib/qrcode";
import { notFound } from "next/navigation";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  ArrowLeft,
  Award,
  ExternalLink,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CertificateDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const certificate =
    await prisma.certificate.findUnique({
      where: {
        id,
      },
      include: {
        student: true,
      },
    });

  if (!certificate) {
    notFound();
  }

  const qrCode = await generateQRCode(
    certificate.certificateNumber
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge
            variant="secondary"
            className="mb-4 rounded-none"
          >
            <Award className="mr-2 h-3.5 w-3.5" />
            Certificate Registry
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight">
            Certificate Details
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Review certificate information and
            blockchain verification records.
          </p>
        </div>

        {/* Certificate Information */}
        <Card className="mb-6 rounded-none">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-2">
              <FileCheck className="h-5 w-5" />

              <h2 className="font-semibold">
                Certificate Information
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Certificate Number
                </p>

                <p className="mt-2 font-medium">
                  {certificate.certificateNumber}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Student
                </p>

                <p className="mt-2 font-medium">
                  {certificate.student.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Certificate Name
                </p>

                <p className="mt-2 font-medium">
                  {certificate.certificateName}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification */}
        <Card className="mb-6 rounded-none">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />

              <h2 className="font-semibold">
                Verification Record
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Blockchain Transaction
                </p>

                <p className="mt-2 break-all text-sm">
                  {certificate.txHash}
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="rounded-none"
              >
                <a
                  href={`https://amoy.polygonscan.com/tx/${certificate.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Transaction
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* QR Code */}
        <Card className="rounded-none">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />

              <h2 className="font-semibold">
                Verification QR Code
              </h2>
            </div>

            <div className="flex justify-center border p-6">
              <img
                src={qrCode}
                alt="Certificate QR Code"
                className="h-40 w-40"
              />
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Scan to verify certificate authenticity.
            </p>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="mt-6">
          <Button
            asChild
            variant="outline"
            className="rounded-none"
          >
            <Link href="/certificates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Certificates
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
