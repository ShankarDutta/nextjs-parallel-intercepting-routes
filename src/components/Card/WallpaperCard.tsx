"use client";

import { WallpaperType } from "@/lib/type";
import Image from "next/image";
type WallpaperCardProps = {
  info: WallpaperType;
};

const WallpaperCard = ({ info }: WallpaperCardProps) => {
  return (
    <Image
      key={info.id}
      src={info.urls.regular}
      alt={`wallpaper ${info.id}`}
      height={Number(info.height)}
      width={Number(info.width)}
      loading="eager"
      className="h-auto w-full rounded-lg"
    />
  );
};

export default WallpaperCard;
