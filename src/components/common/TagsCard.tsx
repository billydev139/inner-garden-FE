import React from "react";
import Image from "next/image";
import Images from "@/assets/images";
import Button from "./Button";
import styles from "@/styles";
import Link from "next/link";

interface TagCardProps {
  imageSrc?: string | any;

  userPicSrc: string | any;
  title: string;
  badgeHeading: string;
  badgeDescription: string;
  userName: string;
  points: string;
  tagName: string;
  className?: string;
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
  className,
}) => {
  return (
    <>
      <div className="">
        <div className="border-[2px] border-white bg-white pb-6 rounded-2xl mb-8">
          <h2 className="bg-tertiary text-white text-center font-black lg:text-[44px] rounded-2xl py-5 rounded-b-none">
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
                <Image
                  className=" bg-cover rounded-t-lg"
                  src={Images.fly}
                  alt="Card image cap"
                />
                <Image
                  className=" bg-cover rounded-t-lg"
                  src={Images.snell}
                  alt="Card image cap"
                />
                <Image
                  className=" bg-cover rounded-t-lg"
                  src={Images.cocoon}
                  alt="Card image cap"
                />
                <h2 className="font-semibold text-base font-montserrat-alternates text-white rounded-[18px] px-3 py-2 bg-tetra">
                  <Link href="/easy-details">{tagName}</Link>
                </h2>
                <h2 className="font-semibold text-base font-montserrat-alternates text-white rounded-[18px] px-3 py-2 bg-secondary">
                  {points}
                </h2>
                {/* <Button btnText={tagName} variant="#564A8D" />
                <Button btnText={points} variant="#564A8D" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsCard;
