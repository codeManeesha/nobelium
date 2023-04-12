import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App(){
  const[value,setValue] =useState([])
  const[name,setName]=useState("")
  const[show,setShow]=useState(false)
  const[product,setProduct]=useState("")
  const[quantity,setQuantity]=useState("")
  const handleAdd =()=>{
    const Add =[...value,[]]
    setValue(Add)
  }
 const handleChange=()=>{
  
 }
  


  return (
    <div>
     <h1>Billing form </h1>
     <label for ="Customer Name">Customer Name</label><br></br>
     <input type="text" placeholder="Customer Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
     <hr></hr>
     <hr></hr>
     <div className="Main">
      {value.map((data,i)=>{return(<>
      <div>
      
     <div className="products" value ={value}onChange={e=>handleChange(e,i)}>
      
     <label for ="Products">Product Name</label><br></br>
     <select  name ="Products" id="Products" value={product} onChange={(e)=>setProduct(e.target.value)}>
      <option value ="pencil">Pencil</option>
      <option value ="pen">pen</option>
      <option value ="bottel">bottel</option>
      <option value ="box">box</option>
     </select>

     </div>
     <div className="quantity">
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
     </div>
     </div>
     </>)})}
     <div className="button">
      <button onClick={handleAdd}>Add item</button>
      
     </div>
     
     
     
     
     </div>
     
     <hr></hr>
     <button onClick={()=>setShow(!show)}>create Bill</button>
     <hr></hr>
  {show?
      <table>
     <th>customer name:{name}</th>
     
     
     
    
      <tr>
        <th>Item</th>
        <th>Quantity</th>
      </tr>
      <tr>
        <th>{product}</th>
        <th>{quantity}</th>
      </tr>

     </table>
:null}
    </div>
  );
}

export default App;
