import {useState,useEffect} from "react";
import axios from "axios";
import '../App.css'
function Products() {
  const [Loading,setLoading]=useState(false);
  const [data,setData]=useState([]);
  const [err,setErr]=useState(false);
  
   useEffect(()=>{
    setLoading(true);
    axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
      
    }).then(
      (res)=>{console.log(res.data)
      setData(res.data)
      if(!res.ok){
       
        throw("failed to fetch")

      }
   }).catch((e)=> setErr(e.message))
  .finally(()=>setLoading(false))
   },[])
 return(
  
  
   
      <div className="product-container">
      {err&&
        <div>
        {" "}
        <h1>{err}</h1>
   
        </div>
        
    }
       {Loading&&(
        <div>
        {" "}
        <h1>Loading.....</h1>
        <div className="spinner-border text-primary" role="status">
         <span className="visually-hidden">Loading...</span>
</div>
        </div>
        
    )}

      {!err&&data.map((product)=>(
        <div  key={product.id}  className="card text-center m-3 bg-dark text-light" >
        <img src={product.image} className="card-img-top" alt="..."/>
       <div className="card-body">
     <h4 className="card-title">{product.title}</h4>
     <h5 className="card-text">{product.price}$</h5>
     <p className="fs-5">rate: {product.rating.rate}</p>
     <a href="#" className="btn btn-danger">Add To Cart</a>
     </div>
   </div>
      ))}
      </div>
    );
    };


 

export default Products;
