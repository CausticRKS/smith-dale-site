import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F355E]/95 backdrop-blur-md shadow-lg border-b-2 border-[#B22234]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/smithdalelogo_sm.png"
            alt="Smith-Dale Small Logo"
            width={182}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/#home"
            className="text-[#F5E8D0] hover:text-[#D4C2A3] transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="text-[#F5E8D0] hover:text-[#D4C2A3] transition-colors duration-200"
          >
            Services
          </Link>

          <Link
            href="/#message"
            className="text-[#F5E8D0] hover:text-[#D4C2A3] transition-colors duration-200"
          >
            Message
          </Link>

          <Link
            href="/#contact"
            className="text-[#F5E8D0] hover:text-[#D4C2A3] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}