import React from "react";
import Image from "next/image";
import Images from "@/assets/images";
import Link from "next/link";
import { nestsImageData } from "@/utils/helpers/dummyContent";
export interface TagCardProps {
  imageSrc?: string | any;
  userPicSrc: string | any;
  title: string;
  badgeHeading: string;
  badgeDescription: string;
  userName: string;
  points: string;
  tagName: string;
}

const TagsCard: React.FC<TagCardProps> = ({
  imageSrc,
  title,
  badgeHeading,
  badgeDescription,
  userPicSrc,
  userName,
  points,
  tagName,
}) => {
  return (
    <section>
      <div className="border-[2px] border-white bg-white pb-6 rounded-2xl mb-8">
        <h2 className="bg-gradient-to-t from-tertiary via-tertiary to-quartary text-white text-center font-black lg:text-[44px] rounded-2xl py-5 rounded-b-none">
          {title}
        </h2>

        {imageSrc && (
          <Image
            className=" bg-cover p-[1px] rounded-t-lg"
            src={imageSrc}
            alt="Card image cap"
          />
        )}

        <div className="lg:px-14 px-2 mt-8">
          <h2 className="lg:text-[32px] text-[20px] font-black text-tertiary">
            {badgeHeading}
          </h2>
          <p className="font-montserrat lg:text-[20px] text-base  font-medium">
            {badgeDescription}
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div className="flex my-3 items-center gap-4">
              <Image
                className=" bg-cover rounded-t-lg"
                src={userPicSrc}
                alt="Card image cap"
              />
              <p className="font-semibold text-sm">{userName}</p>
            </div>
            <div className="flex items-center gap-3">
              {nestsImageData.map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} />
              ))}
              <h2 className="font-semibold text-base font-montserrat-alternates text-white rounded-[18px] px-3 py-2 bg-tetra">
                <Link href="/easy-details">{tagName}</Link>
              </h2>
              <h2 className="font-semibold text-base font-montserrat-alternates text-white rounded-[18px] px-3 py-2 bg-secondary">
                {points}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagsCard;
