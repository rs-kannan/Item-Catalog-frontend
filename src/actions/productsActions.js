import axios from "axios"
import { productsRequest } from "../slices/productsSlice";



export const getProducts = async() =>{
   
    try {
        productsRequest 
        const {data} = await axios.get('api/v1/products');
        
    } catch (error) {
        //handle error

    }
    

}