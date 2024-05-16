import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { PaymentMethod } from "./payment-method";

export function PaymentPage() {
  return (
    <>
      <div className="container grid relative  h-full flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
        </div>
        <div className="lg:p-8">
          <PaymentMethod />
        </div>
      </div>
    </>
  );
}
