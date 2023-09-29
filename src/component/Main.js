import React, { useState } from 'react'
import "./main.css"
import DataA from './DataA';
import DataB from './DataB';

export default function Main() {

    const [data,setData]=useState({
        inp1:"",
        inp2:"",
    });



    const [datalistSA,setDatalistA]=useState([]);
    
    const [datalistSB,setDatalistB]=useState([]);


     function inputHandler(e) {
      const {name,value}=e.target
      setData({...data,[name]:value})
    }



    function submitHandler(){
      console.log(data)
      console.log(datalistSA)
      console.log(datalistSB)
    }



    function addData1(){
      setDatalistA([...datalistSA,data.inp1])
      setData({...data,inp1:""})
    }


    
    function addData2(){
      setDatalistB([...datalistSB,data.inp2])
      setData({...data,inp2:""})
    }

  return (
<div className='main'>
<input type="text" name="inp1" value={data.inp1} onChange={inputHandler}/>
<button onClick={addData1}>add1</button>
<br/>

<input type="text" name="inp2" value={data.inp2}  onChange={inputHandler}/>
<button onClick={addData2}>add2</button>
<button onClick={submitHandler}>add</button>

<br/>
<br/>
<br/>
<br/>


<DataA dataList={datalistSA}/>
<hr/>
<DataB dataList={datalistSB}/>
</div>
  )
}
