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
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '@/features/api/authApi';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const { user } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();

  const logoutHandler = async () => {
    await logoutUser();
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "Logged out successfuly");
      navigate("/login");
    }
  }, [isSuccess])

  return (

    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 
    fixed top-0 left-0 right-0 duration-300 z-10'>
      <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
        <div className='flex gap-2 items-center'>
          <School size={"22"} />
          <Link to="/"><h1 className='hidden md:block font-bold text-2xl '>OneLearn</h1></Link>
        </div>


        <div className='flex items-center gap-8'>
          {
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src={user?.photoUrl || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link to="my-learning">My learning</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="profile">Profile</Link></DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
                  <DropdownMenuItem ><Link to="/admin/dashboard">Dashboared</Link></DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline"><Link to="/login">Login</Link></Button>
                <Button><Link to="/signup">Signup</Link></Button>
              </div>
            )
          }

          <Darkmode />
        </div>
      </div>

    </div>
  )
}

export default Navbar
