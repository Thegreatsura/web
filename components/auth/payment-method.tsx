"use client";
import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdOutlineInfo } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Telebirr } from "../payment-page/telebirr";
import { Awashbank } from "../payment-page/awashbank";
import { CBEbirr } from "../payment-page/CBEbirr";

export function PaymentMethod() {
  const [first, setfirst] = useState(false);

  useEffect(() => {
    setfirst(true);
  }, []);

  if (!first) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Select what you pay with.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem value="card" id="card" className="peer sr-only" />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Telebirr className="mb-3 h-6 w-6" />
              Telebirr
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="paypal"
              id="paypal"
              className="peer sr-only"
            />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CBEbirr className="mb-3 h-6 w-6" />
              CBEbirr
            </Label>
          </div>
          <div>
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="apple"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Awashbank className="mb-3 h-6 w-6" />
              Awash
            </Label>
          </div>
        </RadioGroup>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="First and Last Name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number">Receipt or Transaction number</Label>
          <Input id="number" placeholder="BDN3QWGGGH" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number">Note (optional)</Label>
          <Input id="number" placeholder="Thank you! 😊" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2"></div>
        </div>
        <Button variant={"ghost"} className="flex sm:hidden">
          <MdOutlineInfo className="size-4" />
          payment details
        </Button>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  );
}
