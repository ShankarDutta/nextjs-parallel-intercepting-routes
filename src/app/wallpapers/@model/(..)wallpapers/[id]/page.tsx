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
import apiConfigaration from "@/lib/apiConfigaration";
import { dynamicPageProps } from "@/lib/type";
import Image from "next/image";

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
    <Dialog defaultOpen>
      <DialogContent className="w-full! max-w-5xl! p-6">
        <Card className="border-0 shadow-none ring-0">
          <CardHeader className="">
            <section className="flex flex-wrap items-center justify-end">
              <a
                href={getImg.urls.regular}
                download={`wallpaper-${getImg.id}.jpg`}
                rel="noopener noreferrer">
                <Button className="bg-green-400 text-white hover:bg-green-500">
                  Download
                </Button>
              </a>
            </section>
          </CardHeader>

          <CardContent className="space-y-2">
            <Image
              src={getImg.urls.regular}
              alt={`wallpaper ${getImg.id}`}
              width={getImg.width}
              height={getImg.height}
              priority
              className="mx-auto h-120 w-full rounded-lg object-contain"
            />

            <div className="flex items-center gap-4">
              <UserAvtar
                img={getImg.user.profile_image}
                name={getImg.user.name}
              />
              <CardTitle>{getImg.user.name}</CardTitle>
            </div>

            <CardDescription>{getImg.description}</CardDescription>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default page;
