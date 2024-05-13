import { BentoDemo } from "@/components/magicui/test";
import { AnimatedListDemo } from "@/components/magicui/test2";
import { Hello } from "@/components/magicui/test3";
import App from "@/components/magicui/test4";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hello />
    </main>
  );
}
