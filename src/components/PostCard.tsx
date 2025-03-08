import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
}

export default function PostCard({ slug, title, date }: PostCardProps) {
  return (
    <Link href={`/post/${slug}`} className="block">
      <Card className="transition-all duration-300 hover:bg-gray-100 hover:shadow-inner dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
