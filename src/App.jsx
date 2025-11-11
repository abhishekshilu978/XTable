import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [sortData,setSortData]=useState([])
 

  const tableData=
[

    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }

]

useEffect(()=>{
  setSortData(tableData)
},[])

const sortByDate=()=>{
    let sortedDate=tableData.sort((a,b)=>new Date(a.date)-new Date(b.date));
    console.log(sortedDate)
    setSortData(sortedDate)
}
const sortByViews=()=>{
   let sortedDate=tableData.sort((a,b)=>a.views-b.views);
    console.log(sortedDate)
    setSortData(sortedDate)
}

  return (
    <>
      <div>
        <button className='btn' onClick={sortByDate}>Sort by Date</button>
        <button className='btn' onClick={sortByViews}>Sort By Views</button>
      </div>
      <table>
        <thead>
          <td>Date</td>
          <td>Views</td>
          <td>Article</td>
        </thead>
        <tbody>
         
          {sortData.map((data)=>
           <tr>
              <td>{data.date}</td>
              <td>{data.views}</td>
              <td>{data.article}</td>
          </tr>
          
          )}
          
        </tbody>
      </table>
    </>
  )
}

export default App;