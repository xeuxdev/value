import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export function About() {
  return (
    <section id="about" className="relative pt-32 pb-40 max-w-7xl mx-auto px-5">
      <div className="flex flex-col-reverse lg:flex-row gap-16 xl:gap-28 ">
        {/* illustration */}
        <div className="w-full min-[375px]:w-80 h-56 min-[320px]:h-80 min-[375px]:h-80 md:w-[33.625rem] md:h-[33.625rem] rounded-full bg-transparent border border-[#F8F8F845] p-4 md:p-8 relative z-10 mx-auto lg:mx-0">
          <div className="w-full h-full md:w-[29.8125rem] md:h-[29.8125rem] rounded-full bg-[#161616] p-8 md:p-[4.375rem]">
            <div className="bg-[#242424] rounded-full w-full h-full" />
          </div>
          <Icons.world className="absolute -z-10 top-0 -left-7 w-[11.75rem] h-[11.75rem] " />
        </div>

        {/* text */}
        <div className="max-w-[30.125rem] mx-auto lg:mx-0">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-24 bg-secondary border border-secondary" />
            <p className="font-poppins font-bold text-sm md:text-base tracking-[1.35px] uppercase">
              Who we are
            </p>
          </div>

          <h2 className="font-montserrat text-2xl lg:text-5xl font-semibold mb-8">
            The World’s <span className="text-secondary">1st ICO</span> Platform
            That Offers Rewards{" "}
          </h2>

          <p className="font-poppins font-normal text-sm lg:text-base text-muted mb-11">
            The World’s 1st ICO Platform That Offers Rewards and The platform
            helps investors to make easy to purchase and sell their tokens
          </p>

          <Button
            variant={"outline"}
            className="px-10 py-4 lg:px-20 uppercase "
          >
            Purchase Tokens
          </Button>
        </div>
      </div>
    </section>
  );
}
