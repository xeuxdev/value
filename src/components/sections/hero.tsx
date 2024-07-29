import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const items = ["100% Guarantee", "Safe Payment", "24/7 Support"];
const achievements = [
  {
    title: "20+",
    description: "Wallet Types",
  },
  {
    title: "2000+",
    description: "Wallet types",
  },
  {
    title: "10M+",
    description: "Transactions",
  },
];

export function HeroSection() {
  return (
    <section id="#" className="relative px-5 ">
      <div className=" overflow-x-hidden">
        <h1 className="font-montserrat text-center text-white uppercase mb-5">
          <p className="font-normal text-xl md:text-2xl lg:text-4xl mb-4">
            the easiest way to
          </p>
          <p className="font-black text-3xl md:text-8xl lg:text-[6.87rem] lg:leading-[7.5rem]">
            <span className="outlined-text">BUY &</span> sell
          </p>
          <p className="font-black text-3xl md:text-8xl lg:text-[6.87rem] lg:leading-[7.5rem]">
            <span className="outlined-text">CRYPTO</span>
            CURRENCY
          </p>
        </h1>

        <div className="flex lg:items-center lg:justify-center flex-col lg:flex-row lg:gap-8 gap-5 mb-16 lg:mb-20">
          {items.map((item, index) => (
            <div className="flex items-center gap-3 md:gap-5" key={index}>
              <div className="md:w-8 w-6 h-6 md:h-8 rounded-full bg-secondary grid place-items-center">
                <Icons.check className="text-background w-4 h-4" />
              </div>
              <p className="font-poppins font-normal text-base md:text-xl lg:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="relative group w-full pb-16 lg:pb-[4.25rem]">
          <div className="w-fit mx-auto">
            <Button variant={"secondary"} className="py-4 px-8 lg:px-12">
              GET STARTED
            </Button>
          </div>

          <div className="font-poppins font-bold outlined-text opacity-15 text-7xl lg:text-[231px] absolute -bottom-20 -right-20 lg:-right-[250px] leading-[346px]">
            VALUE
          </div>
          <div className="font-poppins font-bold outlined-text opacity-15 text-7xl lg:text-[231px] absolute bottom-0 lg:-bottom-[200px] -left-32 lg:-left-[440px] leading-[346px]">
            VALUE
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row justify-center gap-5 lg:gap-[77px] pb-14">
          {achievements.map((achievement, index) => (
            <div
              className="w-full h-40 lg:h-64 lg:w-64 flex items-center flex-col justify-center gap-2 font-poppins relative bg-transparent gradient-box rounded-3xl shadow-[5px_5px_30px_0px_rgba(0,0,0,0.4)]"
              key={index}
            >
              <p className="text-secondary font-bold text-3xl lg:text-5xl">
                {achievement.title}
              </p>
              <p className="font-normal text-xl lg:text-2xl">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
