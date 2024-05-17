import { Button, buttonVariants } from "@/components/ui/button";
import Link from 'next/link'
import { ModeToggle } from "@/components/mode-toggle"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <SiteHeader />
      <div className="flex flex-1" />
      <Link href="/auth/signin" className={cn("w-24 mx-auto", buttonVariants())}>
        Get Started
      </Link>
      <div className="flex flex-1" />
      <SiteFooter />
    </div>
  )
}
