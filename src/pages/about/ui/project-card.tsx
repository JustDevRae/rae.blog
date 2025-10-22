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
    <div className="flex h-full flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{period}</p>
        <p className="mt-2">{summary}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.map((s) => (
          <span
            key={s}
            className="rounded-md bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
