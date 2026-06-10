import { WallpaperLayotProps } from "@/lib/type";

const WallpaperLayot = ({ children, model }: WallpaperLayotProps) => {
  return (
    <>
      {model}
      {children}
    </>
  );
};

export default WallpaperLayot;
