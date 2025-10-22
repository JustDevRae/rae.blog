"use client";

import { Project } from "@/shared/model/project-data.type";
import { useModal } from "@/shared/lib/context/modal-context";
import Image from "next/image";
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
    <div className="flex max-h-[85vh] flex-col gap-4 overflow-y-auto">
      {/* project-summary */}
      <section>
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-sm text-gray-500">{project.period}</p>
        <p>{project.summary}</p>

        {/* github-link */}
        {project.githubUrl && (
          <p>
            <span className="font-semibold">GitHub:</span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.githubUrl}
            </a>
          </p>
        )}

        {/* deploy-link */}
        {project.deployUrl && (
          <p>
            <span className="font-semibold">Deploy:</span>
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.deployUrl}
            </a>
          </p>
        )}

        {/* project-description */}
        <p className="font-semibold">Description:</p>
        <p>{project.description}</p>
      </section>

      {/* skills */}
      <section>
        <p className="font-semibold">Skills:</p>
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

      {/* project-implement */}
      <section>
        {project.implements && project.implements.length > 0 && (
          <>
            <p className="font-semibold">Implements:</p>
            <ul className="list-disc pl-5">
              {project.implements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* project-troubleShooting */}
      <section>
        {project.troubleShooting && (
          <>
            <h3 className="mt-4 text-xl font-bold">Troubleshooting</h3>
            <p className="font-semibold">
              Title: {project.troubleShooting.title}
            </p>
            <p className="font-semibold">Trouble:</p>
            <p>{project.troubleShooting.trouble}</p>
            <p className="font-semibold">Cause:</p>
            <p>{project.troubleShooting.cause}</p>
            <p className="font-semibold">Solution:</p>
            <p>{project.troubleShooting.solution}</p>
          </>
        )}
      </section>

      {/* project-images */}
      <section>
        {project.images && project.images.length > 0 ? (
          <div>
            <h3 className="mt-4 text-xl font-bold">Images</h3>
            <div className="sm:grid-cols-3 md:grid-cols-4 grid grid-cols-2 gap-2">
              {project.images.map((image) => (
                <div
                  key={image.alt}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
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
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>No images available.</div>
        )}
      </section>
    </div>
  );
}
