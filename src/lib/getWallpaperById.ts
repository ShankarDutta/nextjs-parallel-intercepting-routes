"use server";
import ky from "ky";
import { WallpaperType } from "./type";

const getWallpaperById = async (id: string) => {
  try {
    const wallpaper = await ky
      .get(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      })
      .json<WallpaperType>();

    return {
      isSuccess: true,
      data: wallpaper,
    };
  } catch {
    return {
      isSuccess: false,
      data: null,
    };
  }
};

export default getWallpaperById;
