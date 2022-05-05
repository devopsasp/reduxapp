import {connect} from 'react-redux'
import { findCoffee } from './actions/actionfunc'
import {useState} from 'react'
function FindCoffee(props)
{
    const [id,setId]=useState(0)

   return <div>
 
     <input type='text'  onChange={(e)=>{
         setId(e.target.value)
     }}/>

    <input type='button' value="Find" onClick={()=>{
        props.mydispatch(findCoffee(id))
    }}/>

   {props.data.map((e)=>{
       return <li>{e.id} {e.coffeeName} {e.price}</li>
   })}


   </div>

}

const mapDispatchToProps=dispatch=>({
    mydispatch:dispatch
})

const mapStateToProps=state=>({ 
    data:state
})


export default connect(mapStateToProps,mapDispatchToProps)(FindCoffee)
