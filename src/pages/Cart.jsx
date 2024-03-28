import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove,increase,decrease} from '../store/cartSlice';

function Cart() {
  const products = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  const handleRemove =(id)=>{
       dispatch(remove(id));
  }
  const inc=(id)=>{
    dispatch(increase(id))
  }
  const dec = (id)=>{
    dispatch(decrease(id))
  }


  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
            products.map(p=>(
                <div className="cartCard" key={p.id}>
                   <img src={p.image} alt="" />
                   <h5>{p.title}</h5>
                   <h5>Rs. {p.totalprice}</h5>
                   <div>
                   <button onClick={()=>inc(p.id)}>+</button>
                    <span> &nbsp;&nbsp; Quantity: {p.quantity} &nbsp;&nbsp;</span>
                   <button onClick={()=>dec(p.id)}>-</button>
                   </div>
                   <button className='btn' onClick={()=> handleRemove(p.id)}>Remove</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cart