import React, { useState } from 'react'
import Button from './Button'

export default function NewTask({onAdd}) {
    const [enteredTask,setEnteredTask]=useState();

    const handleChange=(e)=>{
        setEnteredTask(e.target.value);

    }
    const handleClick=()=>{
        onAdd(enteredTask);
        setEnteredTask('');
    }
  return (
    <div className='flex items-center gap-4'>
        <input type="text" onChange={handleChange} value={enteredTask} className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        <Button onClick={handleClick}>Add Task</Button>
    </div>
  )
}
