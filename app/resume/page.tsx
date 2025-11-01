import ResumePage from "@/pages/resume/ui/resume-page";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResumePage />
    </Suspense>
  );
}
