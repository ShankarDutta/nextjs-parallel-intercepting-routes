import { Button } from "@/components/shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Dialog, DialogContent } from "@/components/shadcnui/dialog";
import UserAvtar from "@/components/UserAvtar";
import getWallpaperById from "@/lib/getWallpaperById";
import { dynamicPageProps } from "@/lib/type";
import Image from "next/image";

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
    <Dialog defaultOpen>
      <DialogContent className="w-full! max-w-5xl! p-6">
        <Card className="border-0 shadow-none ring-0">
          <CardHeader className="">
            <section className="flex flex-wrap items-center justify-end">
              <a
                href={data.urls.regular}
                download={`wallpaper-${data.id}.jpg`}
                rel="noopener noreferrer">
                <Button className="bg-green-400 text-white hover:bg-green-500">
                  Download
                </Button>
              </a>
            </section>
          </CardHeader>

          <CardContent className="space-y-2">
            <Image
              src={data.urls.regular}
              alt={`wallpaper ${data.id}`}
              width={data.width}
              height={data.height}
              priority
              className="mx-auto h-[480px] w-full rounded-lg object-contain"
            />

            <div className="flex items-center gap-4">
              <UserAvtar
                img={data.user.profile_image}
                name={data.user.name}
              />
              <CardTitle>{data.user.name}</CardTitle>
            </div>

            <CardDescription>{data.description}</CardDescription>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default page;
