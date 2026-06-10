import SingleWallpaperCard from "@/components/Card/SingleWallpaperCard";
import getWallpaperById from "@/lib/getWallpaperById";
import { dynamicPageProps } from "@/lib/type";

const page = async ({ params }: dynamicPageProps) => {
  const { id } = await params;
  const { data, isSuccess } = await getWallpaperById(id);

  if (!isSuccess || !data) {
    return (
      <div className="grid h-dvh place-items-center">
        Unable to load wallpaper. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <SingleWallpaperCard info={data} />
    </div>
  );
};

export default page;
