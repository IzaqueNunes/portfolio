import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type AboutCardType = {
  id: string;
  image: string | StaticImageData;
  title: string;
  link: string;
};

interface CardProps {
  data?: AboutCardType[];
}

export function AboutCard({ data }: CardProps) {
  return (
    <div className="flex">
      {data?.map((item) => (
        <Link href={item.link} key={item.id}>
          <div className="w-40 flex flex-col items-center space-y-4 justify-between hover:border-b-2 hover:border-green-600">
            <div>
              <Image src={item.image} alt="card" width={30} />
            </div>
            <div>
              <h4 className="text-gray-300">{item.title}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
