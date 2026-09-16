"use client";

import { createContext, useContext, useEffect, useState } from "react";
import client from "@/app/api/client";
import { User } from "@supabase/auth-js/dist/module/lib/types";

const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
} | null>(null);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
      setLoading(false);
    });

    const { data: authListener } = client.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
