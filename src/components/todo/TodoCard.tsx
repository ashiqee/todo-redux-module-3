import React from 'react';

const TodoCard = () => {
    return (
        <div className="bg-slate-50  rounded-md flex justify-between items-center p-3">
        <input type="checkbox" />
        <p>Todo title</p>
        <p>Time</p>

        <p>Description</p>

        <div>
          <button>del</button>
          <button>edit</button>
        </div>
      </div>
    );
};

export default TodoCard;