import { Button } from '@chakra-ui/react'
import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

const ExpenseItem = ({ expense, handleEdit, handleDelete}) => {
    const {id, charge, amount} = expense
  return <li className='item'>
    <div className="info">
        <span className='expense'>{charge}</span>
        <span className='amount'>{amount}</span>
    </div>

    <Button className='edit-btn' aria-label='edit button'
    onClick={() => handleEdit(id)}>
        <MdEdit />
    </Button>
    <Button className='clear-btn' aria-label='delete button'
    onClick={() => handleDelete(id)}>
        <MdDelete />
    </Button>
  </li> 
}

export default ExpenseItem