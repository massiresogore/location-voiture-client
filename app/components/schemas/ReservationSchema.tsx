//Crée un shema pour agence
import {z} from "zod";

export const ReservationSchema = z.object({
    clientId: z.string().min(1, "lid client ne peut pas être null"),
    automobileId: z.string().min(1, "lid automobile ne peut pas être null") ,
      dateDebut: z.string(),
      dateDeFin: z.string(),
});


