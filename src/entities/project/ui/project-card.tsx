import { PROJECT_DATA } from "@/shared/config/project-data";

interface ProjectCardProps {
  title: string;
  period: string;
  summary: string;
  skill: (typeof PROJECT_DATA)[0]["skill"];
}

export default function ProjectCard({
  title,
  period,
  summary,
  skill,
}: ProjectCardProps) {
  return (
    <div className="flex h-full cursor-pointer flex-col justify-between gap-4 rounded-md border p-4 transition-shadow hover:shadow-lg dark:hover:border-yellow-500">
      <div>
        <h2 className="pb-1 text-xl font-bold">{title}</h2>
        <time className="text-sm text-gray-500">{period}</time>
        <p className="mt-2">{summary}</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skill.map((s) => (
          <li
            key={s}
            className="rounded-md bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
