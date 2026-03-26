'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
    const pathName = usePathname()
  return (
    <header>
      <div className="main-container inner flex items-center justify-between">
        
   
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="CoinPulse logo"
            width={185}
            height={40}
            priority
          />
        </Link>
          
          <nav>
            <Link href="/" className={cn('nav-link',{
                'is-active' : pathName === '/',
                'is-home' : true,
            })}> Home </Link>

            <p>Search Modal </p>

            <Link href='/coins' className={cn('nav-link',{
                'is-active' : pathName === '/coins',
              
            })}> All Coins </Link>
          </nav>
       </div>
      
    </header>
  )
}

export default Header