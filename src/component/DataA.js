import React from 'react'

export default function DataA({dataList}) {
  return (
    <div>
        <ul>
            {dataList.map((item,i)=>{
               

               return <li key={i}>{item}</li>
            })}
        </ul>
    </div>
  )
}
