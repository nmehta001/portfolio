import { Typewriter } from "@/components/TypeWriter";
import logoPng from "/logo.png";

export const Home = () => {
  return (
    <>
      <div className="m-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="self-start flex">
            <p>hello</p>&nbsp;
            <Typewriter text={"i'm"} speed={250} />
          </div>
          <img
            className="object-scale-down pr-20 pl-10 max-w-[350px] lg:max-w-[1225px]"
            src={logoPng}
          />
          <Typewriter
            className="self-end"
            text="it's a pleasure to meet you"
            speed={300}
          />
        </div>
      </div>
      <div className="bg-[#FF83EC] h-[450px] lg:h-[650px] xl:h-[850px] relative flex items-center  mt-[20rem] lg:mt-[30rem]">
        <span className="flex h-[75%] lg:h-[100%] w-[67%] lg:w-[65%] shrink-0 grow-0 items-center justify-center rounded-[50%] bg-[#FF83EC] absolute -top-[32%] lg:-top-[50%] -right-[10%] -z-10" />
        <span className="flex h-[75%] lg:h-[100%] w-[67%] lg:w-[65%] shrink-0 grow-0 items-center justify-center rounded-[50%] bg-[#FFF] absolute -top-[55%] lg:-top-[50%] -left-[19.5%] lg:-left-[20%]" />
        <div className="flex flex-col lg:flex-row items-center lg:justify-evenly w-full lg:-mt-[20rem] px-[1rem] lg:px-0">
          <p className="z-10 lg:-ml-[20rem] text-[#fff] lg:text-[#FF83EC]">
            i design for emotion;
            <br /> taking the time to understand who and what i'm designing for.
            <br />
            what matters most to me are people.
          </p>
          <p className="text-[#fff] self-end mt-[2rem] lg:mt-0">
            so,
            <br />
            <br /> take a minute,
            <br /> breathe.
            <br /> check in with yourself.
          </p>
        </div>
      </div>
      <div className="bg-[#FF83EC] h-[450px] lg:h-[650px] xl:h-[850px] relative flex items-end">
        <span className="flex h-[75%] lg:h-[100%] w-[66%] lg:w-[65%] shrink-0 grow-0 items-center justify-center rounded-[50%] bg-[#FF83EC] absolute -bottom-[32%] lg:-bottom-[50%] -left-[10%] -z-10" />
        <span className="flex h-[75%] lg:h-[100%] w-[67%] lg:w-[65%] shrink-0 grow-0 items-center justify-center rounded-[50%] bg-[#FFF] absolute -bottom-[50%] -right-[20%] -z-0" />
        <div className="flex flex-col lg:flex-row items-center lg:justify-evenly w-full lg:ml-[2rem] px-[1rem] lg:px-0 pb-[1rem] lg:pb-0">
          <p className="lg:-ml-[20rem] text-[#fff] self-end">
            when you choose to work with me,
            <br />
            you work with a friend not a colleague.
          </p>
          <p className="z-10 self-start mt-[2rem] lg:mt-0 text-[#fff] lg:text-[#FF83EC]">
            i care about who you are,
            <br />
            how you feel
            <br />
            what you're about
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[15rem] mb-[2.5rem] lg:mt-[30rem] lg:mb-[5rem]">
        <h1 className="text-4xl lg:text-7xl">so let's explore</h1>
      </div>
    </>
  );
};
