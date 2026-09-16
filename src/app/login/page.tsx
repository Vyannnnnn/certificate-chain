"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import api from "@/lib/axios";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      setLoading(true);

      const data = await api.post("/api/auth/login", { email, password });

      if (!data) {
        throw new Error("Failed to login");
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // setError("Failed to login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Card className="w-full max-w-md rounded-none border-2 shadow-none">
        <CardContent className="p-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <Badge
              variant="secondary"
              className="mb-5 rounded-none px-3 py-1 uppercase tracking-wider"
            >
              <Lock className="mr-2 h-3.5 w-3.5" />
              Secure Login
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight">Welcome Back</h1>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sign in to access your academic verification dashboard.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em]">
                Email Address
              </label>

              <Input
                type="email"
                placeholder="institutional.email@university.edu"
                className="h-12 rounded-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-[0.15em]">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Recovery
                </Link>
              </div>

              <Input
                type="password"
                placeholder="••••••••••••"
                className="h-12 rounded-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              disabled={loading}
              className="h-12 w-full rounded-none cursor-pointer bg-slate-900 uppercase tracking-[0.15em] text-white"
            >
              {loading ? "Loading..." : "Authenticate"}
            </Button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              All authentication requests are encrypted and monitored for
              security purposes.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Don't have access?{" "}
              <Link
                href="#"
                className="font-medium text-foreground hover:underline"
              >
                Contact Administrator
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
