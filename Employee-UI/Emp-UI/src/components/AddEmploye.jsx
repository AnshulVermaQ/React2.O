import { useState } from "react"

const AddEmploye = () => {

    const[Employee,setEmployee] = useState({

        id:"",
        firstName:"",
        lastName:"",
        emailId:""
    });

    const handleChange = (e) =>{
        const value = e.target.value;

        setEmployee({...Employee,[e.target.name]:value})
    }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div>
            <div className="px-8 py-8 ">
                <div className="font-bold text-2xl  tracking wider">
                    <h1> Add new Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-bold">
                        First Name
                    </label>
                    <input
                    value={Employee.firstName}
                    name="firstName"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>

                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-bold">
                        Last Name
                    </label>
                    <input
                    name="lastName"
                    value={Employee.lastName}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>

                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-bold">
                        Email
                    </label>
                    <input

                    name="emailId"
                    value={Employee.emailId}
                    onChange={(e) => handleChange(e)}
                    type="email"
                    className="h-10 w-96 border mt-2 px-2 py-2"
                    ></input>

                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded-md text-white font-semibold hover:bg-gray-700 bg-gray-950 py-2 px-4">Save</button>

                    <button className="rounded-md text-white font-semibold hover:bg-gray-700 bg-gray-950 py-2 px-4">Clear</button>
                </div>

            </div>
       
        </div>
    </div>
  )
}

export default AddEmploye
