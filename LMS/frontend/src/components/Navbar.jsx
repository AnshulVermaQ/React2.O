import { School } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';
import Darkmode from '@/DarkMode';
import { Link } from 'react-router-dom';



const Navbar = () => {

  const user = true;
  return (

    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 
    fixed top-0 left-0 right-0 duration-300 z-10'>
      <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
        <div className='flex gap-2 items-center'>
          <School size={"22"} />
          <h1 className='hidden md:block font-bold text-2xl '>OneLearn</h1>
        </div>


        <div className='flex items-center gap-8'>
          {
            user ? (<DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

              </DropdownMenuTrigger>
              <DropdownMenuContent className='cursor-pointer'>
                <DropdownMenuLabel >My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'><Link to="my-learning">My learning</Link></DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'><Link to = "profile">Profile</Link></DropdownMenuItem>
        
                <DropdownMenuItem className='font-bold cursor-pointer'>Logout</DropdownMenuItem>
                <DropdownMenuItem className='font-bold cursor-pointer'>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            ) : (
              <div className='flex items-center gap-2'>
                <Button variant="outline">Login</Button>
                <Button>Signup</Button>
              </div>
            )
          }
          <Darkmode/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
