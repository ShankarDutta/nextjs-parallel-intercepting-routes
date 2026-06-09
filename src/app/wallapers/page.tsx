import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beautiful Wallpapers for Every Screen",
  description:
    "Discover high-quality wallpapers curated for desktop, laptop, tablet, and mobile devices.",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      Your Wall papers
    </section>
  );
};

export default page;
