import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
    <Tabs defaultValue="login" className="w-full max-w-md mx-auto">
      <TabsList className="grid min-w-sm grid-cols-2 gap-x-2.5">
        <TabsTrigger value="login" className="bg-gray-200 hover:bg-gray-300">
          Login
        </TabsTrigger>
        <TabsTrigger value="register" className="bg-gray-200 hover:bg-gray-300">
          Register
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="register">
        <Register />
      </TabsContent>
    </Tabs>
  );
};

export default Auth;
