"use client";

import handleLogout from "@/app/actions/logout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  GraduationCap,
  LogOut,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const onLogout = async () => {
    try {
      await handleLogout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div>
            <h1 className="font-bold">VeriChain Academic</h1>
            <p className="text-xs text-muted-foreground">
              Academic Verification Platform
            </p>
          </div>

          <Button
            variant="outline"
            className="rounded-none"
            onClick={onLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* Top Bar */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Dashboard
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage students and certificate verification records.
            </p>
          </div>

          <Badge
            variant="secondary"
            className="w-fit rounded-none px-3 py-1"
          >
            <ShieldCheck className="mr-2 h-3.5 w-3.5" />
            Protected Workspace
          </Badge>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <Card className="rounded-none">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-muted-foreground" />

                <span className="text-xs uppercase text-muted-foreground">
                  Students
                </span>
              </div>

              <p className="mt-4 text-3xl font-bold">248</p>
            </CardContent>
          </Card>

          <Card className="rounded-none">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <FileCheck className="h-5 w-5 text-muted-foreground" />

                <span className="text-xs uppercase text-muted-foreground">
                  Certificates
                </span>
              </div>

              <p className="mt-4 text-3xl font-bold">1,024</p>
            </CardContent>
          </Card>

          <Card className="rounded-none">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />

                <span className="text-xs uppercase text-muted-foreground">
                  Verification Rate
                </span>
              </div>

              <p className="mt-4 text-3xl font-bold">99.8%</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/students">
            <Card className="rounded-none transition-colors hover:bg-muted/40">
              <CardContent className="p-6">
                <GraduationCap className="mb-4 h-8 w-8" />

                <h3 className="text-lg font-semibold">
                  Student Management
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Manage student identities, enrollment information,
                  and academic records.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/certificates">
            <Card className="rounded-none transition-colors hover:bg-muted/40">
              <CardContent className="p-6">
                <FileCheck className="mb-4 h-8 w-8" />

                <h3 className="text-lg font-semibold">
                  Certificate Management
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Issue, verify, and maintain academic certificates.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Activity */}
        <Card className="mt-6 rounded-none">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">
              Recent Activity
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-sm">
                  New certificate issued
                </span>

                <span className="text-xs text-muted-foreground">
                  5 minutes ago
                </span>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-sm">
                  Student profile updated
                </span>

                <span className="text-xs text-muted-foreground">
                  20 minutes ago
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Certificate verification completed
                </span>

                <span className="text-xs text-muted-foreground">
                  1 hour ago
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
