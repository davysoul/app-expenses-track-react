import React from 'react'
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {setIncomeInput} from '../../store/expense/expense-slice.js';

const IncomeInput = () => {
  const dispatch = useDispatch();
  const incomeInput = useSelector(store => store.EXPENSE.incomeInput);
  const handleUpdateIncome = (e)=>{
    const incomeInput = e.currentTarget.value;
    dispatch(setIncomeInput(+incomeInput));
  }
  return (
    <div className='row justify-content-center mb-2'>
      <div className={`col-6 ${s.label}` }>Income</div>
      <div className='col-6'>
        <input type='number' 
        className='form-control' 
        placeholder='Ex:300'
         defaultValue={incomeInput}
         onChange={handleUpdateIncome}
        />
      </div>
    </div>
  )
}

export default IncomeInput