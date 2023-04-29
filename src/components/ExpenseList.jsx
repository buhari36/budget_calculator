import { Button } from '@chakra-ui/react'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses, handleDelete, handleEdit, clearItems}) => {
  return (
    <>
    <ul className="list">
        {expenses.map((expense) => {
            return (
                <ExpenseItem
                key={expense.id}
                expense={expense}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />
            )
           
        })}
    </ul>
    {expenses.length > 0 && 
    <Button className='btn' onClick={clearItems}>Clear Expenses
    <MdDelete className='btn-icon'/>
    </Button>}
    </>
  )
}

export default ExpenseList