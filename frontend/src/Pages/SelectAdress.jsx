import { useEffect, useState } from "react";
import axios from "axios";
import AddressList from "../components/Address/AdddressList";

export default function SelectAdress(){
    const [AllAddresses, setAllAddresses]=useState([]);

    useEffect(()=>{
        const fetchAddress=async()=>{
            const token=localStorage.getItem('token');
            if(!token){
                alert('Token missing please login again');
            }
            const response= await axios.get("http://localhost:8080/user/get-addresses");
            console.log(response.data);
            setAllAddresses(response.data.userInfo.address);
        }
        fetchAddress();
    },[]);
    return(
        <div>
            <AddressList addresses={AllAddresses}/>
        </div>
    )
}