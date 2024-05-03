export const choixClient = (e:any,
    setIsvoiture:React.Dispatch<React.SetStateAction<boolean>>,
    setIsCamion:React.Dispatch<React.SetStateAction<boolean>>,
    setIsScooter:React.Dispatch<React.SetStateAction<boolean>>,
)=> {
    switch (e.target.value) {
        case "voiture":
            setIsvoiture(true);
            setIsCamion(false);
            setIsScooter(false) 
            break;
        case "scooter":
            setIsScooter(true)
            setIsvoiture(false);
            setIsCamion(false);
            break;
        case "camion":
            setIsScooter(false)
            setIsvoiture(false);
            setIsCamion(true);   
            break;
    
        default:
            
            break;
    }
}