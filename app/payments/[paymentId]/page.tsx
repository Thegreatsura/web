import { PaymentPage } from "@/components/payment-page/payment-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Payment",
  description: "payment",
};

type Props = {
  params: {
    paymentId: string;
  };
};

const Payment = ({ params }: Props) => {
  if (!params.paymentId) return notFound();

  return <PaymentPage Id={params.paymentId} />;
};

export default Payment;
