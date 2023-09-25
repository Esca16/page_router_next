import Link from "next/link";

export default function home() {
  return(
    <main>
      <h1>Home Page</h1>
      <Link href={"/about"}>About</Link>
    </main>
  )
}