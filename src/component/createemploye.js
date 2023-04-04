import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiurl from './apiurl';
 
const Employecreate = () => {
 
     // state are  used to store user input
     const [name,setname]=useState("")

     const [email,setemail]=useState("")

     const [role,setrole]=useState("")

     const [phone,setphone]=useState("")
 
    // function is used to post data to json server by axios
     const Pushdata=async()=>{

          const id=Math.floor(Math.random());
          const req = {id,name,role,email,phone}
          const response=await apiurl.post("/employee",req)
          
          .catch((e)=>{
              console.log(e)
              alert("id already exists")
          })
        
         
        
      }
       
  
     
      
     
     
       // function is called on clicking create button  
       const Handlesubmit=(e)=>{
       e.preventDefault()
    
       Pushdata()
       setemail("")
       setname("")
       setphone("")
       setrole("")
    
      
        alert("success")
     
       }
       
       
     
   





     return (
        <div>
            <div className='bg-blue-600 h-[100px] relative '>
                <h1 className='text-5xl bg-blue-600 text-center pt-3 cursor-default'>EMPLOYEE MANAGEMENT</h1>
                <Link to={'/employelist'}>
                <button className='bg-white hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow absolute top-[20px] right-[5px]'>BACK</button>
                </Link>
            </div>
            <div className='border-8  m-2  h-screen'>
              <h2 className='text-4xl text-center pb-4 cursor-default'>CREATE EMPLOYEE</h2>
                <div className=' w-[500px] h-[500px] mx-auto shadow-2xl '>
                    
                <div className="w-full max-w-xs mx-auto">
             <form onSubmit={Handlesubmit} className="  rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2">
                     NAME
                   </label>
                   <input onChange={(e)=>{setname(e.target.value)}} value={name} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                   <p>error</p>
                 </div>
                 <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2" >
                     EMAIL
                   </label>
                   <input onChange={(e)=>{setemail(e.target.value)}} value={email} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Email"/>
                
                  </div>
                  <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2" >
                     PHONE
                   </label>
                   <input onChange={(e)=>{setphone(e.target.value)}} value={phone} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="PHONE NO"/>
                
                  </div>
                  <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2" >
                     ROLE
                   </label>
                    <select onChange={(e)=>{setrole(e.target.value)}} value={role} className='rounded w-[200px] h-[30px]'>
                     <option>...select...</option>
                     <option>Developer</option>
                     <option>Senior Developer</option>
                     <option>Manager</option>
                     <option>Support Team</option>
                    </select>
                
                  </div>
                   <div className="flex mt-2 items-center justify-between">
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                     CREATE
                   </button>
                   
                 </div>
               </form>
              
                 </div>
                </div>
            </div>
        </div>
    ); 
};

 export default Employecreate;