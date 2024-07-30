import React from "react";
import { nav_items } from "./data";

export function Desktop() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="hidden lg:flex items-center gap-11 absolute left-1/2 -translate-x-1/2">
      {nav_items.map((item, index) => {
        return (
          <a
            key={index}
            href={item.href}
            className={`${
              activeIndex === index ? "text-primary" : "text-subtle"
            } font-normal font-poppins text-sm uppercase hover:text-primary transition-colors duration-200`}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
}
