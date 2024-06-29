import React from 'react';
type TodoContainerProps ={
    children: React.ReactNode
}
const Container = ({children}:TodoContainerProps) => {
    return (
        <div className="max-w-7xl w-full h-h-screen  mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
};

export default Container;