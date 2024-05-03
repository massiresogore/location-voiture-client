import { AgenceInterface } from "@/app/components/agence/AgenceInterface";
import { AgencesResult } from "@/app/components/interfaces/ResultInterface";
import Link from "next/link";

interface Props {
    result:AgencesResult,
    isPending: boolean
}

const AgenceList = ({result,isPending}:Props) => {

    
    const {code,message,data:agences}= result;
    //const {code,message,data:agences}= result;


    /*if (isPending) {
        return "loading....";
    }
*/
        if (agences.length == 0) {

            return(
                    <tr>
                        <td> No agences found</td>
                    </tr>
            );
        }

    return (
        <>
            {agences.map((agence: AgenceInterface, index: number) => (
                <tr key={index} >
                    <td >
                        <Link href={`/agence/${agence.id}`}>{agence.nom.toUpperCase()}</Link>
                    </td>
                    <td >{agence.nom}</td>
                    <td >{agence.email}</td>
                    <td >{agence.tel}</td>
                    <td>
                        <Link href={`/agence/${agence.agenceId}`} >show</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link href={`/agence/${agence.agenceId}`} >delete</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link href={`/agence/${agence.agenceId}`} >update</Link>


                    </td>
                </tr>
            ))}
        </>
    );
};

export default AgenceList;