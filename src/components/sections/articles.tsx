import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ArticleCard from "../cards/article-card";

const blogs = [
  {
    title: "The Importance of Customer Engagement in Business Growth",
    author: "Admin",
    date: "14 Dec 2022",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth",
  },
  {
    title: "How to Build a Strong Brand Identity in the Digital Age",
    author: "Admin",
    date: "14 Dec 2022",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth",
  },
  {
    title: "How to Build a Strong Brand Identity in the Digital Age",
    author: "Admin",
    date: "14 Dec 2022",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth",
  },
  {
    title: "How to Build a Strong Brand Identity in the Digital Age",
    author: "Admin",
    date: "14 Dec 2022",
    content:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth",
  },
];

export function ArticlesSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = React.useState(0);
  const [isDisabled, setIsDisabled] = React.useState("left");

  const handleScroll = (direction: "left" | "right") => {
    const scrollArea = scrollRef.current;

    if (!scrollArea) {
      return;
    }

    const scrollAreaWidth = scrollArea.getBoundingClientRect().width;
    const scrollNum = Math.floor(scrollAreaWidth / 300);

    if (direction === "left") {
      const newTranslateX = translateX + scrollAreaWidth / scrollNum;

      if (newTranslateX > scrollAreaWidth - 300) {
        setIsDisabled("right");
        return;
      }

      setTranslateX(newTranslateX);
      scrollRef.current.style.transform = `translateX(-${newTranslateX}px)`;
    } else if (direction === "right") {
      const newTranslateX = translateX - scrollAreaWidth / scrollNum;

      if (newTranslateX == -(scrollAreaWidth / scrollNum)) {
        setIsDisabled("left");
        return;
      }

      setTranslateX(newTranslateX);
      scrollRef.current.style.transform = `translateX(-${newTranslateX}px)`;
    }
  };

  React.useEffect(() => {
    if (translateX > 0) {
      setIsDisabled("");
    }
  }, [translateX]);

  return (
    <section id="articles" className="pb-[7.5rem]">
      {/* banner */}
      <div className="h-14 w-full border-y border-primary my-20 ">
        <div className="max-w-7xl mx-auto flex h-full w-full items-center px-5 xl:pl-20 justify-between">
          <p className="font-poppins font-normal text-lg">Content Articles</p>
          <Icons.arrowRight className="w-7 h-5 text-secondary fill-secondary" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 2xl:gap-24 max-w-7xl ml-auto mr-0 relative">
        <div className="px-5 2xl:px-0 w-full max-w-[27.75rem]">
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-24 bg-secondary border border-secondary" />
            <p className="font-poppins font-bold text-sm md:text-base tracking-[1.35px] uppercase">
              Articles
            </p>
          </div>

          <h4 className="font-montserrat text-2xl min-[430px]:text-3xl md:text-4xl lg:text-5xl font-semibold mb-7">
            Some Interesting <br />
            <span className="text-secondary">Articles to Read</span>
          </h4>

          <div className="flex items-center gap-5">
            <Button
              variant={"ghost"}
              className={`${
                isDisabled == "left"
                  ? "bg-muted-bg text-gray-400"
                  : "bg-transparent border-border border-2 text-primary"
              } rounded-full w-14 h-14 md:h-[4.375rem]  md:w-[4.375rem]`}
              onClick={() => handleScroll("right")}
              disabled={isDisabled === "left"}
            >
              <Icons.arrowLeft className="w-7 h-5" />
            </Button>

            <Button
              variant={"ghost"}
              className={`${
                isDisabled == "right"
                  ? "bg-muted-bg text-gray-400"
                  : "bg-transparent border-border border-2 text-primary"
              } rounded-full w-14 h-14 md:h-[4.375rem]  md:w-[4.375rem]`}
              onClick={() => handleScroll("left")}
              disabled={isDisabled === "right"}
            >
              <Icons.arrowRight className="w-7 h-5" />
            </Button>
          </div>
        </div>

        <ScrollArea className="w-full">
          <div
            className="flex px-5 py-4 gap-8 transition-all duration-300"
            ref={scrollRef}
          >
            {blogs.map((blog, index) => (
              <ArticleCard {...blog} key={index} />
            ))}
          </div>

          <ScrollBar orientation="horizontal" className="pt-3" />
        </ScrollArea>

        <Icons.world2 className="absolute -bottom-20 left-[40%] w-32 h-32 -z-10" />
      </div>
    </section>
  );
}
