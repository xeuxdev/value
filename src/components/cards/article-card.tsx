import { Button } from "../ui/button";

export default function ArticleCard({
  author,
  date,
  title,
  content,
}: {
  author: string;
  date: string;
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-3xl min-w-80 md:min-w-[24.25rem] min-h-[29.5rem] px-6 md:px-9 py-6  relative gradient-box space-y-9 ">
      <div className="w-full h-48 rounded-3xl bg-muted-bg" />

      <div className="grid font-poppins *:font-normal gap-4 mb-5 px-1">
        <div className="space-y-2">
          <header className="text-sm lg:text-xl line-clamp-2">{title}</header>
          <p className="text-xs md:text-base">
            By {author} - {date}
          </p>
        </div>

        <p className="text-ellipsis line-clamp-2 text-xs md:text-sm">
          {content}
        </p>
      </div>

      <Button variant={"outline"} className="py-3 px-5 md:px-10 uppercase">
        read our blogs
      </Button>
    </div>
  );
}
