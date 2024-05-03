import { ReservationsResult } from "@/app/components/interfaces/ResultInterface";
import { Flex, Table } from '@radix-ui/themes';
import moment from "moment";
import Link from "next/link";
import { FcEditImage, FcFullTrash, FcSearch } from "react-icons/fc";

const ReservationList = ({result}:{result:ReservationsResult}) => {
    
    
          if (result?.data?.length == 0) {

            return(<tr><td> No reservations found</td></tr>);
        }
        
    return (
        <>
            {result?.data?.map((reservation, index: number) => 
{


           //sum(reservation);
            
                    return ( <Table.Row key={index} >
                        <Table.RowHeaderCell>
                            <Link href={`/reservation`}>
                                {reservation.clientUserNom}
                        </Link>
                        </Table.RowHeaderCell>
                        <Table.Cell>
                            {reservation.automobileName}
                       </Table.Cell>
                        <Table.Cell>
                            {reservation.dateDebut}
                       </Table.Cell>
                        <Table.Cell>
                            {reservation.dateFin}
                        </Table.Cell>
                        <Table.Cell>
                            {reservation.agenceName}                            {reservation.prixJournalier}

                        </Table.Cell>
                        <Table.Cell>
                            <Flex direction="row" gap="2">
                            <Link href={`/reservation`} >
                                <FcFullTrash style={{fontSize: "1.6rem"}} />
                            </Link>
                            <Link href={`/reservation`} >
                                <FcEditImage style={{fontSize: "1.6rem"}}/>
                            </Link >
                            <Link href={`/reservation`} >
                                <FcSearch style={{fontSize: "1.6rem"}}/>
                            </Link >
                            </Flex>
                        </Table.Cell>
                    </Table.Row>
                )
                }
            )
            }
        </>
    );
};

export default ReservationList;