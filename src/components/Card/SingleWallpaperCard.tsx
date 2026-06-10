"use client";
import { SingleWallpaperCardType } from "@/lib/type";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import UserAvtar from "../UserAvtar";

const SingleWallpaperCard = ({ info }: SingleWallpaperCardType) => {
  return (
    <Card className="border-0 shadow-none ring-0">
      <CardHeader className="">
        <section className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/wallpapers">
            <Button variant="link">
              <ArrowLeftIcon />
              Back
            </Button>
          </Link>

          <a
            href={info.urls.regular}
            download={`wallpaper-${info.id}.jpg`}
            rel="noopener noreferrer">
            <Button className="bg-green-400 text-white hover:bg-green-500">
              Download
            </Button>
          </a>
        </section>
      </CardHeader>

      <CardContent className="space-y-2">
        <Image
          src={info.urls.regular}
          alt={`wallpaper ${info.id}`}
          width={info.width}
          height={info.height}
          priority
          className="mx-auto h-120 w-full rounded-lg object-contain"
        />

        <div className="flex items-center gap-4">
          <UserAvtar
            img={info.user.profile_image}
            name={info.user.name}
          />
          <CardTitle>{info.user.name}</CardTitle>
        </div>

        <CardDescription>{info.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default SingleWallpaperCard;
