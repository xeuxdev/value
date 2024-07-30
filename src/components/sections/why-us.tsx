import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import PhoneInHandsImg from "../../assets/hands.png";
import WhyUsCard from "../cards/why-us-card";

const reasons = [
  {
    icon: Icons.briefcase,
    title: "Mobile payment make easy",
    description: "Add new, trending and rare artwork to your collection.",
  },
  {
    icon: Icons.phone,
    title: "Lifetime free transaction",
    description: "Add new, trending and rare artwork to your collection.",
  },
  {
    icon: Icons.chart,
    title: "Protect the identity",
    description: "Add new, trending and rare artwork to your collection.",
  },
  {
    icon: Icons.person,
    title: "Security & control over money",
    description: "Add new, trending and rare artwork to your collection.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="">
      <div className="bg-[#242424] pt-24 h-[28.5rem] text-center relative mb-[25rem]">
        <div className="px-5 space-y-7">
          <p className="uppercase font-poppins font-bold text-base lg:text-xl tracking-[1.8px]">
            why Choose us
          </p>

          <h3 className="font-montserrat font-semibold text-3xl lg:text-6xl text-white mb-14">
            Why choose our bigtech <br />
            <span className="text-secondary">Token</span>{" "}
          </h3>
        </div>

        <ScrollArea className="w-full h-full mt-20 ">
          <div className="flex w-max space-x-4 px-4 ml-auto lg:mx-auto">
            {reasons.map((reason) => (
              <WhyUsCard {...reason} key={reason.title} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="pt-5" />
        </ScrollArea>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-36 px-5">
        {/* texts */}
        <div className="space-y-20 max-w-[28.125rem] mx-auto lg:mx-0">
          <div className="flex items-center text-xs max-md:justify-center gap-5 md:gap-14 *:font-poppins *:font-bold *:lg:text-lg *:uppercase">
            <p>Funding Allocation</p>
            <p>Token Allocation</p>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-3xl md:text-6xl mb-7 md:mb-12">
              1 CNL = <br />
              <span className="text-secondary">0.0863 BTC</span>
            </h3>

            <p className="font-poppins font-normal lg:text-xl text-subtle mb-12 mb:mb-14">
              The World’s 1st ICO Platform That Offers Rewards and The platform
              helps investors to make easy to purchase and sell their tokens
            </p>

            <Button
              variant={"outline"}
              className="px-10 py-4 lg:px-20 uppercase "
            >
              buy now
            </Button>
          </div>
        </div>

        {/* illustrations */}

        <div className="relative">
          <img
            src={PhoneInHandsImg}
            alt="phone hands"
            className="w-full max-h-[30.3125rem] min-[500px]:w-[22rem] min-[500px]:mx-auto lg:mx-0 lg:w-full h-full"
          />
          <Icons.world2 className="absolute -z-10 -top-14 right-0 md:right-60 lg:right-32 w-[11.75rem] h-[11.75rem] " />
          <Icons.boomerang className="absolute -z-10 -bottom-3 sm:bottom-9 sm:right-32 md:right-56 lg:bottom-16 right-0 lg:right-0 w-full sm:w-[25rem] sm:h-56 lg:w-[30rem] h-[20.625rem] " />
        </div>
      </div>
    </section>
  );
}
