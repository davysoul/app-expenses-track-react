import React from 'react'
import s from './style.module.css';
import { useSelector } from 'react-redux';
const ExpenseTotal = () => {
  const expenseList = useSelector(store => store.EXPENSE.expenseList);
  const total = expenseList.map(item => item.price).reduce((acc,currentValue)=>(
     acc + currentValue
     ),0);
  const income = useSelector(store => store.EXPENSE.incomeInput);
  const remainingMoney = income - total;
  return (
    <div>
       <div className='row'>
        <div className={`col ${s.label}`}>Total expense</div>
         <div className={`col ${s.amount}`}>{`${total} $`}</div>
        
       </div>
       <div className="row">
         <div className={`col ${s.label}`}>Remaining money</div>
         <div className={`col ${s.amount}`}>{`${remainingMoney} $`} </div>
       </div>
    </div>
  )
}

export default ExpenseTotal