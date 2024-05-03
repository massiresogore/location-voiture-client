import {AgenceInterface} from "@/app/components/agence/AgenceInterface";
type GenericData = {
    code: number,
    flag:boolean,
    message: string,
}

/*Agence*/
export type AgenceResult = GenericData & {
    data: AgenceInterface
}

export type AgencesResult = GenericData & {
    data: Array<AgenceInterface>
}

/*Agence Information*/
export type AgenceResultInformation = GenericData & {
    data: AgenceInformationInterface
}


/** AUTOMOBILE result */
export type AutomobileResult = GenericData & {
    data: Array<automobileInterface>,
    nmbrAutomobile: number
}

/** Reservation */
export type ReservationsResult = GenericData & {
    data: Array<ReservationInterface>
}
