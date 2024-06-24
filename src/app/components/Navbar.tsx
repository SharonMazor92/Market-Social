import Link from 'next/link'
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">

      <div className='font-bold text-xl text-blue-600 md:hidden lg:block w-[20%]'>
        <Link href="/"> Market Social</Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm">

        <div className='flex gap-6 text-gray-600'>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/home.png" alt="Homepage" width={16} height={16} className='w-4 h-4' />
            <span>HomePage</span>
          </Link>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/friends.png" alt="Friends" width={16} height={16} className='w-4 h-4' />
            <span>Friends</span>
          </Link>
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/stories.png" alt="Stories" width={16} height={16} className='w-4 h-4' />
            <span>Stories</span>
          </Link>
        </div>

      </div>
      <div className=" w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>

          </SignedIn>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}
export default Navbar