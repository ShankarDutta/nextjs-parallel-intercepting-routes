import { ReactNode } from "react";

export type RootLayoutProps = {
  children: ReactNode;
};

export type WallpaperType = {
  id: string;
  description: string;
  width: string;
  height: string;

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
