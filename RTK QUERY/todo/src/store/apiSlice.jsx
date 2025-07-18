import {createApi} from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const apiSlice = createApi({

    endpoints:function(builder){

        return {

            getAllTodos: builder.query({

                queryFn:async() =>{
                   const respone = await axios.get("https://dummyjson.com/todos");
                   const data  = respone.data.todos;
                   return {data:data};
                }
            })
        }
    }
})

export default apiSlice;
export const {useGetAllTodosQuery} = apiSlice;