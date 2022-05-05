
import React from 'react'
export default class MyCustomerForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            customerName:'',
            email:'',
            phone:'',
            age:0,
            customernameerr:'',
            emailpatternerr:'',
            phoneerr:'',
            ageinvalid:'',
            commonvalidationerr:'',
            city:'',
            cityerr:''
        }
        this.setCustomerName=this.setCustomerName.bind(this)
        this.setEmail=this.setEmail.bind(this)
        this.setAge=this.setAge.bind(this)
        this.setPhoneNo=this.setPhoneNo.bind(this)
        this.checkAllValidation=this.checkAllValidation.bind(this)
        this.setCity=this.setCity.bind(this)

    }

 setCustomerName(e)
 {

   let cname=e.target.value
   if(cname.length<3)
   {
       this.setState({customernameerr:'customer name length cannot be less then 3'})
       return
   }
   else
   {
   this.setState({customerName:e.target.value})
   this.setState({customernameerr:''})
 }
 }

setEmail(e)
{
    let cemail=e.target.value
    var exp=String(cemail).toLowerCase().match(/\S+@\S+\.\S+/)
      if(exp)
      {   
  this.setState({email:e.target.value})
this.setState({emailpatternerr:''})
      }
      else{
          this.setState({emailpatternerr:'email id has to be in right format'})
      }
}
setPhoneNo(e)
{
    let nphn=e.target.value
    if(nphn.length<10)
    {
        this.setState({phoneerr:"phone not not valid"})
    }
    else{
 this.setState({phone:e.target.value})
    this.setState({phoneerr:""})    

}
}
setAge(e)
{
    let age=e.target.value
    if( age > 18)
    {
this.setState({age:e.target.value})
this.setState({ageinvalid:""})
    }

    else
    {
        this.setState({ageinvalid:"invalid age"})
    }
}
setCity(e)
{
    let c=e.target.value

      if(c==='select')
      {
this.setState({cityerr:'city not selected'})
      }
      else{

    this.setState({city:e.target.value})
      }
}

checkAllValidation()
{
    if(this.state.ageinvalid.length>0 || this.state.customernameerr.length>0 || this.state.emailpatternerr.length>0)
    {
        this.setState({commonvalidationerr:'all fields are required to have values'})
         return false
    }
    else{
        this.setState({commonvalidationerr:''})
       
        return true
        }
}

 render()
 {
     return (<div>
         <form onSubmit={(e)=>{
             e.preventDefault()
   var result=this.checkAllValidation()
   if(result)
   {
       console.log('all controls validated')
    
   }
   else{
       console.log('all controls not validated')
       return
   }

         }}>
           Enter Customer Name <br/>
             <input type='text'    
             
             onChange={this.setCustomerName}
             /><br/>
            <span style={{color:"red"}}> {this.state.customernameerr}</span><br/>
             
             <br/>
             Enter Email <br/>
             <input type='text'  onChange={this.setEmail}/><br/>
            <span style={{color:"red"}}> {this.state.emailpatternerr}<br/></span>
            Enter Phone no <br/>
             <input type='text' onChange={this.setPhoneNo}/><br/>
             {this.state.phoneerr}<br/>
             Enter age <br/>
             <input type='text' onChange={this.setAge}/><br/>
             {this.state.ageinvalid}<br/>
             Select city<br/>
             <select value={this.state.city} onChange={this.setCity} >
                 <option value='select'>select</option>
              <option value='chennai'>Chennai</option>
              <option value='mumbai'>Mumbai</option>
              <option value='agra'>Agra</option>
              
             </select>
             {
                 this.state.city
             }
             {this.state.cityerr}
              <input type='submit' disabled={this.state.commonvalidationerr.length>0}/>
              {this.state.commonvalidationerr}
              </form>

     </div>)
 }



}