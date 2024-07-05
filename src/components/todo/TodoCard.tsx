import React from 'react';
import { Button } from '../ui/button';
// import { useAppDispatch } from '../../redux/hooks';
import { removeTodo, toggleComplete, updateTodo } from '../../redux/features/todoSlice';
import UpdateTodoModal from './UpdateTodoModal';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../redux/api/api';

type TTodoCardProps ={
  _id:string
  taskId:string
  title: string
  description: string
  isCompleted: boolean
  priority:string
}



const TodoCard = ({title,priority,description,_id,isCompleted}:TTodoCardProps) => {
  // const dispatch = useAppDispatch()

const [updateTodo,{isLoading}]= useUpdateTodoMutation();
const [deleteTodo,{}]= useDeleteTodoMutation()

  const toggleState = ()=>{

    const taskData = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    }

    const options ={
      id:_id,
      data:taskData,

    }
   
    // console.log(options);
    updateTodo(options)
    
    // dispatch(toggleComplete(id))
    
    
    
  }
    return (
        <div className="bg-slate-50 border text-left gap-4 rounded-md flex justify-between items-center p-3">
        <input onChange={()=>toggleState(_id)}  type="checkbox" 
        name='complete' id='complete'
        defaultChecked={isCompleted}
        />
        <p className='flex-1'>{title}</p>
        {/* <p>Time</p> */}

<div className='flex items-center gap-2 flex-1'>
<div className={` size-3 rounded-full 
  ${priority === 'high'? "bg-red-500 ": null}
  ${priority === 'medium'? "bg-yellow-500 ": null}
  ${priority === 'low'? "bg-green-500 ": null}
  `}>
</div>
  <p>{priority}</p>
</div>

<div className="flex-1">{isCompleted ? <p className='text-green-500'>Done</p>:
 <p className='text-red-500 '>Pending</p>}</div>
        <p className="flex-1 text-left">{description}</p>

        <div className='flex gap-1 '>
          <Button 
          onClick={()=>deleteTodo(_id)}
          className="bg-red-500"><svg className='size-5'
           xmlns="http://www.w3.org/2000/svg"
           fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
         >
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</Button>
       <UpdateTodoModal id={_id} title={title} description={description} />
          
        </div>
      </div>
    );
};

export default TodoCard;