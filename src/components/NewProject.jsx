import React from 'react'
import Input from './Input'

export default function NewProject() {
  return (
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button className='px-6 py-2 rounded-md text-slate-800 hover:text-slate-950 hover:bg-red-400'>Cancel</button>
            </li>
            <li>
                <button className= ' px-6 py-2 rounded-md bg-slate-600 text-stone-50 hover:bg-slate-950'>Save</button>
            </li>
        </menu>
        <div>
            <Input label="Title"/>
            <Input textarea label="Description"/>
            <Input label="Due Date" />
            
        </div>
    </div>
  )
}
