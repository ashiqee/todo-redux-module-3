import React from "react";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <AddTodoModal/>
        
        <TodoFilter/>
        
      </div>
      <div className=" w-full h-full p-[5px] space-y-3 bg-primary-gradient rounded-xl my-5  mx-auto ">
      
      <div className="bg-white p-3 space-y-3  text-center rounded-md ">
       {/* <p className="text-2xl"> There is no Todo</p> */}
       <TodoCard/>
      <TodoCard/>
      <TodoCard/>
        </div>
  
     
      </div>
    </div>
  );
};

export default TodoContainer;
