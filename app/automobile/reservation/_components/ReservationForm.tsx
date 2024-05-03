"use client"
import { useClient } from '@/app/hooks/client/useClient'
import customFetch from '@/app/utils/customFetch'
import { AlertDialog, Box, Button, Flex, Text, TextField, Theme } from '@radix-ui/themes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import moment from 'moment'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

//Définir le type de schema de la réservation
type ReservationFormDataType = {
    clientUserId: string,
    automobileId: string,
    dateDebut: string,
    dateFin: string,
    prixJournalier: number,
    nombreJour?: number,
    prixTotalReservation: number,
    designation: string
}


const ReservationForm = ({automobile}:{automobile:automobileInterface}) => {
 /** automobile est une interface de, automobileInterface
  * pour ajouter d'autre attribut dans automonile il faut 
  * l'ajouter dans automobileInterface afin d'avoir accès
  * à cet attribut
  */

    /******** Hook ********/
    const [idVehicule, setIdVehicule] = useState(null);
    const [sea, setsea] = useState(3);
    const [open, setOpen] = useState<boolean>(false);

    const {data} = useClient();

    const {
            register,
            handleSubmit,
            reset,
        formState: { errors, isValid },
          }= useForm<ReservationFormDataType>();
    const queryClient = useQueryClient();

    /******** Query ********/
    const {mutate: reserver } = useMutation({
        mutationFn:( data:ReservationFormDataType)=>   
            customFetch.post("automobiles/"+data.automobileId+"/reservation/"+data.clientUserId,data )
            .then((response: AxiosResponse<any, any>) => {
                setOpen(false);
                queryClient.invalidateQueries({queryKey: ['automobiles']});
                toast.success(response.data.message);
                reset();
            }),
        onError: (error: AxiosError) => {
             //console.log(error.response?.data?.data)
            //to do , response Type, Result???
        }
    });
   
    /******** endQuery ********/
        const onSubmit = handleSubmit((data:ReservationFormDataType):void=>{
            
        const checkInDate = moment(data.dateDebut)
        const checkOutDate = moment(data.dateFin)
        const diffInDays = checkOutDate.diff(checkInDate, "days")
        const prixReservation = diffInDays * automobile.prixJournalier
        const newData = {...data,
                            nombreJour: diffInDays,
                            prixJournalier:automobile.prixJournalier,
                            prixTotalReservation: prixReservation,
                            designation:automobile.className
                        }
                       
        reserver(newData);
        //console.log(newData);
       
        });

  
      

 
return (
    <>{data?.data?.data?.length ==0 && <p>Impossible de réserver(pas de client ou non autorisé)</p>}
        {data?.data?.data?.length >0 &&
             <AlertDialog.Root open={open} onOpenChange={setOpen}>
             <AlertDialog.Trigger>
                 <Button color="cyan">réserver</Button>
             </AlertDialog.Trigger>
             <AlertDialog.Content maxWidth="450px">
                 <AlertDialog.Title>Ajouter une date</AlertDialog.Title>
             <AlertDialog.Description size="2">
              </AlertDialog.Description>
             <form noValidate onSubmit={onSubmit} >
                 <Flex maxWidth="100%" direction="column" className='mb-2' gap="3"  >
                    
                        <input 
                        type="hidden"
                        value={automobile.id}
                         {...register("automobileId")}
                        />
                    
                     <Box maxWidth="500px">
                     <Text  as="label"> client</Text>
                     <div></div>
                     <select {...register("clientUserId")}>
                         <option>choix client</option>
                         {data?.data?.data.map((client:any,index:number)=>{                                
                         return <option key={index} value={client.clientUserId}>{client.nom}</option>
                         })}
 
                     </select>
                     </Box>                
                     <Box maxWidth="500px">
                         <Text as="label"> Date début</Text>
                         <TextField.Root
                             color="indigo"
                             variant="soft"
                             type='date'
                            
                             placeholder="Date début"
                             {...register("dateDebut")}
                                 />
                     </Box>
                     <Box maxWidth="500px">
                     <Text as="label"> Date fin</Text>
                         <TextField.Root
                         required
                         type="date"
                         id="dateDeFin"
                         placeholder="dateDeFin"
                         min={moment().format("MMM Do, YYYY")}
                         {...register("dateFin")}
                         />
                     </Box>
                     <Theme  accentColor="cyan">
                         <Flex  className='mt-2' direction="row" gap="2">
                             <Button variant="solid" type='submit' color="cyan">
                             valider                    
                             </Button>
                             <Button  
                                 variant='soft' type="reset"
                             >effacer les données</Button>
                                <AlertDialog.Cancel>
                             <Button  className='d-block cursor: pointer;' variant="solid" color="red">
                             annuler
                             </Button>
                         </AlertDialog.Cancel>
                     </Flex>
                     </Theme>
                 </Flex>
            </form>
 
             
         </AlertDialog.Content>
       </AlertDialog.Root>
        }

       
    </>
  )
}

export default ReservationForm