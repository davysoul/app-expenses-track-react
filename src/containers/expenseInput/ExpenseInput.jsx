import { addExpense } from '../../store/expense/expense-slice';
import {useDispatch} from 'react-redux';
import s from './style.module.css';

const ExpenseInput = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const price = +(formData.get('price'));
    dispatch(addExpense({name,price}));
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-5 col-md-4 col-lg-4 mb-2'>
             <input
               type='text'
               className='form-control'
               name='name'
               placeholder='Ex:Pomme'
             />
          </div>
          <div className='col-12 col-sm-2 col-md-4 col-lg-4 mb-2'>
            <input
               type='number'
               step='0.5'
               className='form-control'
               placeholder='Ex: 3.99'
               name='price'
             />

          </div>
          <div className='col-12 col-sm-2 col-md-4 col-lg-4 mb-2'>
            <button type='submit' className={`btn btn-primary ${s.btn}`}>
                Add
            </button>

          </div>
        </div>
    </form>
   
  )
}

export default ExpenseInput