import React from "react";
import Image from "next/image";
import Images from "@/assets/images";
import Button from "./Button";

interface TagCardProps {
  imageSrc?: string | any;
  userPicSrc?: string | any;
  title?: string;
  badgeHeading?: string;
  badgeDescription?: string;
  userName?: string;
  points?: any;
  tagName?: any ;
  //   borderColor: string;
  className?: string;
  //   badgePosition?: "top" | "center";
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
  // borderColor,
  // badgePosition = "top",
  className,
  // const TagsCard = () => {
}) => {
  return (
    <>
      <div className="border-[2px] border-white bg-white rounded-2xl">
        <h2 className="bg-purple-dark text-white text-center font-black lg:text-[44px] rounded-2xl py-5 rounded-b-none">
          {title}
        </h2>
        <Image
          className=" bg-cover rounded-t-lg"
          src={imageSrc}
          alt="Card image cap"
        />
        <div className="px-14 mt-8">
          <h2 className="lg:text-[32px] font-black text-purple-dark">
            {badgeHeading}
          </h2>
          <p className="font-montserrat text-[20px]  font-medium">
            {badgeDescription}
          </p>
          <div className="flex items-center justify-between">
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
              <Button btnText={tagName} variant="#564A8D" />
              <Button btnText={points}  variant="#564A8D" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsCard;
