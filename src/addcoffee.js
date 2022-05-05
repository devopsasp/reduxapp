import {connect} from 'react-redux'
import {useState} from 'react'
import {addCoffee} from './actions/actionfunc'
function AddCoffee(props)
{
   const [id,setId]=useState(0)
   const [coffeeName,setCoffeeName]=useState('')
   const [price,setPrice]=useState('')

   return (<div>

       Enter Coffee id <br/>
       <input type='text' onChange={(e)=>{
           setId(e.target.value)
       }}/><br/>
       Enter Coffee Name <br/>
       <input type='text' onChange={(e)=>{
           setCoffeeName(e.target.value)
       }}/><br/>
       Enter Price <br/>
       <input type='text' onChange={(e)=>{
           setPrice(e.target.value)
       }} /><br/>

       <input type='button' value='Add'
       
       onClick={()=>{
           
   var coffee={
       "id":id,
       "coffeeName":coffeeName,
       "price":price
   }

props.mydispatch(addCoffee(coffee))
       }}
       /><br/>
   </div>)
}

const mapDispatchToProps=dispatch=>({
    mydispatch:dispatch
})

export default connect(null,mapDispatchToProps)(AddCoffee)
