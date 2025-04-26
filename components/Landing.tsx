import Image from "next/image";
import LandingImage from "../public/landing.png";
const Landing = () => {
  return (
    <main className="py-[100px]">
      <div className="container flex justify-between items-center xl:gap-[100px] 2xl:gap-[300px]">
        <div className="landing-text">
          <h2 className="text-[44px] font-bold text-main mb-[48px]">
            Top Recipes and Meals
          </h2>
          <p className="text-[20px] leading-[2] tracking-[2px]">
            Discover delicious recipes with ease using our free recipe finder.
            Search meals by name, category, or ingredients powered by the open
            Recipe API. Perfect for food lovers and home cooks—no sign-up
            required to explore!
          </p>
        </div>
        <Image
          src={LandingImage}
          alt="Landing-Image"
          priority={true}
          className="hidden md:block w-[400px] xl:w-[550px]"
        ></Image>
      </div>
    </main>
  );
};

export default Landing;
