import React from 'react';
import TodoItem from './Todo-item';
import { useGetAllTodosQuery } from '../store/apiSlice';

const TodoList = () => {
  const { data, isLoading, error } = useGetAllTodosQuery(); 
  console.log({ data });
  console.log({ isLoading });
  console.log({ error });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
