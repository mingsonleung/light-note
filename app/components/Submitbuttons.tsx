"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Saving
        </Button>
      ) : (
        <Button className="w-fit" type="submit">
          Save
        </Button>
      )}
    </>
  );
}

export function StripeSubscriptionButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-full">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Creating Subscription
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      )}
    </>
  );
}

export function StripePortal() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          Redirecting
        </Button>
      ) : (
        <Button type="submit" className="w-fit">
          View Payment Details
        </Button>
      )}
    </>
  );
}
