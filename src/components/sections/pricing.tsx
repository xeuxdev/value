import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const plans = [
  {
    name: "Basic",
    price: 29,
    duration: "Monthly",
    features: [
      {
        name: "Up to 2 users",
        icon: Icons.users,
      },
      {
        name: "Up to 3 live campaigns",
        icon: Icons.speaker,
      },
      {
        name: "Real-time statistics",
        icon: Icons.stats,
        disabled: true,
      },
      {
        name: "Live support",
        icon: Icons.message,
        disabled: true,
      },
    ],
  },
  {
    name: "Business",
    price: 99,
    duration: "Monthly",
    features: [
      {
        name: "Up to 2 users",
        icon: Icons.users,
      },
      {
        name: "Up to 3 live campaigns",
        icon: Icons.speaker,
      },
      {
        name: "Real-time statistics",
        icon: Icons.stats,
      },
      {
        name: "Live support",
        icon: Icons.message,
        disabled: true,
      },
    ],
  },
  {
    name: "Enterprise",
    price: 279,
    duration: "Monthly",
    features: [
      {
        name: "Up to 2 users",
        icon: Icons.users,
      },
      {
        name: "Up to 3 live campaigns",
        icon: Icons.speaker,
      },
      {
        name: "Real-time statistics",
        icon: Icons.stats,
      },
      {
        name: "Live support",
        icon: Icons.message,
      },
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative pt-32 pb-36 max-w-7xl mx-auto px-5"
    >
      <div className="space-y-3.5 text-center pb-16 max-w-[50.9375rem] mx-auto">
        <h5 className="font-montserrat font-bold text-2xl lg:text-6xl">
          Our best plans ready{" "}
          <span className="text-secondary">for your choice</span>
        </h5>
        <p className="text-muted-text text-base lg:text-xl max-w-[39.6875rem] mx-auto">
          The available plans are billed monthly according to the plan
          appropriate to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 lg:gap-8  justify-center">
        {plans.map((plan, index) => (
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
              <p className="font-normal text-sm lg:text-base">
                {plan.duration}
              </p>
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
                        : `${
                            feature.disabled ? "text-btn-text" : "text-border"
                          }`
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
        ))}
      </div>

      <Icons.world2 className="absolute -left-5 top-72 lg:top-60 -z-10" />
    </section>
  );
}
