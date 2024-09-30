import {React,useState } from 'react'

function SignUp(){

const [formData,setFormData] = useState({

username:'',
email:'',
password:'',
confirmPassword:''

})


const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData);      

}

return (
    <div>
        <form onSubmit={handleSubmit}>
   <h1>signUp</h1>
<div>
    <label htmlFor="username">username</label>
<input 
type="text"
name="username"
id = "username"
value={formData.username}
placeholder='username'
 required 
onChange={handleChange}


/>
<label htmlFor="email">email</label>
<input 
type="email" 
id = 'email'
name="email"
value={formData.email}
 required 
placeholder='email'

onChange={handleChange}

/>
<label htmlFor="password">password</label>
<input 
type="password" 
name="password" 
id="password" 
placeholder='password' 
 required 
 onChange={handleChange} 
 value ={formData.password} />
<label htmlFor="confirm password">confirm password</label>
 <input 
 type="password"
 id='confirmPassword'
 name='confirmPassword'
 placeholder='confirm password'
 required 
 onChange={handleChange}
 value={formData.confirmPassword}

  />
</div>
<button type = "submit ">signup</button>

        </form>
    </div>
)

}
export default SignUp;