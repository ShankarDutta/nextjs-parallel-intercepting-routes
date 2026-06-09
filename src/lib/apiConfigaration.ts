"use server";

import ky from "ky";
import { WallpaperType } from "./type";

const apiConfigaration = async () => {
  try {
    const getWallpaperInfo = await ky
      .get("https://api.unsplash.com/photos", {
        searchParams: {
          per_page: 26,
        },
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      })
      .json<WallpaperType[]>();

    return {
      isSuccess: true,
      data: getWallpaperInfo,
    };
  } catch (error) {
    console.error(error);
    return {
      isSuccess: false,
      data: [],
    };
  }
};

export default apiConfigaration;
