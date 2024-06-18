import { useState } from 'react'
import classes from './Allproducts.module.css'
import axios from 'axios'
const Allproducts=()=>{
    const [productname,setProductname]=useState('')
    const [company,setcompany]=useState('');
    const [category,setcategory]=useState('')
    const [price,setprice]=useState('')
    const [Rating,setrating]=useState('')
    const [Discount,setdiscount]=usestate('')
    const [availability,setavail]=usestate('')
    useEffect(() => {

        axios.get('http://localhost:3096/test/all') 
          .then(response => {
            const product = response.data; 
            setProductname(product.name);
            setcompany(product.company);
            setcategory(product.category);
            setprice(product.price);
            setrating(product.rating);
            setdiscount(product.discount);
            setavail(product.availability);
          })
          .catch(error => {
            console.error('Error fetching product data:', error);
          });
      }, []);
    return(
        <div className={classes.main}>
            <div className={classes.card}>
                    <h2>Product Details</h2>
                    <h4>`${productname}`</h4>
                    <h4>Company: `${company}`</h4>
                    <h5>Category: `${category}`</h5>
                    <h5>Price: `${price}`</h5>
                    <h6>Rating: `${Rating}`</h6>
                    <h3>Discount: `${Discount}`</h3>
                    <h4>Availability: `${availability}</h4>

            </div>

        </div>
    )
}
export default Allproducts;