"use client"
import { AutomobileResult } from '@/app/components/interfaces/ResultInterface'
import { useAutomobile } from '@/app/hooks/automobile/useAutomobiles'
import { Card, Heading, Table } from '@radix-ui/themes'
import ReservationForm from '../reservation/_components/ReservationForm'
import AutoStatusBadge from './autoStatusBadge'
const Automobile = () => {

  const {data, isLoading} = useAutomobile();
  
  const automobileResult:AutomobileResult = data?.data; 
  const noData = "No camion";
  

  return (
    <>
        <Card className='mt-2'>
          <Heading size="4" mb="5">Tous les Véhicules</Heading>
          <Table.Root variant= "surface">
          <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell>Désignation</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>couleur</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>poids</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>prixJournalier</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>stock</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>nbRoues</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>nbrPorte</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>status</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>longueur</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>cylindre</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
            </Table.Header>
          <Table.Body>
            {isLoading && <Table.Row>
              <Table.Cell>
              ...            
              </Table.Cell>
              </Table.Row>}
           {automobileResult?.data.length==0 && 
           <Table.Row>
            <Table.Cell>
              {noData}
            </Table.Cell>
           </Table.Row>
           }
            { automobileResult?.data.length>0 && automobileResult?.data.map((auto:automobileInterface)=>{
              
              
           const status = auto.booked ? "OCCUPE": "LIBRE";
           
                 
              return <Table.Row key={auto.id}>
                          <Table.Cell>
                            {auto.longueur ? "Camion": ""}
                            {auto.cylindre ? "Scooter": ""}
                            {auto.nbRoues && auto.nbrPorte ? "Vehicule": ""}
                          </Table.Cell>
                          <Table.Cell>
                            {auto.couleur}
                          </Table.Cell>
                          <Table.Cell>
                            {auto.poids}
                          </Table.Cell>
                          <Table.Cell>
                            {auto.prixJournalier}
                          </Table.Cell>
                          <Table.Cell>
                            {auto.stock}
                          </Table.Cell>
                          <Table.Cell>
                            {auto?.nbRoues ?? "*"}
                          </Table.Cell>
                          <Table.Cell>
                            {auto?.nbrPorte ?? "*"}
                          </Table.Cell>
                          <Table.Cell>
                            <AutoStatusBadge status={status}/>
                          </Table.Cell>
                          <Table.Cell>
                            {auto?.longueur ?? "*"  }
                          </Table.Cell>
                          <Table.Cell>
                            {auto?.cylindre ?? "*"}
                          </Table.Cell>
                          <Table.Cell>
                            {auto.booked ? "ocuppé": <ReservationForm automobile={auto} />}
                          </Table.Cell>
                        </Table.Row>
            })}
          </Table.Body>
          </Table.Root>
        </Card>
    </>
  )
}



export default Automobile;
