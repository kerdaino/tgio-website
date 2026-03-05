import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">
      <h1 className="font-bold text-lg text-blue-900">
        TGIO
      </h1>

      <div className="space-x-6 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/prayer-request">Prayer</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}