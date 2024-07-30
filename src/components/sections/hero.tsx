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
    <section id="#" className="relative">
      <div className=" overflow-x-hidden">
        <h1 className="font-montserrat text-center max-sm:break-words max-sm:break-all px-5 text-white uppercase mb-5">
          <p className="font-normal text-xl md:text-2xl lg:text-4xl mb-4">
            the easiest way to
          </p>
          <p className="font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[6.87rem] lg:leading-[7.5rem]">
            <span className="outlined-text">BUY &</span> sell
          </p>
          <p className="font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[6.87rem] lg:leading-[7.5rem]">
            CRYPTO
            <span className="outlined-text">CURRENCY</span>
          </p>
        </h1>

        <div className="flex lg:items-center flex-wrap justify-center px-5 lg:flex-row lg:gap-8 gap-5 mb-16 lg:mb-20">
          {items.map((item, index) => (
            <div className="flex items-center gap-3 md:gap-5" key={index}>
              <div className="md:w-8 w-6 h-6 md:h-8 rounded-full bg-secondary grid place-items-center">
                <Icons.check className="text-background w-4 h-4 md:w-6 md:h-6" />
              </div>
              <p className="font-poppins font-normal text-base md:text-xl lg:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-full pb-16 lg:pb-[4.25rem]">
          <div className="w-fit mx-auto">
            <Button
              variant={"secondary"}
              className="relative hover:bg-secondary/80 px-8 py-4 group"
            >
              GET STARTED
              <div className="h-12 md:w-12 w-10 md:h-16 btn-grad absolute top-1/2 -translate-y-1/2 invisible group-hover:visible group-hover:translate-x-7 md:group-hover:translate-x-10 left-auto right-2 -z-10 group-hover:z-10" />
              <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12  group-hover:w-14 group-hover:h-14 md:group-hover:w-20 md:group-hover:h-20 transition-all duration-300 transform bg-secondary rounded-full right-0 group-hover:translate-x-16 md:group-hover:translate-x-24 -z-10 group-hover:z-20">
                <Icons.arrowRight />
              </div>
            </Button>
          </div>

          <div className="font-poppins font-bold outlined-text opacity-15 text-7xl lg:text-[231px] absolute bottom-20 lg:-bottom-20 -right-24 lg:-right-[250px] lg:leading-[346px] -z-10">
            VALUE
          </div>
          <div className="font-poppins font-bold outlined-text opacity-15 text-7xl lg:text-[231px] absolute bottom-0 lg:-bottom-[200px] -left-32 lg:-left-[440px] lg:leading-[346px] -z-10">
            VALUE
          </div>
        </div>

        <div className="flex items-center flex-col min-[500px]:flex-row justify-center gap-5 lg:gap-[77px] pb-14 px-5">
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
