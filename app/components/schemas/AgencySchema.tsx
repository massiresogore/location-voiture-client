//Crée un shema pour agence
import {z} from "zod";

export const agencySchema = z.object({
    nom: z.string().min(4, "nom il faut au moin 4"),
    email: z.string().email("email il faut au moin 4"),
    tel: z.string().min(10,"tel il faut au moin 10"),
    adresse:z.object ({
        cp: z.preprocess(
            (cp) => parseInt(z.string().parse(cp), 10), //10 == décimale: base 10
            z.number().positive().min(1, "cp il faut au moin 1")
        ),
        nom: z.string().min(4,"nom il faut au moin 4"),
        numero: z.preprocess(
            (cp) => parseInt(z.string().parse(cp), 10), //10 == décimale: base 10
            z.number().positive().min(1, "cp il faut au moin 1")
        ),
        ville: z.object({
            nom:  z.string().min(4,"nom il faut au moin 4")
            })
        })
});


