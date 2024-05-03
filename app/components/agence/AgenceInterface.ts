export interface AgenceInterface {
    agenceId: number,
    id: string,
    nom: string,
    email: string,
    tel: string,
    adresse:{
        cp:number,
        nom: string,
        numero: number,
        ville: {
            nom:string
            }
        },
    nombreVehicules: number
    
}