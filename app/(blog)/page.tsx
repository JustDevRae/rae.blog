import { redirect } from "next/navigation";

export default function Page() {
  redirect("/post?page=1");
}
