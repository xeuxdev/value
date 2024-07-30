import { LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

type Props = {
  name: string;
  price: number;
  duration: string;
  features: (
    | {
        name: string;
        icon: (props: LucideProps) => JSX.Element;
        disabled?: undefined;
      }
    | {
        name: string;
        icon: (props: LucideProps) => JSX.Element;
        disabled: boolean;
      }
  )[];
};

export default function PricingCard({
  plan,
  index,
}: {
  plan: Props;
  index: number;
}) {
  return (
    <div
      className={`w-full max-w-[23.125rem] pt-16 pb-24 px-10 md:px-12 font-poppins relative rounded-[1.875rem] ${
        index === 1 ? "yellow-gradient-box" : "gradient-box"
      } ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
      key={plan.name}
    >
      <div className="space-y-1 text-white/95 mb-14">
        <p className="font-medium text-lg lg:text-2xl">{plan.name}</p>
        <p
          className={`${
            index === 1 ? "text-primary" : "text-border"
          } font-semibold text-5xl lg:text-7xl`}
        >
          {plan.price}$
        </p>
        <p className="font-normal text-sm lg:text-base">{plan.duration}</p>
      </div>

      <div
        className={`font-poppins font-normal text-base lg:text-lg ${
          index === 1 ? "text-primary" : "text-muted-text"
        } space-y-3`}
      >
        {plan.features.map((feature, idx) => (
          <div
            className={`flex items-center gap-3 ${
              feature.disabled ? "text-btn-text" : ""
            }`}
            key={feature.name}
          >
            <feature.icon
              className={` ${
                idx === plan.features.length - 1 && index === 1
                  ? "text-[#8396B0]"
                  : `${feature.disabled ? "text-btn-text" : "text-border"}`
              }`}
            />

            <span
              className={`${
                idx === plan.features.length - 1 && index === 1
                  ? "text-[#8396B0]"
                  : ""
              } ${feature.disabled ? "line-through" : ""}`}
            >
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      <Button
        className="py-3.5 px-10 absolute -bottom-7 left-1/2 -translate-x-1/2"
        variant={index === 1 ? "secondary" : "default"}
      >
        BUY NOW <Icons.chevronRight className="ml-2" />
      </Button>
    </div>
  );
}
