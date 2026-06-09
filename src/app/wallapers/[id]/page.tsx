import SingleWallpaperCard from "@/components/Card/SingleWallpaperCard";
import apiConfigaration from "@/lib/apiConfigaration";
import { dynamicPageProps } from "@/lib/type";

const page = async ({ params }: dynamicPageProps) => {
  const { id } = await params;
  const { data } = await apiConfigaration();

  const getImg = data.find((img) => img.id === id);

  if (!getImg) {
    return (
      <div className="grid h-dvh place-items-center">
        Failed to load wallpaper.
      </div>
    );
  }

  return (
    <div>
      <SingleWallpaperCard info={getImg} />
    </div>
  );
};

export default page;
