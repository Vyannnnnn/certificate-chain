import { prisma } from "@/lib/prisma";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Award,
  FileCheck,
  Plus,
  Eye,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function CertificatesPage() {
  const certificates = await prisma.certificate.findMany({
    include: {
      student: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge
              variant="secondary"
              className="mb-3 rounded-none"
            >
              <Award className="mr-2 h-3.5 w-3.5" />
              Certificate Registry
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight">
              Certificates
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Manage academic certificates and verification records.
            </p>
          </div>

          <Button
            asChild
            className="rounded-none bg-slate-900 text-white"
          >
            <Link href="/certificates/create">
              <Plus className="mr-2 h-4 w-4" />
              Add Certificate
            </Link>
          </Button>
        </div>

        {/* Summary */}
        <Card className="mb-6 rounded-none">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <FileCheck className="h-8 w-8 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Total Certificates
                </p>

                <p className="text-3xl font-bold">
                  {certificates.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="rounded-none">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="uppercase tracking-wider">
                    Certificate Number
                  </TableHead>

                  <TableHead className="uppercase tracking-wider">
                    Certificate Name
                  </TableHead>

                  <TableHead className="uppercase tracking-wider">
                    Student
                  </TableHead>

                  <TableHead className="uppercase tracking-wider text-right">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {certificates.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="h-32 text-center text-muted-foreground"
                    >
                      No certificates found.
                    </TableCell>
                  </TableRow>
                ) : (
                  certificates.map((certificate) => (
                    <TableRow key={certificate.id}>
                      <TableCell className="font-medium">
                        {certificate.certificateNumber}
                      </TableCell>

                      <TableCell>
                        {certificate.certificateName}
                      </TableCell>

                      <TableCell>
                        {certificate.student.name}
                      </TableCell>

                      <TableCell className="text-right">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-none"
                        >
                          <Link
                            href={`/certificates/${certificate.id}`}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
