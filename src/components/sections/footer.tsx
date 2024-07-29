import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export function Footer() {
  return (
    <footer className="bg-white/5">
      <div className="py-24 px-5 max-w-7xl mx-auto grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 lg:gap-32 gap-10">
        <div className="space-y-7 md:space-y-10 font-poppins">
          <header className="font-semibold text-lg md:text-xl">
            Quick Links
          </header>
          <ul className="space-y-4 *:font-normal *:text-sm *:md:text-base *:capitalize">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Hubs</a>
            </li>
            <li>
              <a href="#">Pricing Plan</a>
            </li>
          </ul>
        </div>

        <div className="space-y-7 md:space-y-10 font-poppins">
          <header className="font-semibold text-lg md:text-xl">
            Contact Us
          </header>
          <ul className="space-y-4 *:font-normal *:text-sm *:md:text-base *:capitalize *:flex *:items-start *:gap-2">
            <li>
              <Icons.email />
              <a href="mailto:hello@website.com" target="_blank">
                hello@website.com
              </a>
            </li>
            <li>
              <Icons.location />
              <a href="#" className="w-full">
                Riverside Building, County Hall, London SE1 7PB, United Kingdom
              </a>
            </li>
            <li>
              <Icons.call />
              <a href="tel:+02 5421234560">+02 5421234560</a>
            </li>
          </ul>
        </div>

        <div className="space-y-7 md:space-y-10 font-poppins">
          <header className="font-semibold text-lg md:text-xl">
            Subscribe
          </header>

          <div className="flex items-center relative w-full max-w-[25rem]">
            <input
              type="text"
              className="bg-[#3F4143] placeholder:text-primary font-normal py-4 px-6 rounded-3xl w-full"
              placeholder="Enter email address"
            />
            <Button
              variant={"secondary"}
              className="rounded-none absolute top-0 right-0 h-full py-3 px-4"
            >
              Subscribe
            </Button>
          </div>

          <div className="flex items-center gap-4 *:w-10 *:h-10 *:rounded-full *:p-2 *:bg-border">
            <a href="https://www.x.com">
              <Icons.twitter />
            </a>
            <a href="https://www.instagram.com">
              <Icons.instagram />
            </a>
            <a href="https://www.facebook.com">
              <Icons.facebook />
            </a>
            <a href="https://www.youtube.com">
              <Icons.youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
