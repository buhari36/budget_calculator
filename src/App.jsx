import './App.css'
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id: uuidv4(), charge: "rent", amount: 1600},
  {id: uuidv4(), charge: "car payment", amount: 400},
  {id: uuidv4(), charge: "credit card bill", amount: 1200},
]

function App() {
  // STATE VALUES
  // ALL EXPENSES, ADD EXPENSE
  const [expenses, setExpenses] = useState(initialExpenses);
// SINGLE EXPENSE

const [charge, setCharge] = useState('');

// SINGLE AMOUNT
const [amount, setAmount] = useState('');

// ALERT
const [alert, setAlert] = useState({show: false});
  // FUNCTIONALITIES
// handle charge
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }
  // handle amount
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
// handle alert
const handleAlert = ({type, text}) => {
  setAlert({show:true, type, text})
  setTimeout(() => {
    setAlert({show:false})
  },3000)
}

// edit
const [edit, setEdit] = useState(false);
// edit item
const [id, setId] = useState(0);
// handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if(edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id?{...item, charge, amount} : item
        })
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({type:'success', text: 'item edited'})
      } else{
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
      }
      setCharge('')
      setAmount('')

    } else {
      handleAlert({
      type: "danger", 
      text: `charge can't be an empty value and amount has to be bigger than zero`})
    }
  }

  // clear all items
  const clearItems = () => {
    setExpenses([])
    handleAlert({ type: "danger", text: "all items cleared"})
  }
  // handle delete
const handleDelete = (id) => {
  let tempExpenses = expenses.filter(item => item.id !== id)
  setExpenses(tempExpenses)
  handleAlert({ type: "danger", text: "item deleted"})
}
// handle edit
const handleEdit = (id) => {
  let expense = expenses.find(item => item.id === id)
  let {charge, amount} = expense
  setCharge(charge)
  setAmount(amount)
  setEdit(true)
  setId(id)
}
  return (
    <>
    {alert.show && <Alert type={alert.type} 
    text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className='App'>
      <ExpenseForm 
      charge={charge}
      amount={amount}
      handleAmount={handleAmount}
      handleCharge={handleCharge}
      handleSubmit={handleSubmit}
      edit={edit}
      />
      <ExpenseList 
      expenses={expenses} 
      handleDelete={handleDelete} 
      handleEdit={handleEdit}
      clearItems={clearItems}
      />
      </main>
      <h1>
        Total Spending : {""} <span className='total'>
          $ {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  )
}

export default App
