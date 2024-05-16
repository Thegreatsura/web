import { Button } from "../ui/button";
import { PaymentMethod } from "./payment-method";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  Id: string;
};
export function PaymentPage({ Id }: Props) {
  console.log(Id);
  return (
    <>
      <div className="container grid relative  h-full flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Button variant={"destructive"}>
            <FaArrowLeft className="size-6 text-white" />
          </Button>
          <div className="text-white bg-red-500">Back</div>
          <Skeleton className="w-[100px] h-[20px] mb-1 rounded-full" />
          <Skeleton className="w-[200px] h-[20px] mb-1 rounded-full" />
          <div className="w-[450px]">
            <AspectRatio ratio={14 / 9}>
              <Image
                fill
                src="/hello.jpg"
                alt="Image"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="lg:p-8">
          <PaymentMethod />
        </div>
      </div>
    </>
  );
}
