import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingBody from "@/app/agence/_components/LoadingBody";
import { AlertDialog, Button, Card, Flex, Heading, Table } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';

const LoadingAautoPage = () => {
    return <>
        <AlertDialog.Root>
                <Button color="cyan">Ajouter un automobile</Button>
        </AlertDialog.Root>
        <Card>
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
      
          { [1,2,3,4,5].map((auto,id)=>{
            
                    
        
            return <Table.Row key={id}>
                        <Table.Cell>
                            <Skeleton/>
                        </Table.Cell>
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>   
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>   
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>   
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>   
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>   
                        <Table.Cell>
                        <Skeleton/>
                        </Table.Cell>   
                      </Table.Row>
          })}
        </Table.Body>
        </Table.Root>
      </Card>    
      </>
};

export default LoadingAautoPage;