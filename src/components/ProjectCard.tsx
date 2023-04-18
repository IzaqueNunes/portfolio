import Image, { StaticImageData } from "next/image";

import Link from "next/link";

export type ProjectCardType = {
  id: string;
  title: string;
  image: string | StaticImageData;
  description: string;
};

interface CardProps {
  data?: ProjectCardType[];
}

export function ProjectCard({ data }: CardProps) {
  return (
    <div className="flex space-x-4">
      {data?.map((item) => (
        <Link key={item.id} href="/">
          <div className="w-80 border-2 border-gray-300 p-8 rounded-ss-3xl rounded-ee-3xl hover:border-green-600">
            <div className="h-60 flex items-center justify-center">
              <Image src={item.image} alt="" height={250} />
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-white text-xg text-center">
                {item.title}
              </h2>
              <h4 className="text-gray-300 text-justify mt-4">
                {item.description}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
