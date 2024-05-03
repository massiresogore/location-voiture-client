"use client"

import { Table } from '@radix-ui/themes';
import { ReservationsResult } from '../../components/interfaces/ResultInterface';
import ReservationList from './_components/ReservationList';

import { useReservation } from '@/app/hooks/automobile/useReservation';

const ReservationTable =  () => {

    // Récupère les réservations
     const data = useReservation();

     
     const result:ReservationsResult = data?.data?.data;
   
     

     return  (
            <Table.Root variant='surface' className='mt-3'>
            <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell>Client</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Automobile</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Date début</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Date fin</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Agence</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
            </Table.Header>

                 <Table.Body>
                     <ReservationList result={result}/>
                </Table.Body>
            </Table.Root>

     )

};



export default ReservationTable;