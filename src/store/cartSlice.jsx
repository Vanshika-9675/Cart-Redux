import {createSlice} from '@reduxjs/toolkit'

// const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    
    initialState:[],
    reducers:{
        add: (state, action) => {
            const { id, name, price, image } = action.payload;
            const existingIndex = state.findIndex(item => item.id === id);
          
            if (existingIndex === -1) {
              state.push({ id, name, price, quantity: 1, image,totalprice :price });
            } else {
              state[existingIndex] = {
                ...state[existingIndex],
                quantity: state[existingIndex].quantity = state[existingIndex].quantity + 1,
                totalprice:state[existingIndex].totalprice = state[existingIndex].totalprice + state[existingIndex].price
              };
            }
        },
        increase:(state,action)=>{
            const existingIndex = state.findIndex(item => item.id === action.payload);
      state[existingIndex].quantity++;
      state[existingIndex].totalprice=state[existingIndex].totalprice+state[existingIndex].price

            
        },
        decrease:(state,action)=>{
            const existingIndex = state.find(item => item.id === action.payload);
            if(existingIndex.quantity==1)
            {
            //   state = state.filter((todo) => todo.id !== action.payload);
            return state.filter((item)=>item.id !== action.payload);
            }
            else{
              const Index = state.findIndex(item => item.id === action.payload);
              state[Index].quantity--;
              state[Index].totalprice=state[Index].totalprice-state[Index].price;
            }
            
          },
        },
        remove(state, action){
           return state.filter((item)=>item.id !== action.payload);
        }
    });

export const {add,remove,decrease,increase} = cartSlice.actions; 
export default cartSlice.reducer;


