interface Styles {
  headingH1: string;
  subHeading: string;
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
  headingH1: "text-xl md:text-2xl lg:text-4xl font-black leading-10 ",
  subHeading: "text-lg lg:text-2xl font-bold",
  paragraph: "font-semibold	",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export default styles;
