"use client"

import { Table } from "@/app/agence/styledComponents/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from 'react';

const VehiculeTable =  () => {

    const [imgage, setImage] = useState("");

    // Récupère les agences
     const {data, isError,isPending } = useQuery({
         queryKey: ['images'],
         //queryFn: async()=> await  axios.get("http://localhost:8080/api/v1/automobile/image/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg")
         queryFn: async()=> await  axios.get("http://localhost:8080/api/v1/automobile/1/images")
     });

console.log(data?.data);

     //const result:AgencesResult = data?.data;

    

    if(isPending){
         return "Loading ...";
     }

     return  (<>
         <Table>
             <caption>
                 List of agences
             </caption>
             <thead>
                 <tr>
                     <th scope="col">Nom</th>
                     <th scope="col">Email</th>
                     <th scope="col">Tel</th>
                     <th scope="col">Action</th>
                 </tr>
             </thead>
             <tbody>
             </tbody>
             

         </Table>
       
        {data?.data.map((image:any, index: number)=> <img key={index} src={`data:image/jpg;base64, ${image}`} alt="" />)}
         
     </>
     )

};

export default VehiculeTable;