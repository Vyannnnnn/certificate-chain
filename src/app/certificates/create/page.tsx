"use server";

import { prisma } from "@/lib/prisma";
import CreateCertificateForm from "./form";

export default async function Page() {
  const students = await prisma.student.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  console.log("students passed to form:", students);
  return <CreateCertificateForm students={students} />;
}
