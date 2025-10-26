import GithubIcon from "@/shared/ui/icons/github-icon";
import GmailIcon from "@/shared/ui/icons/gmail-icon";
import LinkedinIcon from "@/shared/ui/icons/linkedin-icon";
import ToggleProfileImage from "@/features/toggle-profile-image/ui/toggle-profile-image";
import ModalProvider from "@/app/modal-provider";
import ResumeIcon from "@/shared/ui/icons/resume-icon";
import ProjectList from "./project-list";

export default function AboutPage() {
  return (
    <ModalProvider>
      <main className="flex flex-col gap-10">
        <section className="flex flex-col gap-5 rounded-md border p-4 tablet:flex-row">
          <div className="order-2 w-full self-stretch tablet:order-1 tablet:w-2/3">
            <div className="flex h-full flex-col justify-between gap-5">
              <div className="flex flex-col items-center gap-1 tablet:items-start">
                <h2 className="text-2xl font-bold">김승래</h2>
                <h3 className="text-lg font-bold">FrontEnd Developer</h3>
                <p>정답이 아닌 해답을 찾는 개발자</p>
              </div>

              <ul className="flex gap-4 self-center tablet:self-start">
                <li>
                  <GithubIcon />
                </li>
                <li>
                  <LinkedinIcon />
                </li>
                <li>
                  <GmailIcon />
                </li>
                <li>
                  <ResumeIcon />
                </li>
              </ul>
            </div>
          </div>
          <ToggleProfileImage />
        </section>

        {/* about me */}
        <section className="flex flex-col gap-5 rounded-md border p-4">
          <h2 className="text-2xl font-bold">About</h2>
          <div>
            정답이 아닌, 현재 상황에서 가장 적합한 해답을 찾는 것을 지향합니다.
            트렌드나 대중적인 선택보다는 프로젝트의 요구사항, 팀의 역량,
            유지보수성을 종합적으로 고려하여 기술적 의사결정을 내립니다.
          </div>
          <div>
            복잡한 기술 개념도 누구나 이해할 수 있도록 풀어서 설명하며, 학습
            과정에서 겪은 시행착오와 해결 방법을 구조화하여 기록합니다. 현재
            기술 블로그를 운영하며 프론트엔드 개발 경험과 인사이트를 꾸준히
            공유하고 있습니다.
          </div>
          <div>
            팀의 문제를 내 일처럼 받아들이고, 적극적인 소통과 피드백을 통해
            해결책을 제안하는 것은 팀의 성장을 야기하고 이는 낙수효과처럼
            개인에게도 성장이 흘러들어온다고 생각합니다.
          </div>
        </section>

        {/* skill */}
        <section className="flex flex-col gap-5 rounded-md border p-4">
          <h2 className="text-2xl font-bold">Skill</h2>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-md bg-[#E34F26] px-3 py-1 text-sm font-medium text-white">
              HTML
            </li>
            <li className="rounded-md bg-[#1572B6] px-3 py-1 text-sm font-medium text-white">
              CSS
            </li>
            <li className="rounded-md bg-[#F7DF1E] px-3 py-1 text-sm font-medium text-black">
              JavaScript
            </li>
            <li className="rounded-md bg-[#3178C6] px-3 py-1 text-sm font-medium text-white">
              TypeScript
            </li>
            <li className="rounded-md bg-[#61DAFB] px-3 py-1 text-sm font-medium text-black">
              React
            </li>
            <li className="rounded-md bg-black px-3 py-1 text-sm font-medium text-white dark:bg-white dark:text-black">
              Next.js
            </li>
          </ul>
        </section>

        {/* project */}
        <section className="flex flex-col gap-5 rounded-md border p-4">
          <h2 className="text-2xl font-bold">Project</h2>
          <ProjectList />
        </section>

        {/* education */}
        <section className="flex flex-col gap-5 rounded-md border p-4">
          <h2 className="text-2xl font-bold">Education</h2>
          <ul className="list-disc space-y-5 pl-7">
            <li>
              <p className="font-semibold">코드잇 프론트엔드 단기심화 10기</p>
              <span className="text-sm dark:text-gray-300">
                2025.06 ~ 2025.08
              </span>
            </li>
            <li>
              <p>코드잇 프론트엔드 6기</p>
              <span className="text-sm dark:text-gray-300">
                2024.03 ~ 2024.09
              </span>
            </li>
          </ul>
        </section>
      </main>
    </ModalProvider>
  );
}
