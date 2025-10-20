import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col items-center gap-5 rounded-md border p-4 tablet:flex-row">
        <Image src="/logo.png" alt="logo" width={300} height={300} priority />
        <div className="w-[300px] flex-wrap">
          <p>안녕하세요. </p>
          <p>프론트엔드 개발자 김승래입니다.</p>
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
          <li className="rounded-md bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            HTML
          </li>
          <li className="rounded-md bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            CSS
          </li>
          <li className="rounded-md bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            JavaScript
          </li>
          <li className="rounded-md bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            TypeScript
          </li>
          <li className="rounded-md bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            React
          </li>
          <li className="rounded-md bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
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
