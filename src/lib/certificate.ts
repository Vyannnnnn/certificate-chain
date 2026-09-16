import { prisma } from "@/lib/prisma";

export default async function GenerateCertificateNumber() {
  const total = await prisma.certificate.count();
  const nextCertificateNumber = total + 1;
  const year = new Date().getFullYear();
  return `CERT-${year}-${nextCertificateNumber.toString().padStart(4, "0")}`;
}
