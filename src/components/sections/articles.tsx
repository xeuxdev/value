import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollAreaRef.current) {
      const scrollAmount = 300; // Adjust based on your needs
      if (direction === "left") {
        scrollAreaRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollAreaRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  React.useEffect(() => {
    const handleScrollEvent = () => {
      if (scrollAreaRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollAreaRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      }
    };

    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      scrollArea.addEventListener("scroll", handleScrollEvent);
    }
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("scroll", handleScrollEvent);
      }
    };
  }, []);

  return (
    <section id="articles" className="pb-[7.5rem]">
      {/* banner */}
      <div className="flex h-14 w-full items-center justify-between px-5 max-w-7xl xl:pl-20 mx-auto py-20">
        <p className="font-poppins font-normal text-lg ">Content Articles</p>
        <Icons.arrowRight className="w-7 h-5 text-secondary fill-secondary" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 2xl:gap-24 max-w-7xl ml-auto mr-0 relative">
        <div className="px-5 xl:pr-0 w-full max-w-[27.75rem]">
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
              className=" bg-muted-bg rounded-full w-14 h-14 md:h-[4.375rem]  md:w-[4.375rem]"
              onClick={() => handleScroll("left")}
              disabled={isAtStart}
            >
              <Icons.arrowLeft className="w-7 h-5 text-gray-400" />
            </Button>

            <Button
              variant={"outline"}
              className="rounded-full w-14 h-14 md:h-[4.375rem]  md:w-[4.375rem]"
              onClick={() => handleScroll("right")}
              disabled={isAtEnd}
            >
              <Icons.arrowRight className="w-7 h-5" />
            </Button>
          </div>
        </div>

        <ScrollArea className="w-full">
          <div className="flex px-5 gap-8">
            {blogs.map((blog, index) => (
              <div
                className="rounded-3xl w-80 md:w-[24.25rem] min-h-[29.5rem] px-6 md:px-9 py-6  relative gradient-box space-y-9 "
                key={index}
              >
                <div className="w-full h-48 rounded-3xl bg-muted-bg" />

                <div className="grid font-poppins *:font-normal gap-4 mb-5 px-1">
                  <div className="space-y-2">
                    <header className="text-sm lg:text-xl">{blog.title}</header>
                    <p className="text-xs md:text-base">
                      By {blog.author} - {blog.date}
                    </p>
                  </div>

                  <p className="text-ellipsis line-clamp-2 text-xs md:text-sm">
                    {blog.content}
                  </p>
                </div>

                <Button
                  variant={"outline"}
                  className="py-3 px-5 md:px-10 uppercase"
                >
                  read our blogs
                </Button>
              </div>
            ))}
          </div>

          <ScrollBar orientation="horizontal" className="pt-3" />
        </ScrollArea>

        <Icons.world2 className="absolute -bottom-20 left-[40%] w-32 h-32 -z-10" />
      </div>
    </section>
  );
}
