import "../styles/globals.css";
import { AuthProvider } from "@/components/context/AuthProvider";
import { Toaster } from "sonner";

export const metadata = {
  title: "Certificate Chain",
  description: "Certificate Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
