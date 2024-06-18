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
    const [availability,setavail]=useState('')
    return(
        <div className={classes.main}>
            <div className={classes.card}>
                

            </div>

        </div>
    )
}
export default Allproducts;