import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to the first section by default
  redirect("/yearly-analysis")
}

