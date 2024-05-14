import { AuthenticationPage } from "@/components/auth/auth-page";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Authentication() {
  return <AuthenticationPage />;
}
