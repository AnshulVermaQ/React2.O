import { useEffect, useState } from "react"
import axios from "axios"
import TodoList from "./Todo-list";


const Todo = () => {

    const[isLoading,setIsLoading]  = useState(false);
    const [data, setData] = useState([]);
    const[error,setError] = useState('');

    useEffect(() => {
        setIsLoading(true)

        axios.get('https://dummyjson.com/todos').then(
            (response) =>{
                console.log(data);
                setData(response?.data?.todos);
            }
        ).catch((error) => {console.log("Error"); setError(error)})
        .finally(() => setIsLoading(false))
    },[])


    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Error occured</h1>
    }

  return (
    <div>
      <TodoList todos={data} />
    </div>
  )
}

export default Todo
