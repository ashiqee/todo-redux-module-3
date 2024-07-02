import React, { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateTodo } from '../../redux/features/todoSlice';

const UpdateTodoModal = ({title,description,id}) => {
    const dispatch = useAppDispatch()
   
    const [updateTask, setTask]= useState(title)
    const [updateDescription,setDescription]= useState(description);

    const onSubmit =(e)=>{
        e.preventDefault()
        const newValues = {
           
            title:updateTask,
            description: updateDescription,
            
          }
          const payload = {
            id:id,
            newValues:newValues
          }
          console.log(payload);
          dispatch(updateTodo(payload))
          
    }
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Button 
          
          className="bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</Button>
        </DialogTrigger>
       
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Task</DialogTitle>
            <DialogDescription>
              Update your tasks that yo want!
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
                defaultValue={title}
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
                defaultValue={description}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogClose asChild>
  
            <Button className='' type="submit">Save changes</Button>
          </DialogClose>
          
          </form>
        </DialogContent>
       
      </Dialog>
    );
};

export default UpdateTodoModal;