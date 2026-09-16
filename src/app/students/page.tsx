import Link from "next/link";
import { prisma } from "@/lib/prisma";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  GraduationCap,
  Plus,
  Users,
} from "lucide-react";

export default async function StudentsPage() {
  const students = await prisma.student.findMany({
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
              <GraduationCap className="mr-2 h-3.5 w-3.5" />
              Student Registry
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight">
              Students
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Manage academic identities and student records.
            </p>
          </div>

          <Button
            asChild
            className="rounded-none bg-slate-900 text-white hover:bg-slate-800"
          >
            <Link href="/students/create">
              <Plus className="mr-2 h-4 w-4" />
              Add Student
            </Link>
          </Button>
        </div>

        {/* Summary */}
        <Card className="mb-6 rounded-none">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Total Students
                </p>

                <p className="text-3xl font-bold">
                  {students.length}
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
                    Name
                  </TableHead>

                  <TableHead className="uppercase tracking-wider">
                    NIM
                  </TableHead>

                  <TableHead className="uppercase tracking-wider">
                    Email
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {students.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="h-32 text-center text-muted-foreground"
                    >
                      No students found.
                    </TableCell>
                  </TableRow>
                ) : (
                  students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">
                        {student.name}
                      </TableCell>

                      <TableCell>
                        {student.nim}
                      </TableCell>

                      <TableCell>
                        {student.email}
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
