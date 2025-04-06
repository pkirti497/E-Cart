import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products';
import { items } from './Data';
const SearchItems = ({cart, setCart}) => {
  // console.log(useParams())
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      // console.log(data)
      setFilterData(data)
    }

    filteredData();
    
  }, [term])
  


  return (
   <Products cart={cart} setCart={setCart} items={filterData} />
  )
}

export default SearchItems