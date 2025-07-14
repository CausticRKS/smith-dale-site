import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/CSVE_logo_sm.png"
            alt="Caustic Monitoring Logo"
            width={182}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>
        <div className="space-x-4 text-sm text-gray-300">
<Link href="/#home">Home</Link>
<Link href="/#services">Services</Link>
<Link href="/#message">Message</Link>
<Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
