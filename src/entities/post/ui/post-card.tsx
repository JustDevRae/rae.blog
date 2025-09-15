import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export function PostCard({
  slug,
  title,
  description,
  tags,
  date,
}: PostCardProps) {
  return (
    <Link href={`/post/${slug}`} className="block">
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <p className="flex flex-wrap">
            {tags.map((tag) => (
              <span key={tag} className="tag mr-2 text-yellow-500">
                {tag}
              </span>
            ))}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
