"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/lib/axios";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ArrowLeft, Award, Save } from "lucide-react";

import Link from "next/link";

type Props = {
  students: {
    id: string;
    name: string;
  }[];
};

export default function CreateCertificateForm({ students }: Props) {
  const router = useRouter();

  const [studentId, setStudentId] = useState("");

  const [certificateName, setCertificateName] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!studentId || !certificateName) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/api/certificates", {
        studentId,
        certificateName,
      });

      const result = response.data;

      if (!result.success) {
        throw new Error("Failed to create certificate");
      }

      router.push("/certificates");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 rounded-none">
            <Award className="mr-2 h-3.5 w-3.5" />
            Certificate Registry
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight">
            Create Certificate
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Issue a new academic certificate for a registered student.
          </p>
        </div>

        {/* Form */}
        <Card className="rounded-none">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em]">
                  Student
                </label>

                <Select value={studentId} onValueChange={setStudentId}>
                  <SelectTrigger className="h-12 rounded-none">
                    <SelectValue placeholder="Select Student" />
                  </SelectTrigger>

                  <SelectContent className="mt-5 max-h-60 overflow-y-auto rounded-none border border-slate-300 bg-white">
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em]">
                  Certificate Name
                </label>

                <Input
                  value={certificateName}
                  onChange={(e) => setCertificateName(e.target.value)}
                  placeholder="Bachelor of Computer Science"
                  className="h-12 rounded-none"
                />
              </div>

              <div className="flex justify-between border-t pt-6">
                <Button size="lg" variant="outline" className="rounded-none" asChild>
                  <Link href="/certificates">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Link>
                </Button>

                <Button size="lg"
                  type="submit"
                  disabled={loading}
                  className="rounded-none bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
                >
                  <Save className="mr-2 h-4 w-4" />

                  {loading ? "Creating..." : "Create Certificate"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
