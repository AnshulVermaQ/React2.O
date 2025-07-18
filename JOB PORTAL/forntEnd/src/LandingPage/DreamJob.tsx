import { TextInput } from "@mantine/core";
import { Button } from "../components/ui/button";


const DreamJob = () => {
  return (
    <div className="flex items-center px-20 py-10">
      <div className="flex flex-col w-[45%] gap-4">

        <div className="text-6xl font-bold leading-tight text-white [&>span]:text-cyan-400">
          Find your <span>dream job</span> with us.
        </div>
        <div className="text-lg text-white">
          Great Life begins with a great Company. Explore thousands of jobs in one place. At <span className="text-cyan-400">Mars</span>.
        </div>


        <div className="flex">
        <TextInput
        className="text-white"
      label="Job title"
      description="Input description"
      placeholder="Software Engineer"
    />
     <TextInput
     className="text-white"
      label="Job type"
      description="Input description"
      placeholder="Full time"
    />
    <Button>Submit</Button>
        </div>

      </div>

      <div className="w-[55%] flex items-center justify-center py-10">
        <div className="w-[30rem]"> <img src="boy5.png" alt="/"></img> </div>
      </div>
    </div>
  )
}

export default DreamJob;
