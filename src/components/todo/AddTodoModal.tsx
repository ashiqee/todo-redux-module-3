import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { DialogClose } from "../ui/dialog";


const AddTodoModal = () => {
    const [task,setTask]= useState("");
    const [description,setDescription]= useState("");

    const onSubmit = (e)=>{
        e.preventDefault();

        console.log({task,description})
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