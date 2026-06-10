import WallpaperCard from "@/components/Card/WallpaperCard";
import WallpaperMisonary from "@/components/WallpaperMisonary";
import apiConfigaration from "@/lib/apiConfigaration";

const Page = async () => {
  const getWallpaper = await apiConfigaration();

  if (!getWallpaper.isSuccess) {
    return (
      <div className="grid h-dvh place-items-center">
        Failed to load wallpapers.
      </div>
    );
  }

  return (
    <WallpaperMisonary>
      {getWallpaper.data.map((img) => (
        <WallpaperCard
          key={img.id}
          info={img}
        />
      ))}
    </WallpaperMisonary>
  );
};

export default Page;
