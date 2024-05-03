"use client"
import { AgencesResult } from '@/app/components/interfaces/ResultInterface';
import { useAgences } from '@/app/hooks/agence/useAgences';
import { choixClient } from '@/app/utils/choixClient';
import customFetch from '@/app/utils/customFetch';
import { ChoixCreation } from '@/app/utils/vehiculeStatus';
import { AlertDialog, Box, Button, Flex, Text, TextField, Theme } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Automobile from './Automobile';
import { messageCreationAuto } from '@/app/utils/messageCreationAuto';

const AutomobileForm = () => {
    /******** Hook ********/
    const {data} = useAgences();
    const agenceResult:AgencesResult = data?.data
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    }= useForm<automobileInterface>();
    const queryClient = useQueryClient();

    const [isVoiture,setIsvoiture] = useState(false);
    const [isCamion,setIsCamion] = useState(false);
    const [isScooter,setIsScooter] = useState(false);
    const [open, setOpen] = useState<boolean>(false);


    /******** endHook ********/

    /******** Query ********/
    const {mutate: createAutomobile } = useMutation({
        mutationFn:( data:automobileInterface)=>   customFetch.post("/automobiles",data )
            .then((response) => {
                queryClient.invalidateQueries({queryKey: ['automobiles']});
                queryClient.invalidateQueries({queryKey: ['informationSystem']});
                toast.success(response.data.message);
                setOpen(false);
                reset();
            }),
        onError: (error) => {
            // console.log(error.response.data.data)
            //to do , response Type, Result???
        }
    });
    /******** endQuery ********/

    /******** Function ********/
    const onSubmit = handleSubmit((data:automobileInterface):void=>{
        createAutomobile(data);
        //setOpen(false);
    });
   
    const  handleDropdownChange = (e:any) => {
        choixClient(e, setIsvoiture,setIsCamion,setIsScooter);
	};
    /******** endFunction ********/

  return (
    <>
            <select 
            style={{border: "1px solid red",height:"32px",borderRadius: "5px",background: "rgb(29 50 96 / 88%)",color: "white",fontWeight:"600",textAlign:"center"}}
            onChange={handleDropdownChange}  >
                <option>Choix de la création</option>
                <option key="1" value={ChoixCreation.VOITURE}>Voiture</option>                            
                <option key="2" value={ChoixCreation.SCOOTER}>Scooter</option>                            
                <option key="3" value={ChoixCreation.CAMION}>Camion</option>
            </select>
        {(isScooter || isCamion || isVoiture ) && 
        <AlertDialog.Root open={open} >
                <AlertDialog.Trigger>
                <Button color="cyan" onClick={()=>setOpen(true)}>
                    {messageCreationAuto(isVoiture,isCamion,isScooter)}
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>
                    {messageCreationAuto(isVoiture,isCamion,isScooter)}
            </AlertDialog.Title>
            <AlertDialog.Description size="2">
{/*             {errors.nom && <ErrorMessage>{errors.nom.message}</ErrorMessage>}
 */}            </AlertDialog.Description>
              
            <form onSubmit={onSubmit}>
                <Flex  direction="column" className='mb-2' gap="3"  >
                    <Flex direction="row" gap="2" >

                        <Box >
                        <Text as="label"> Couleur</Text>

                            <TextField.Root
                                color="indigo"
                                variant="soft"
                                placeholder="Couleur"
                                type='text'
                                {...register("couleur")}
                            />
                        </Box>

                        <Box >
                        <Text as="label"> Poids</Text>
                            <TextField.Root
                                color="indigo"
                                variant="soft"
                                placeholder="poids"
                                type='number'
                                {...register("poids")}
                            />
                        </Box>

                        {isScooter && <Box>
                        <Text as="label"> Cylindre</Text>
                            <TextField.Root
                                color="indigo"
                                variant="soft"
                                placeholder="Cylindre"
                                type='text'
                                {...register("cylindre")}
                            />
                        </Box>}
                        
                    </Flex>
                    <Flex direction="row" gap="2" >
                        <Box >
                        <Text as="label"> Prix </Text>
                            <TextField.Root
                                color="indigo"
                                variant="soft"
                                placeholder="Prix"
                                type='number'
                                {...register("prixJournalier")}
                            />
                        </Box>
                       {isCamion &&  <Box >
                            <Text as="label"> Longeur</Text>
                            <TextField.Root
                                color="indigo"
                                variant="soft"
                                placeholder="longueur"
                                type='number'
                                {...register("longueur")}
                            />
                        </Box>}
                        
                       {isVoiture && <>
                                        <Box >
                                        <Text as="label"> porte</Text>
                                            <TextField.Root
                                                color="indigo"
                                                variant="soft"
                                                type='number'
                                                {...register("nbrPorte")}
                                            />
                                        </Box>
                                        <Box >
                                            <Text as="label"> roues</Text>
                                                <TextField.Root
                                                    color="indigo"
                                                    variant="soft"
                                                    placeholder="nbRoues"
                                                    type='number'
                                                    {...register("nbRoues")}
                                                />
                                        </Box>
                                    </>
                       }
                     
                        <select {...register("agenceId")}>
                            <option>choix agence</option>
                            {agenceResult?.data.map((agence,index)=>{                                
                                return <option key={index} value={agence.agenceId}>{agence.nom}</option>
                             })}
                            
                        </select>
                    </Flex>
                </Flex>
                <Theme  accentColor="cyan">
                <Flex  className='mt-2' direction="row" gap="2">
                    <Button className='' type="submit">Enregister</Button>
                
                    <Button  variant='soft' type="reset">effacer les données</Button>
                </Flex>
                </Theme>
            </form>
            <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
                <Button onClick={()=>setOpen(false)} className='d-block cursor: pointer;' variant="solid" color="red">
                Annuler
                </Button>
            </AlertDialog.Cancel>
            {/* <AlertDialog.Action>
                <Button variant="solid" color="red">
                Revoke access
                </Button>
            </AlertDialog.Action> */}
            </Flex>
        </AlertDialog.Content>
        </AlertDialog.Root>}
        <Toaster/>
        
        <Automobile/>

    </>
  )
}

export default AutomobileForm