"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/lib/axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ArrowLeft, GraduationCap, Save } from "lucide-react";

import Link from "next/link";

export default function CreateStudentPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    nim: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/api/students", form);

      const result = response.data;

      if (!result.success) {
        throw new Error(result.message || "Failed to create student");
      }

      router.push("/students");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3 rounded-none">
            <GraduationCap className="mr-2 h-3.5 w-3.5" />
            Student Registry
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight">Create Student</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Register a new student into the academic verification system.
          </p>
        </div>

        {/* Form Card */}
        <Card className="rounded-none">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em]">
                  Full Name
                </label>

                <Input
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="John Doe"
                  className="h-12 rounded-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em]">
                  Student ID (NIM)
                </label>

                <Input
                  value={form.nim}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nim: e.target.value,
                    })
                  }
                  placeholder="22010001"
                  className="h-12 rounded-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em]">
                  Email Address
                </label>

                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="student@university.edu"
                  className="h-12 rounded-none"
                  required
                />
              </div>

              <div className="flex justify-between border-t pt-6">
                <Button variant="outline" className="rounded-none" asChild size="lg">
                  <Link href="/students">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Link>
                </Button>

                <Button
                  type="submit"
                  className="rounded-none flex bg-slate-900 text-white"
                  size="lg"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Student
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
