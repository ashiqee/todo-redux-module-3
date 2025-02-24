import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent, useState } from 'react';
import { useAppDispatch } from "../../redux/hooks";
import { DialogClose } from "../ui/dialog";
import { addTodo } from "../../redux/features/todoSlice";
import { useAddTodoMutation } from "../../redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const AddTodoModal = () => {

  //for local state management
    // const dispatch = useAppDispatch()
   
    const [task,setTask]= useState("");
    const [description,setDescription]= useState("");
    const [priority,setPriority]= useState("");

   

    //* for server 
    const [addTodo,{data,isLoading,isError,isSuccess}] = useAddTodoMutation();

    console.log({data,isLoading,isSuccess,isError});
    

    const onSubmit = (e:FormEvent)=>{
        e.preventDefault();
        const mathRandomString = Math.random().toString(36).substring(2,7)
      const taskDetails = {
        taskId: mathRandomString,
        title:task,
        description: description,
        isCompleted:false,
        priority:priority
        
      }
      //! for local state management
      //  dispatch(addTodo(taskDetails))

      //for server
      addTodo(taskDetails)
    }

    return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-primary-gradient">Add Todo</Button>
      </DialogTrigger>
     
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your tasks that yo want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              id="task"
              onBlur = {(e)=>setTask(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              onBlur = {(e)=>setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">   Priority
            </Label>
          <Select onValueChange={(value: string) => setPriority(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select priority</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
       
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
        </div>
        <DialogClose asChild>

          <Button type="submit">Save changes</Button>
        </DialogClose>
        
        </form>
      </DialogContent>
     
    </Dialog>


    );
};

export default AddTodoModal;