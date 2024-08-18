import React, { useEffect, useState } from 'react'
import data from '../../data'
import styles from './PaginationSection.module.css'
const PaginationSection = () => {
  const [tabledata,setTabledata]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [totalpages,setTotalPages]=useState(0);
  const [currenttablevalues,setCurrentTablevalues]=useState([]);
  const maxRecords=10;
  const handlePrevious=()=>{
       if(currentPage>1){
        setCurrentPage((prev)=>prev-1);
       }
  }
  function handleNext(){
    if(currentPage<totalpages){
      setCurrentPage((prev)=>prev+1);
    }
  }
  const fetchData=async()=>{
    const tabdata=await data;
    setTabledata(tabdata);
  }
  useEffect(()=>{
     fetchData();
  },[])
  useEffect(() => {
    const startIndex = (currentPage - 1) * maxRecords
    const endIndex = Math.min(currentPage * maxRecords, tabledata.length)
    setCurrentTablevalues([...tabledata].slice(startIndex, endIndex))
    setTotalPages(Math.ceil(tabledata.length / maxRecords))
}, [currentPage,tabledata])
  return (
    <div className={styles.container}>
     <div className={styles.heading}>Employee Data Table</div>
     <div>
      <table className={styles.tablesection}>
        <thead>
        <tr className={styles.row}>
          <th className={styles.row}>ID</th>
          <th className={styles.row}>Name</th>
          <th className={styles.row}>Email</th>
          <th className={styles.row}>Role</th>
        </tr>
        </thead>
      { currenttablevalues?.map((ele,index)=>{
        return(
          <tbody key={index}>
        <tr className={styles.row}>
          <td className={styles.row}>{ele.id}</td>
          <td className={styles.row}>{ele.name}</td>
          <td className={styles.row}>{ele.email}</td>
          <td className={styles.row}>{ele.role}</td>
        </tr>
        </tbody>
        )
      })
      }
      </table>
      </div>
      <div className={styles.btncontainer}>
      <div className={styles.btn}>
      <button className={styles.btnsection} onClick={handlePrevious}>Previous</button>
      </div>
      <div  className={styles.btnsection1}>{currentPage}</div>
      <div  className={styles.btn}>
      <button  className={styles.btnsection} onClick={handleNext}>Next</button>
      </div>
      </div>
    </div>
  )
}

export default PaginationSection