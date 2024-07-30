export default function HeroCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full h-40 lg:h-64 lg:w-64 flex items-center flex-col justify-center gap-2 font-poppins relative bg-transparent gradient-box rounded-3xl shadow-[5px_5px_30px_0px_rgba(0,0,0,0.4)]">
      <p className="text-secondary font-bold text-3xl lg:text-5xl">{title}</p>
      <p className="font-normal text-xl lg:text-2xl">{description}</p>
    </div>
  );
}
