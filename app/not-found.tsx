import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-full bg-zinc-900 items-center justify-center">
      <h1 className="text-7xl text-white">404</h1>
      <h2 className="text-white">Not Found</h2>
      <p className="text-white">Could not find requested resource</p>
      <Link className="text-white" href="/">
        <Button variant={"destructive"}>Return Home</Button>
      </Link>
    </div>
  );
}
