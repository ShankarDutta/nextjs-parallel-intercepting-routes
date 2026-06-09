"use client";

import { WallpaperCardProps } from "@/lib/type";
import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

const WallpaperCard = ({ info }: WallpaperCardProps) => {
  return (
    <Link
      key={info.id}
      href={`/wallpapers/${info.id}` as Route}>
      <Image
        src={info.urls.regular}
        alt={`wallpaper ${info.id}`}
        height={info.height}
        width={info.width}
        loading="eager"
        className="h-auto w-full rounded-lg"
      />
    </Link>
  );
};

export default WallpaperCard;
