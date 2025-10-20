import Image from "next/image";
import GithubIcon from "@/shared/ui/icons/github-icon";
import GmailIcon from "@/shared/ui/icons/gmail-icon";
import LinkedinIcon from "@/shared/ui/icons/linkedin-icon";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col gap-5 rounded-md border p-4 tablet:flex-row">
        <div className="order-2 w-full self-stretch tablet:order-1 tablet:w-2/3">
          <div className="flex h-full flex-col justify-between gap-5">
            <div className="flex flex-col items-center gap-1 tablet:items-start">
              <h2 className="text-2xl font-bold">김승래</h2>
              <h3 className="font-bold">FrontEnd Developer</h3>
              <p>let me introduce</p>
            </div>

            <ul className="flex gap-4 self-center tablet:self-start">
              <li className="rounded-md border p-2">
                <GithubIcon />
              </li>
              <li className="rounded-md border p-2">
                <LinkedinIcon />
              </li>
              <li className="rounded-md border p-2">
                <GmailIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="relative order-1 aspect-square w-full tablet:order-2 tablet:w-1/3">
          <Image
            src="/profile.png"
            alt="profile"
            fill
            className="object-fill"
            priority
          />
        </div>
      </section>

      {/* about me */}
      <section className="flex flex-col gap-5 rounded-md border p-4">
        <h2 className="text-2xl font-bold">About</h2>
        <div>about me</div>
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
        <div>Project</div>
      </section>

      {/* education */}
      <section className="flex flex-col gap-5 rounded-md border p-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <div>Education</div>
      </section>
    </main>
  );
}
