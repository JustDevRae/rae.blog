"use client";

import Image from "next/image";
import { Project } from "@/shared/model/project-data.type";
import { useModal } from "@/shared/lib/context/modal-context";
import ProjectImageCarousel from "./project-image-carousel";

interface ProjectDetailModalProps {
  project: Project;
}

export default function ProjectDetailModal({
  project,
}: ProjectDetailModalProps) {
  const { openModal } = useModal();

  const handleOpenImageModal = (initialSlide: string) => {
    openModal(
      `project-image-modal-${project.title}-${initialSlide}`,
      <ProjectImageCarousel
        images={project.images}
        initialSlide={initialSlide}
      />,
    );
  };

  return (
    <article className="flex flex-col gap-4">
      {/* project-introduce */}
      <section className="rounded-md border p-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <h2 className="pb-1 text-xl font-bold">{project.title}</h2>
            <time className="text-sm text-gray-500">{project.period}</time>
          </div>

          {/* link */}
          <nav className="my-2 flex gap-4">
            {/* github-link */}
            {project.githubUrl && (
              <button
                type="button"
                className="rounded-sm border p-3 dark:hover:bg-gray-800"
              >
                <a
                  aria-label="github link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-foreground"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </button>
            )}

            {/* deploy-link */}
            {project.deployUrl && (
              <button
                type="button"
                className="rounded-sm border p-3 dark:hover:bg-gray-800"
              >
                <a
                  aria-label="deploy link"
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    <path d="m21 3-9 9" />
                    <path d="M15 3h6v6" />
                  </svg>
                </a>
              </button>
            )}
          </nav>
        </div>

        {/* project-description */}
        {project.description && project.description.length > 0 && (
          <ul>
            {project.description.map((desc) => (
              <li key={desc} className="mb-3">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* project-functions */}
      <section className="rounded-md border p-4">
        <h2 className="pb-3 text-xl font-bold">주요 기능</h2>
        {project.projectFunctions && project.projectFunctions.length > 0 && (
          <ul className="list-disc pl-5">
            {project.projectFunctions.map((func) => (
              <li key={func}>{func}</li>
            ))}
          </ul>
        )}
      </section>

      {/* skill */}
      <section className="rounded-md border p-4">
        <h2 className="pb-3 text-xl font-bold">Skill</h2>
        <div className="flex flex-wrap gap-2">
          {project.skill.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* implement */}
      <section className="rounded-md border p-4">
        <h2 className="pb-3 text-xl font-bold">작업 내역</h2>
        {project.implements && project.implements.length > 0 && (
          <ul>
            {project.implements.map((implement) => (
              <li key={implement.title}>
                <h3 className="font-semibold">{implement.title}</h3>
                <p>{implement.detail}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* trouble-shooting */}
      <section className="rounded-md border p-4">
        <h2 className="pb-3 text-xl font-bold">Troubleshooting</h2>
        {project.troubleShooting && project.troubleShooting.length > 0 && (
          <div className="flex flex-col gap-4">
            {project.troubleShooting.map((item) => (
              <div key={item.title} className="">
                <h3 className="font-bold">{item.title}</h3>
                <h4 className="font-semibold">Trouble</h4>
                <p>{item.trouble}</p>
                <h4 className="font-semibold">Cause</h4>
                <p>{item.cause}</p>
                <h4 className="font-semibold">Solution</h4>
                <p>{item.solution}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* project-images */}
      <section className="rounded-md border p-4">
        <h2 className="pb-3 text-xl font-bold">Images</h2>
        {project.images && project.images.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            {project.images.map((image) => (
              <figure
                key={image.alt}
                className="cursor-pointer rounded-md border hover:border-yellow-500"
                onClick={() => handleOpenImageModal(image.alt)}
                role="presentation"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={100}
                  objectFit="cover"
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        ) : (
          <div className="rounded-md border">Not Ready Images</div>
        )}
      </section>
    </article>
  );
}
