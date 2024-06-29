import React from 'react';
import TodoContainer from '../components/todo/TodoContainer';
import { Button } from '../components/ui/button';
import Container from '../components/ui/Container';

const Todo = () => {
    return (
        <Container>
            <h1 className="text-3xl font-semibold my-10 underline">My Todo</h1>
     <TodoContainer/>
        </Container>
    );
};

export default Todo;