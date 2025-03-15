import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export default function PostCard({
  slug,
  title,
  description,
  tags,
  date,
}: PostCardProps) {
  return (
    <Link href={`/post/${slug}`} className="block">
      <Card className="w-full transition-all duration-300 hover:bg-gray-100 hover:shadow-inner dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle className="flex justify-between text-lg font-semibold">
            <h1>{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="max-w-[400px] break-words text-gray-500">
            {description}
          </p>
          <p className="flex flex-wrap">
            {tags.map((tag) => (
              <span key={tag} className="tag mr-2 text-blue-500">
                {tag}
              </span>
            ))}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
