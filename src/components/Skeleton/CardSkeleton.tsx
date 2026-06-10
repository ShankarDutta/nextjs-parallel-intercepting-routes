"use client";

import { Skeleton } from "../shadcnui/skeleton";

type CardSkeletonProps = {
  info: string;
};

const CardSkeleton = ({ info }: CardSkeletonProps) => {
  return <Skeleton className={`${info} w-full`} />;
};

export default CardSkeleton;
