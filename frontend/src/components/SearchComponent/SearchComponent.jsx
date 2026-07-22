import { useEffect, useState } from "react";
import "./searchcomponent.css"

const SearchComponent = () => {

    const [results, setResults] = useState([]);
    const [categories,setCategories] = useState([]);

   // Mock data array simulating search targets
const MOCK_PRODUCTS = [
  { id: 1, title: "Apple iPhone 15 Pro", category: "Electronics", price: "$999" },
  { id: 2, title: "Apple MacBook Pro M3", category: "Electronics", price: "$1999" },
  { id: 3, title: "Samsung Galaxy S24 Ultra", category: "Electronics", price: "$1199" },
  { id: 4, title: "Sony WH-1000XM5 Headphones", category: "Audio", price: "$399" },
  { id: 5, title: "Logitech MX Master 3S Mouse", category: "Accessories", price: "$99" },
  { id: 6, title: "Dell UltraSharp 27" , category: "Monitors", price: "$499" },
];

useEffect(()=>{
   getCateogryList()
},[])

const getCateogryList=()=>{
      var fetchedCategories = []
      MOCK_PRODUCTS.forEach(product => {
         if(!fetchedCategories.includes(product.category)){
            fetchedCategories.push(product.category)
         }
           
      });
      setCategories(fetchedCategories)
}


const filterResult = (searchtext)=>{
   if(searchtext != ""){
      var filteredarray =MOCK_PRODUCTS.filter(p=>(p.title.toLowerCase().includes(searchtext.toLowerCase())))
      setResults(filteredarray)
   }else{
      setResults([])
   }
}

const handleChange = (event)=>{
         filterResult(event.target.value)
}
    return ( 
        <div className="search-container w-100">
           <div className="d-flex">
            <select>
               {
                  categories.map(category=>(
                     <option>{category}</option>
                  ))
               }
            </select>
              <input className="form-control" type="text" placeholder="search your product here" onChange={handleChange} />
           </div>
           <ul className="list-unstyled border shadow">
              {
                results.map(item=>(
                  <li>
                 <div>
                     <span>{item.title}</span>
                    
                 </div>
              </li>
                ))
              }
           </ul>
        </div>
     );
}
 
export default SearchComponent;