import React from 'react';
import { Button } from '../ui/button';

const TodoCard = () => {
    return (
        <div className="bg-slate-50 border gap-4 rounded-md flex justify-between items-center p-3">
        <input type="checkbox" />
        <p>Todo title</p>
        <p>Time</p>

        <p>Description</p>

        <div className='flex gap-1 '>
          <Button>del</Button>
          <Button>edit</Button>
          
        </div>
      </div>
    );
};

export default TodoCard;