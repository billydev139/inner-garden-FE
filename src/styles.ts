interface Styles {
  headingH1: string;
  subHeading: string;
  categoryParagraph:string;
  paragraph: string;

  flexCenter: string;
  flexStart: string;

  paddingX: string;
  paddingY: string;
  padding: string;

  marginX: string;
  marginY: string;
}

const styles: Styles = {
  headingH1: "font-montserrat-alternates text-xl md:text-2xl lg:text-[44px] font-black",
  subHeading: "font-montserrat-alternatestext-lg lg:text-[22px] font-bold",
  categoryParagraph: "font-montserrat-alternates text-[32px] font-semibold",
  paragraph: "font-montserrat-alternates text-[20px] font-medium",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export default styles;
