import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Register = () => {
  const handleRegister = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;
    console.log(
      "Registering user with email:",
      email,
      "and password:",
      password,
    );
    toast.success("Registration successful!");

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
  };

  return (
    <Card className="w-full max-w-sm mt-3">
      <CardHeader>
        <CardTitle>Register for an account</CardTitle>
        <CardDescription>
          Enter your email below to register for an account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="py-5">
        <Button
          type="submit"
          className="w-full bg-gray-500 hover:bg-gray-600 text-white"
        >
          Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Register;
