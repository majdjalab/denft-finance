import styles from "../style";
import { applicationMockup } from "../assets";
import SourceCode from "./SourceCode";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-PlayfairDisplay font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"> <br className="sm:block hidden" />{" "}
            <span className="text-gradient">DeNft V1.0.0</span>{" "}
          </h1>
        </div>

        <h1 className="font-PlayfairDisplay font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         Open Source React Native Application.
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 mt-8">
            <SourceCode />
          </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        DeNft V1.0.0 is an Open Source Financial application that depends on APIs.
        </p>
        
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={applicationMockup} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-scroll bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-scroll " />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <SourceCode />
      </div>
    </section>
  );
};

export default Hero;
