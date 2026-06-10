import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import WallpaperMisonary from "@/components/WallpaperMisonary";

const loading = () => {
  const skeltonsize = [
    {
      id: 1,
      ratio: "aspect-3/4",
    },
    {
      id: 2,
      ratio: "aspect-4/5",
    },
    {
      id: 3,
      ratio: "aspect-square",
    },
    {
      id: 4,
      ratio: "aspect-3/4",
    },
    {
      id: 5,
      ratio: "aspect-video",
    },
    {
      id: 6,
      ratio: "aspect-square",
    },
    {
      id: 7,
      ratio: "aspect-4/5",
    },
    {
      id: 8,
      ratio: "aspect-video",
    },
    {
      id: 9,
      ratio: "aspect-4/5",
    },
    {
      id: 10,
      ratio: "aspect-square",
    },
    {
      id: 11,
      ratio: "aspect-video",
    },
    {
      id: 12,
      ratio: "aspect-4/5",
    },
  ];

  return (
    <WallpaperMisonary>
      {skeltonsize.map((s) => (
        <CardSkeleton
          key={s.id}
          info={s.ratio}
        />
      ))}
    </WallpaperMisonary>
  );
};

export default loading;
