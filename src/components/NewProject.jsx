import React from 'react'
import Input from './Input'

export default function NewProject() {
  return (
    <div>
        <menu>
            <li>
                <button>Cancel</button>
            </li>
            <li>
                <button>Save</button>
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
