import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export default function NewProject({onAdd}) {
    const modal=useRef();
    const title=useRef();
    const description =useRef();
    const dueDate =useRef();

    const handleSave=()=>{
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //vadlidation
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            //show modal
            modal.current.open();
            return;

        }
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        });
    }
  return (
    <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2>Invalid Input</h2>
            <p>Oops ... looks like you forgot to enter a value</p>
            <p>Please make sure you provide a valid value for every input field. </p>
        </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button className='px-6 py-2 rounded-md text-slate-800 hover:text-slate-950 hover:bg-red-400'>Cancel</button>
            </li>
            <li>
                <button className= ' px-6 py-2 rounded-md bg-slate-600 text-stone-50 hover:bg-slate-950' onClick={handleSave}>Save</button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} textarea label="Description"/>
            <Input type="date" ref={dueDate} label="Due Date" />
            
        </div>
    </div>
    </>
    
    
  )
}
