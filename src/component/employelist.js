import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import apiurl from './apiurl';
import {DownloadTableExcel} from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';

const Employelist = () => {
 
  // usestate is used to get responce data  
  const [empdata,setempdata]=useState([])

  // useeffect is used to get data from json server by axios
   useEffect(()=>{
   
     const Getdata = async()=>{
        const res=await apiurl.get("/employee") 
            
         .catch((e)=>{
            console.log(e)
           
         })
         setempdata(res.data)
    } 
    
       Getdata()
   },[])
  
   // useref is used to set the current table for print or pdf or excel
   const tableref=useRef(null);

   // this method used for downloading pdf by react-to-print
   const topdf=useReactToPrint({
     content:()=>tableref.current,
     documentTitle:"employee list",
     
   });
  
   
  
  
  
   return (
        <div>
            <div className='bg-blue-600 h-[100px] relative '>
                <h1 className='text-5xl bg-blue-600 text-center pt-3'>EMPLOYEE MANAGEMENT</h1>
                <Link to={"/crateemploye"}>
                <button className='bg-white hover:bg-green-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow absolute top-[20px] left-[5px]'>CREATE EMPLOYEE</button>
                </Link>
                <Link to={'/'}>
                <button className='bg-white hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow absolute top-[20px] right-[5px]'>LOGOUT</button>
                </Link>
            </div>
            <div>
                {/* this method is used for download excel bt react-export-table-to-excel */}
                <DownloadTableExcel
                filename="employee list"
                sheet="list"
                currentTableRef={tableref.current}
                >
                <button  className='ml-2 mt-1 bg-white hover:bg-green-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>excel file</button>
                </DownloadTableExcel>
                <button onClick={topdf}  className='ml-2 mt-1 bg-white hover:bg-green-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>print or save as pdf</button>
                <button className='ml-2 mt-1 bg-white hover:bg-green-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'><CSVLink data={empdata} title='employee list'>CSV</CSVLink></button>
            </div>
            <div className='border-8  m-2  '>
              <h2 className='text-4xl text-center pb-4'>EMPLOYEE LIST</h2>
                <table ref={tableref} className='mx-auto mb-2 center w-[700px]'>
                    <thead className='border-2 text-2xl bg-black text-white'>
                      <tr className='border-2'>
                        <td className='border-2 px-2 py-2'>
                            ID
                        </td>
                        <td className='border-2  px-2 py-2'>
                            NAME
                        </td>
                        <td className='border-2 px-2 py-2'>
                            ROLE
                        </td>
                        <td className='border-2 px-2 py-2'>
                            MAILID
                        </td>
                        <td className='border-2 px-2 py-2'>
                            PHONE NO
                        </td>
                        <td className='border-2 px-2 py-2'>
                            ACTION
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                        {
                           empdata != "" ? (
                           empdata.map(item=>(
                                        <tr key={item.id}>
                                            <td className='border-2 px-2 py-2'>{item.id}</td>
                                            <td className='border-2 px-2 py-2'>{item.name}</td>
                                            <td className='border-2 px-2 py-2'>{item.role}</td>
                                            <td className='border-2 px-2 py-2'>{item.email}</td>
                                            <td className='border-2 px-2 py-2'>{item.phone}</td>
                                            <td className='border-2 px-2 py-2 space-x-2.5 > *'>
                                    <Link to={'/editemploye/:id'}>
                                    <button className='p-4 hover:bg-red-500 rounded'><i><EditIcon/></i></button>
                                    </Link>
                                    <button className='p-4 hover:bg-red-500 rounded'><i><PersonRemoveIcon/></i></button>
                                            </td>
                                         </tr>
        
                                    ))
                                         ):(<tr><td className=''>nodata</td></tr>)  
                        }
                        </tbody>  
                    
                </table>
            </div>
        </div>
    );
};

export default Employelist;