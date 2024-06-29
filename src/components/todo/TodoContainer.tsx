import React from "react";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <Button>Add Todo</Button>
        <Button>Filter</Button>
      </div>
      <div className=" w-full h-full p-5 space-y-3 bg-primary-gradient rounded-xl my-5  mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold">
       <p> There is no Todo</p>
        </div>
      <TodoCard/>
     
      </div>
    </div>
  );
};

export default TodoContainer;
