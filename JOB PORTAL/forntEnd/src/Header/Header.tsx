import { Avatar, Indicator } from "@mantine/core";
import { IconBellRingingFilled, IconSettingsFilled, IconUniverse } from "@tabler/icons-react";
import Navlinks from "./Navlinks";

const Header = () => {
  return (
    <div className="w-full bg-black px-6 text-white h-20 flex justify-between items-center font-['poppins']">

      <div className="flex items-center gap-2 text-cyan-400">

        <IconUniverse size={56} stroke={1.8} />
        <span className="text-3xl font-bold">Mars</span>

      </div>
      {Navlinks()}
      <div className="items-center flex gap-3 cursor-pointer">

       
       <div className="flex gap-2 items-center">

        <div> Jhon snow</div>
        <Avatar src="image.png" alt="it's me" size={50} />
       </div>
       
       <div className="bg-mine-shaft-950 p-2 rounded-full">
       <IconSettingsFilled size={20} stroke={1.5}/>
       </div>

       <div className="bg-mine-shaft-950 p-2 rounded-full">
       
       <Indicator color="cyan" processing>
       <IconBellRingingFilled size={20} stroke={1.5}/>
       </Indicator>
       

       </div>
        
      </div>
    </div>
  );
};

export default Header;
