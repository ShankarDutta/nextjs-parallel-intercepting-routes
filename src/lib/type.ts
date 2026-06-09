import { ReactNode } from "react";

export type RootLayoutProps = {
  children: ReactNode;
};

export type WallpaperLayotProps = {
  children: ReactNode;
  model: ReactNode;
};

export type WallpaperType = {
  id: string;
  description: string;
  width: number;
  height: number;

  urls: {
    regular: string;
  };

  user: {
    name: string;

    profile_image: {
      medium: string;
    };
  };
};

export type WallpaperCardProps = {
  info: WallpaperType;
};

export type dynamicPageProps = {
  params: Promise<{ id: string }>;
};

export type SingleWallpaperCardType = {
  info: WallpaperType;
};

export type UserAvtarType = {
  name: string;
  img: {
    medium: string;
  };
};
