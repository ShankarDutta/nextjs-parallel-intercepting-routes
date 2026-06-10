import { buttonVariants } from "@/components/shadcnui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Parallel & Intercepting Routes | Practical Demo Project",
  description:
    "A hands-on Next.js project demonstrating Parallel Routes and Intercepting Routes with real-world examples. Perfect for students learning the App Router.",
};
const page = () => {
  return (
    <section className="grid h-[84dvh] place-items-center">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h1 className="text-2xl font-medium tracking-tight md:text-5xl">
          Next.js Parallel & Intercepting Routes Through Project
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed">
          Explore how Next.js Parallel and Intercepting Routes work through
          practical examples. Learn modern routing patterns for building
          seamless, dynamic, and scalable web applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/wallpapers"
            className={buttonVariants({ size: "lg" })}>
            Explore Route Demo
            <ArrowUpRightIcon className="ml-1.5 size-4" />
          </Link>

          <Link
            href="https://github.com/ShankarDutta/nextjs-parallel-intercepting-routes"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", variant: "ghost" })}>
            View Source Code
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
