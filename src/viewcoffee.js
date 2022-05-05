import {connect} from 'react-redux'

function ViewCoffee(props)
{
  return (<div>
         {
             props.data.map((e)=>{
                 return <li key={e.id}>{e.id} {e.coffeeName} {e.price}</li>
             })
         }
       
  </div>)
}

const mapStateToProps=state=>({

    data:state
})

export default connect(mapStateToProps) (ViewCoffee)