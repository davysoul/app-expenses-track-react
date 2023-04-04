import { useSelector } from 'react-redux';
import List from './components/list/List';
import ExpenseInput from './containers/expenseInput/ExpenseInput';
import s from './style.module.css';
import IncomeInput from './containers/incomeInput/IncomeInput';
import ExpenseTotal from './containers/expenseTotal/ExpenseTotal';
import Logo from './components/logo/Logo';

function App() {
  const expenseList = useSelector(store => store.EXPENSE.expenseList)
   return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
         <div className={`col-3`}>
          <Logo title ="SpentApp" subtitle='Track your expenses'/>
         </div>
         <div className={`col-9 ${s.income_input}`}>
           <IncomeInput/>
         </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12 ${s.expense_input}`}>
          <ExpenseInput items/>
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items ={expenseList}/>
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
