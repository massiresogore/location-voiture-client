"use client"
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import FormAgence from './FormAgence';
import { AgenceResult } from '@/app/components/interfaces/ResultInterface';

interface Props{
    editIdAgence?:number |null,
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    setExistValues:React.Dispatch<React.SetStateAction<boolean>>,
    setResultObAgence:React.Dispatch<React.SetStateAction<any>>,
    resultAgence?:AgenceResult,
    existValues:boolean,
}

const AgenceModal = ({editIdAgence,setResultObAgence,open,setOpen,resultAgence,existValues,setExistValues}:Props) => {


  return <>
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Trigger>
                <Button color="cyan" onClick={()=> {
                    /* if(!existValues){
                        setResultObAgence(null)
                    } */
                }
                }>Ajouter une agence</Button>
            </AlertDialog.Trigger>
            {/* <AlertDialog.Trigger>
                <Button color="cyan">Ajouter une agence</Button>
            </AlertDialog.Trigger> */}
            <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Ajouter Nouvelle agence</AlertDialog.Title>
            <AlertDialog.Description size="2">
           {/*  {errors.nom && <ErrorMessage>{errors.nom.message}</ErrorMessage>}
                    {errors.adresse?.cp && <ErrorMessage>{errors.adresse.cp?.message}</ErrorMessage>}
                    {errors.adresse?.nom && <ErrorMessage>{errors.adresse.nom?.message}</ErrorMessage>}
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    {errors.tel && <ErrorMessage>{errors.tel.message}</ErrorMessage>}
                    {errors.adresse?.ville?.nom && <ErrorMessage>{errors.adresse.ville.nom?.message}</ErrorMessage>}
                    {errors.adresse?.numero && <ErrorMessage>{errors.adresse.numero?.message}</ErrorMessage>} */}
            </AlertDialog.Description>
                {/**Call form Agence */}
                    <FormAgence setResultObAgence={setResultObAgence} editIdAgence={editIdAgence} setOpen={setOpen} resultAgence={resultAgence} existValues={existValues} setExistValues={setExistValues}   />
                {/**End form Agence */}

            <Flex gap="3" mt="4" justify="end">
            </Flex>
        </AlertDialog.Content>
        </AlertDialog.Root>
            <Toaster/>

  </>
}

 

export default AgenceModal