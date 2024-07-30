import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Desktop } from "./desktop";
import Mobile from "./mobile";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  return (
    <header className="mx-auto px-5 max-w-7xl pt-10">
      <nav className="flex w-full items-center justify-between relative">
        <a
          href="/"
          className="font-poppins font-normal text-lg md:text-2xl tracking-[5.5px]"
        >
          VALUE
        </a>

        <Desktop />

        <div className="lg:flex items-center gap-5 hidden">
          <Button variant={"ghost"}>sign in</Button>
          <Button variant={"outline"} className="px-11 py-3">
            sign up
          </Button>
        </div>

        <Button
          variant={"ghost"}
          className="lg:hidden"
          onClick={() => setOpenMobileMenu(true)}
        >
          <Icons.menu />
        </Button>

        {openMobileMenu && <Mobile setIsOpen={setOpenMobileMenu} />}
      </nav>
    </header>
  );
}
