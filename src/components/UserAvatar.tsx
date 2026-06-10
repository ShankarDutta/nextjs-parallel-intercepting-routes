import { UserAvtarType } from "@/lib/type";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";

const UserAvatar = ({ img, name }: UserAvtarType) => {
  const splitName = name.trim().split(" ");

  const initials =
    splitName[0]?.charAt(0).toUpperCase() +
    (splitName[1]?.charAt(0).toUpperCase() || "");

  return (
    <Avatar>
      <AvatarImage src={img.medium} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
