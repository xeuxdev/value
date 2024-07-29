import React from "react";
import { nav_items } from "./data";

export function Desktop() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="hidden lg:flex items-center gap-11">
      {nav_items.map((item, index) => {
        // const isActiveItem = item.path === window.location.pathname;
        return (
          <a
            key={index}
            href={item.path}
            className={`${
              activeIndex === index ? "text-primary" : "text-subtle"
            } font-normal font-poppins text-sm uppercase`}
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
