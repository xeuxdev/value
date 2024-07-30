import PricingCard from "../cards/pricing-card";
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
          <PricingCard plan={plan} index={index} key={plan.name} />
        ))}
      </div>

      <Icons.world2 className="absolute -left-5 top-72 lg:top-60 -z-10" />
    </section>
  );
}
