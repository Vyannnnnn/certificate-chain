import { prisma } from "@/lib/prisma";
import Invalid from "@/components/ui/invalid";
import { verifyCertificateOnChain } from "@/lib/blockchain";

type Props = {
  params: Promise<{
    certificateNumber: string;
  }>;
};

export default async function VerifyPage({ params }: Props) {
  const { certificateNumber } = await params;
  const certificate = await prisma.certificate.findUnique({
    where: {
      certificateNumber,
    },
    include: {
      student: true,
    },
  });

  if (!certificate) {
    return <Invalid />;
  }

  const chainResult = await verifyCertificateOnChain(certificate.certificateNumber);

  if (!chainResult.exists) {
    return <Invalid />;
  }

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">✅ Certificate Verified</h1>

      <div className="space-y-4">
        <p>
          <strong>Certificate Number:</strong> {certificate.certificateNumber}
        </p>

        <p>
          <strong>Student:</strong> {certificate.student.name}
        </p>

        <p>
          <strong>Certificate:</strong> {certificate.certificateName}
        </p>

        <p>
          <strong>Issued:</strong>{" "}
          {new Date(certificate.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
