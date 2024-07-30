import { LucideProps } from "lucide-react";

export default function WhyUsCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: (props: LucideProps) => JSX.Element;
}) {
  const Icon = icon;
  return (
    <div
      className="min-h-[22.1875rem] w-full max-w-[19.25rem] rounded-lg gradient-box-2 relative"
      key={title}
    >
      <div className="flex flex-col px-11 py-[3.75rem] space-y-7">
        <div className="w-20 h-20 rounded-full border-4 border-[#FFFFFF0F] bg-[#FFFFFF12] grid place-items-center ">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="text-white text-left space-y-6 font-poppins">
          <p className="text-base lg:text-xl font-medium">{title}</p>
          <p className="text-xs font-normal text-subtle lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
