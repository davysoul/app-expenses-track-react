import {createSlice} from '@reduxjs/toolkit';

export const expenseSlice = createSlice({
    name:'expenseSlice',
    initialState:{
        expenseList:[],
        incomeInput:200
    },
    reducers:{
        addExpense:(currentSlice,action)=>{
         currentSlice.expenseList.push(action.payload);
         
        },
        setIncomeInput:(currentSlice,action) =>{
            currentSlice.incomeInput = action.payload;
        }

    }
});
const {addExpense,setIncomeInput} = expenseSlice.actions;
export{addExpense,setIncomeInput};
