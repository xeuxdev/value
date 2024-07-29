import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { nav_items } from "./data";

export default function Mobile({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  useEffect(() => {
    setIsExiting(false);
  }, []);

  return (
    <div
      className={`fixed inset-0 w-full h-full z-20 bg-subtle lg:hidden ${
        isExiting ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="relative w-full h-full">
        <div className="absolute top-5 left-5">
          <NavLink href="/" handleClose={handleClose}>
            VALUE
          </NavLink>
        </div>

        <Button
          className="absolute top-5 right-3 animate-fade-in-up"
          onClick={handleClose}
          variant={"ghost"}
        >
          Close
        </Button>

        <div className="flex flex-col gap-7 absolute left-5 top-32 h-full overflow-y-scroll animate-fade-in-up">
          {nav_items.map((link) => (
            <NavLink key={link.name} href={link.href} handleClose={handleClose}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="w-full *:w-full px-5 *:h-12 absolute bottom-5 flex flex-col gap-3">
          <Button>sign in</Button>
          <Button className="" variant={"outline"}>
            sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({
  children,
  href,
  handleClose,
}: {
  children: React.ReactNode;
  href: string;
  handleClose?: () => void;
}) => {
  return (
    <a
      className="text-white uppercase font-poppins font-semibold text-xl tracking-[5px]"
      href={href}
      onClick={handleClose}
    >
      {children}
    </a>
  );
};
