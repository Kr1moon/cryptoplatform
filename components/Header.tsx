'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Header = () => {
    const pathname = usePathname();
  return (
    <header className="main-container inner">
      <Link href='/'>
      <Image
      src='/logo.svg'
      alt=""
      width={132}
      height={40}
      className=""
      />
      </Link>
      <nav>
        <Link href='/' className={cn('nav-link', {'is-active': pathname === '/', 'is-home': true})}>
        Home
        </Link>
        <p className="">
            Search Modal
        </p>
        <Link href='/coins' className={cn('nav-link', {'is-active': pathname === '/coins'})}>
        All Coins
        </Link>
      </nav>
    </header>
  )
}

export default Header
