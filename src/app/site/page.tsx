import Image from "next/image";
import previewImage from "@/../public/assets/preview.png";
import { pricingCards } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#3f3f3f2e_1px,transparent_1px),linear-gradient(to_bottom,#3f3f3f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <p className="text-center">Run your agency in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Zeal
          </h1>
        </div>
        <div className="relative px-4">
          <Image
            src={previewImage}
            alt="Preview image of zeal app"
            width={1200}
            height={1200}
            className="rounded-xl border-2 border-muted"
          />
          <div className="absolute top-[50%] left-0 bottom-0 right-0 bg-gradient-to-t dark:from-background z-10"></div>
          <div className="absolute top-[50%] left-0 bottom-0 right-0 bg-gradient-to-t dark:from-background z-10"></div>
          <div className="absolute top-[50%] left-0 bottom-0 right-0 bg-gradient-to-t dark:from-background z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-120px]">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            // WIP: Wire up free product from Stripe
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center">
                    <Check className="text-muted-foreground" />
                    <p>{feature}</p>
                  </div>
                ))}
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md",
                    {
                      "!bg-muted-foreground": card.title !== "Unlimited Saas",
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
