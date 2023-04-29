import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { MdSend } from 'react-icons/md'

    const ExpenseForm = ({ 
        charge, 
        amount, 
        handleCharge, 
        handleAmount, 
        handleSubmit,
        edit={edit}
      }) => {
        return <form onSubmit={handleSubmit}>
            <div className="form-center">
               <div className="form-group">
               <FormControl>
                <FormLabel>Charge</FormLabel>
                <Input 
                type="text"
                id='charge'
                name='charge'
                placeholder='e.g. rent'
                value={charge}
                onChange={handleCharge}
                />
                </FormControl>
               </div>

               <div className="form-group">
               <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input 
                type="number"
                id='amount'
                name='amount'
                placeholder='e.g. 100'
                value={amount}
                onChange={handleAmount}
                />
                </FormControl>
               </div>
            </div>

            <Button className='btn' type='submit'>
                {edit? 'edit' : "submit"}
                <MdSend />
            </Button>
        </form>
      }


export default ExpenseForm