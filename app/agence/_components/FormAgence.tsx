"use client"
import { agencySchema } from '@/app/components/schemas/AgencySchema';
import customFetch from '@/app/utils/customFetch';
import { Box, Button, Flex, TextField, Theme } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { log } from 'console';
import React, { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

type AgencyFormDataType = z.infer<typeof agencySchema>
type AgenceFormData = {
    nom: FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    tel: FormDataEntryValue | null,
    adresse:{
    cp: FormDataEntryValue | null,
    nom: FormDataEntryValue | null,
    numero: FormDataEntryValue | null,
    ville: {
    nom:FormDataEntryValue | null
        }
    }
}
const FormAgence = ({editIdAgence,
    setOpen,resultAgence,
    existValues,
    setResultObAgence,
    setExistValues}:{editIdAgence?:number |null|[],
        setOpen:React.Dispatch<React.SetStateAction<boolean>>,
        setResultObAgence:React.Dispatch<React.SetStateAction<any>>,
        resultAgence?:any,
        existValues:boolean,
        setExistValues:React.Dispatch<React.SetStateAction<boolean>>,
}) => {
        /******** Hook ********/
        //console.log(editIdAgence);
        

        const [agenceFormData, setAgenceFormData]= useState<AgencyFormDataType>({
            nom: "",
            email: "",
            tel: "",
            adresse:{
                cp:0,
                nom: "string",
                numero: 0,
                ville: {
                    nom:""
                    }
                }
        });
        //const [existValues,setExistValues] = useState<boolean>(false)
     
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agenceObject, setAgenceObject] = useState<AgencyFormDataType>();
  const [agences,setAgences] = useState<Array<AgencyFormDataType>| null  >();
  const queryClient = useQueryClient();
  /******** endHook ********/
  
  /******** Query ********/
  const {mutate: createAgency } = useMutation({
      mutationFn:( data:AgenceFormData)=>   customFetch.post("/agences",data )
          .then((response) => {
            setOpen(false)
            setExistValues(false)
              queryClient.invalidateQueries({queryKey: ['agences']});
              queryClient.invalidateQueries({queryKey: ['informationSystem']});
              toast.success(response.data.message);
          }),
      onError: (error) => {
          // console.log(error.response.data.data)
          //to do , response Type, Result???
      }
  });



  const {mutate: updateAgence } = useMutation({
      mutationFn:( data:AgenceFormData)=>   customFetch.put("/agences/"+editIdAgence,data )
          .then((response) => {
            setOpen(false)
            setExistValues(false)
              queryClient.invalidateQueries({queryKey: ['agences']});
              queryClient.invalidateQueries({queryKey: ['informationSystem']});
              toast.success(response.data.message);
          }),
      onError: (error) => {
          // console.log(error.response.data.data)
          //to do , response Type, Result???
      }
  });


    /******** Function ********/
      async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        
        if(existValues){

            updateAgence(getFormDadaBody(formData,agenceFormData))
        }else{
                //console.log(data);
                
            createAgency(getFormDadaBody(formData,agenceFormData));
           // createAgency(getFormDadaBody(formData,agenceFormData));

            //iniFormValue(formData);
        }
      
    }
  /******** endFunction ********/
  
    return <>
                <form onSubmit={onSubmit} >
                    <Flex maxWidth="100%" direction="column" className='mb-2' gap="3"  >
                        <Box maxWidth="500px">
                            <TextField.Root
                            color="indigo"
                            variant="soft"
                            placeholder="Nom"
                            defaultValue={existValues ? resultAgence?.data?.data.nom: ""}
                            name='nom'
                            />
                        </Box>
                            <TextField.Root
                            type='number'
                            color="indigo"
                            variant="soft"
                            placeholder="Cp"
                            defaultValue={existValues ? resultAgence?.data?.data.adresse.cp : ""}
                            name='adresseCp'
                            />
                            <TextField.Root
                            color="indigo"
                            variant="soft"
                            type='text'
                            placeholder="Nom adresse"
                            defaultValue={existValues ? resultAgence?.data?.data.adresse.nom: ""}
                            name='adresseNom'
                            />
                    </Flex>

                    <Flex direction="column" gap="3" >
                        <TextField.Root
                                type="email"
                                color="indigo"
                                variant="soft"
                                placeholder="Email"
                                defaultValue={existValues ? resultAgence?.data?.data.email: ""}
                                name='email'
                        />
                        <TextField.Root
                            type="text"
                            color="indigo"
                            variant="soft"
                            placeholder="Numéro téléphone"
                            defaultValue={existValues ? resultAgence?.data?.data.tel: ""}
                            name='tel'
                        />
                        <TextField.Root
                            type="number"
                            color="indigo"
                            variant="soft"
                            placeholder="Numéro adresse"
                            name='adresseNumero'
                            defaultValue={existValues ? resultAgence?.data?.data.adresse.numero: ""}
                        />
                        <TextField.Root
                            type="text"
                            color="indigo"
                            variant="soft"
                            placeholder="Nom ville"
                            defaultValue={existValues ? resultAgence?.data?.data.adresse.ville.nom: ""}
                            name='nomVille'
                        />
                    </Flex>
                    <Theme  accentColor="cyan">
                        <Flex  className='mt-2' direction="row" gap="2">
                        <Button className='' type="submit">{existValues ? 'update': 'enregistrer'}</Button>
                        <Button  variant='soft'  type="reset">effacer les données</Button>
                        <Button type='button' onClick={()=>
                           { 
                            hiddenForm(setOpen,setExistValues)
                            setOpen(false);
                            setResultObAgence(null);
                            }} className='d-block cursor: pointer;' variant="solid" color="red">Annuler</Button>
                        </Flex>
                       
                    </Theme>
                </form>
                <Toaster/>

    </>
  
}

export default FormAgence

const hiddenForm = (setOpen:React.Dispatch<React.SetStateAction<boolean>>,setExistValues:React.Dispatch<React.SetStateAction<boolean>>)=>{
    setOpen(false);
   setExistValues(false);
   

}

const getFormDadaBody = (formData:FormData,agenceFormData:any)=>{
    //let data = Object.fromEntries(new FormData(event.currentTarget));

     const  formDataBody = {...agenceFormData,
        nom:formData.get("nom"),
        email:formData.get("email"),
        tel: formData.get("tel"),
        adresse:{
            cp:formData.get("adresseCp"),
            nom: formData.get("adresseNom"),
            numero:formData.get("adresseNumero") ,
            ville: {
                nom:formData.get("nomVille")
                }
            }
        }       
            return formDataBody;
}

