import { AuthPage } from "@/components/auth/auth-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Login",
};

export default function Authentication() {
  return <AuthPage />;
}
