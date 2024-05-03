"use client"

import { AlertDialog, Flex, Table } from '@radix-ui/themes';
import { FcEditImage, FcFullTrash, FcSearch } from "react-icons/fc";
import { AgenceInterface } from "../components/agence/AgenceInterface";
import { AgenceResult, AgenceResultInformation, AgencesResult } from '../components/interfaces/ResultInterface';
import AgenceModal from "./_components/AgenceModal";
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
import { useAgences } from '../hooks/agence/useAgences';
import Link from 'next/link';
import { useInformationSystem } from '../hooks/useInformationSystem';

const AgenceTable =  () => {
    
    
    const [agenceIdForm,setAgenceIdForm ] = useState<number|null>();
    const [open, setOpen] = useState(false);
    const [resultOneAgence,setResultObAgence]= useState<any>();
    const [existValues,setExistValues] = useState<boolean>(false);

    // Récupère les agences
     const {data, isError,isPending } = useAgences();
     const result:AgencesResult = data?.data;

     //InfoAgenceInformation
     const {data:informationData, isLoading} = useInformationSystem();
     const resultInformation:AgenceResultInformation = informationData?.data;
     
     let totalAutomobile = resultInformation?.data?.totalAutomobile;

     const calculPourcentage =   (xNbre:number, xTotal:number)=> ((xNbre/xTotal)*100).toFixed(3);

      const handleEditForm = async(id:number)=>{
        setOpen(true);
        setAgenceIdForm(id);
        setExistValues(true);
        const result = await customFetch.get("/agences/"+id);

        setResultObAgence(result);

        //console.log("m");
       
    }



  

     return <>
            <AgenceModal setResultObAgence={setResultObAgence} editIdAgence={agenceIdForm} open={open} resultAgence={resultOneAgence} setOpen={setOpen} existValues={existValues} setExistValues={setExistValues} />
            <Table.Root variant='surface' className='mt-3'>
            <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Téléphone</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Pourcentage</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {isLoading && <Table.Row>
                <Table.Cell>Loading ...</Table.Cell>
                </Table.Row>
            }
                {result?.data?.length == 0 &&  <tr><td> No agences found</td></tr>}                   
                {result?.data?.map((agence: AgenceInterface, index: number) => (
                
                <Table.Row key={index} >
                    <Table.RowHeaderCell>
                    <Link href={`/agence/${agence.agenceId}`}>
                        {agence.nom.toUpperCase()}</Link>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                        {agence.email}
                    </Table.Cell>
                    <Table.Cell>
                        {agence.tel}
                    </Table.Cell>
                    <Table.Cell>
                        {calculPourcentage(agence.nombreVehicules,totalAutomobile)}%
                    </Table.Cell>
                    <Table.Cell>
                        <Flex direction="row" gap="2">
                        <Link href={`/agence/${agence.agenceId}`} >
                            <FcFullTrash style={{fontSize: "1.6rem"}} />
                        </Link>
                            <button onClick={ ()=>  handleEditForm(agence.agenceId)}>
                                    <FcEditImage style={{fontSize: "1.6rem"}}/>
                            </button>
                        <Link href={`/agence/${agence.agenceId}`} >
                            <FcSearch style={{fontSize: "1.6rem"}}/>
                        </Link >
                        </Flex>
                    </Table.Cell>
                </Table.Row>
            ))}

{/*                 {result && <AgenceList result={result} isPending={isPending}/> }
 */} 
                {!result && <Table.Row><Table.Cell>no agence found</Table.Cell></Table.Row> } 
            </Table.Body>
            </Table.Root>
            </>

};


export const revalidate = 0;


export default AgenceTable;

