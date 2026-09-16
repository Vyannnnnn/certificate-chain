
import React from "react";
import {
  ShieldCheck,
  Search,
  BarChart3,
  Globe,
  Zap,
  LayoutDashboard,
  Code2,
  ArrowRight,
  PlayCircle,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
const VeriChainMonochrome = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-black" />
            <span className="text-2xl font-bold tracking-tight">
              VeriChain Academic
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="ghost"
              className="font-medium cursor-pointer bg-white border-slate-300 hover:bg-slate-50 rounded-none px-6"
            >
              <Link href="/login" className="text-sm font-medium">
                Login
              </Link>
            </Button>
            <Button className="bg-black text-white hover:bg-slate-800 rounded-none px-6 cursor-pointer">
              Verify Now
            </Button>
          </div>
        </div>
      </nav>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <Badge
              variant="secondary"
              className="bg-slate-100 text-slate-600 rounded-sm px-3 py-1 font-medium border-none uppercase tracking-wider text-[10px]"
            >
              <ShieldCheck className="w-3 h-3 mr-2 inline" /> Blockchain-Backed
              Security
            </Badge>
            <h1 className="text-6xl font-bold leading-[1.1] tracking-tight text-slate-900">
              The Immutable Standard for Academic Verification.
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              VeriChain Academic provides a secure, instant, and tamper-proof
              protocol for academic institutions and employers to verify
              credentials globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-slate-800 rounded-none h-14 px-8 text-md group"
              >
                Verify Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 rounded-none h-14 px-8 text-md cursor-pointer"
              >
                <PlayCircle className="mr-2 w-5 h-5" /> Watch Demo
              </Button>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                Trusted by
                <span className="font-bold text-slate-900 mx-2.5">
                  450+ Institutions
                </span>
                worldwide
              </p>
            </div>
          </div>
          {/* Verification Widget */}
          <Card className="border-slate-200 shadow-2xl rounded-none overflow-hidden">
            <CardHeader className="bg-white border-b border-slate-100 py-6">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-bold">
                  Credential Verification
                </CardTitle>
                <div className="flex items-center text-[10px] uppercase font-bold text-slate-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Secure Session
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Enter Certificate ID..."
                  className="h-12 bg-slate-50 border-slate-200 rounded-none italic"
                />
                <Input
                  placeholder="Student Last Name..."
                  className="h-12 bg-slate-50 border-slate-200 rounded-none italic"
                />
              </div>
              <Button className="w-full cursor-pointer bg-slate-900 hover:bg-black text-white h-12 rounded-none font-bold uppercase tracking-widest text-xs">
                Search Registry
              </Button>
              <div className="mt-8 p-4 bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Verified Authentic
                    </p>
                    <p className="text-xs text-slate-500">ID: VCA-9823-XQ</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 cursor-pointer"
                >
                  <Printer className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              label: "Diplomas Verified",
              value: "1.2M+",
              sub: "+12% THIS MONTH",
            },
            { label: "Institutions", value: "450+", sub: "34 COUNTRIES" },
            {
              label: "Verification Accuracy",
              value: "99.9%",
              sub: "ERROR-FREE PROTOCOL",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="border-slate-100 shadow-sm rounded-none text-center p-8"
            >
              <CardTitle className="text-4xl font-bold mb-2">
                {stat.value}
              </CardTitle>
              <CardDescription className="font-medium text-slate-900 uppercase tracking-wide text-xs mb-4">
                {stat.label}
              </CardDescription>
              <div className="h-0.5 w-1/2 bg-slate-900 mx-auto mb-4" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Last Updated: {i === 2 ? "Daily" : `${(i + 1) * 5}m ago`}
              </p>
            </Card>
          ))}
        </section>
        {/* Feature Grid */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              Industrial Grade Verification Infrastructure
            </h2>
            <p className="text-slate-500 mb-12 max-w-2xl">
              Providing the technology that powers the future of academic trust
              and credential transparency.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="rounded-none border border-slate-200 p-8 space-y-6">
                <Globe className="w-10 h-10 text-slate-900" />
                <h3 className="text-xl font-bold">
                  Blockchain-Backed Immutability
                </h3>
                <p className="text-slate-500 text-sm">
                  Every diploma is hashed and stored on a private, permissioned
                  ledger, making unauthorized alterations impossible and
                  verification instant.
                </p>
              </Card>

              <Card className="rounded-none border-none bg-slate-900 text-white p-12 flex flex-col justify-end relative overflow-hidden">
                <Zap className="w-10 h-10 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Instant Results</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Verify any certificate in under 2 seconds. No phone calls, no
                  waiting for registrar offices, no manual paperwork.
                </p>
              </Card>

              <Card className="rounded-none p-8 space-y-6 border-none bg-slate-900 text-white flex flex-col justify-end relative overflow-hidden">
                <Code2 className="w-8 h-8" />
                <h3 className="text-xl font-bold">Enterprise API Access</h3>
                <p className=" text-slate-400 text-sm leading-relaxed max-w-xs">
                  Integrate verification directly into your HR or recruitment
                  platform with our robust, high-availability REST API.
                </p>
                <div className="bg-slate-900 p-6 rounded-sm font-mono text-[10px] text-slate-300">
                  <p className="text-blue-400">
                    GET /api/v1/verify/VCA-9823-XQ
                  </p>
                  <p className="mt-2">{`{`}</p>
                  <p className="ml-4">
                    "status": <span className="text-green-400">"VERIFIED"</span>
                    ,
                  </p>
                  <p className="ml-4">"student": "Jane Doe",</p>
                  <p className="ml-4">"issued": "2024-05-12"</p>
                  <p>{`}`}</p>
                </div>
              </Card>

              <Card className="rounded-none border border-slate-200 p-8 space-y-6">
                <LayoutDashboard className="w-8 h-8" />
                <h3 className="text-xl font-bold">Institution Dashboard</h3>
                <p className="text-slate-500 text-sm">
                  Complete control for registrars to issue, manage, and revoke
                  digital credentials via a secure administrative portal.
                </p>
                <div className="bg-slate-100 h-48 rounded-sm overflow-hidden border border-slate-200">
                  {/* Dashboard Preview Mock */}
                  <div className="p-4 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-8 bg-white border border-slate-200 flex items-center px-3 gap-4"
                      >
                        <div className="w-4 h-4 bg-slate-100 rounded-full" />
                        <div className="w-24 h-2 bg-slate-100" />
                        <div className="w-12 h-2 bg-slate-100 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 p-16 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border border-slate-200">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Ready to Verify?
              </h2>
              <p className="text-slate-500 max-w-md">
                Join hundreds of institutions already using the VeriChain
                protocol to eliminate credential fraud and streamline
                administration.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-black text-white rounded-none px-12 h-14 font-bold cursor-pointer"
              >
                Get Started
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white border-slate-300 hover:bg-slate-50 rounded-none px-12 h-14 font-bold cursor-pointer"
              >
                <Link href="/login" className="text-sm font-medium">
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="font-bold text-lg mb-1">VeriChain Academic</p>
            <p className="text-xs text-slate-500">
              © 2024 VeriChain Academic. Secure Credential Verification
              Protocol.
            </p>
          </div>
          <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a
              href="#"
              className="hover:text-black transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors cursor-pointer"
            >
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default VeriChainMonochrome;
