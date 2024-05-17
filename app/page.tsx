import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { ModeToggle } from "@/components/mode-toggle"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <Button>
        <Link href="/auth/signin">Login</Link> 
      </Button>

      <ModeToggle />
      
      <SiteFooter />
    </div>
  )
}
