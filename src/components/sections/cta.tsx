import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export function CTASection() {
  return (
    <section
      id="cta"
      className="py-28 max-w-7xl mx-auto px-5 xl:px-52 relative"
    >
      <div className="w-full rounded-3xl pt-11 pb-10 px-5 md:px-10 lg:px-16 flex items-center flex-col gap-10  gradient-box relative">
        <Icons.personMale />

        <div className="space-y-6 text-center">
          <h6 className="font-montserrat font-bold text-2xl lg:text-5xl ">
            Interested to <span className="text-secondary">Join Our Team?</span>
          </h6>
          <p className="font-poppins font-normal text-xs lg:text-base">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular. Li lingues differe solmen in li grammatica, li
            pronunciation.
          </p>
        </div>

        <Button variant={"secondary"} className="py-3.5 px-10 ">
          GET STARTED
          <Icons.chevronRight className="ml-2" />
        </Button>
      </div>

      <Icons.world2 className="absolute right-0 lg:right-32 lg:bottom-8 bottom-0 -z-10 w-36 h-36" />
    </section>
  );
}
