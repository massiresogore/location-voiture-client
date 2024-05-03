export  const messageCreationAuto = (isVoiture:boolean,isCamion:boolean,isScooter:boolean)=> {
    let message = "";
    if(isVoiture) message += "Création de voiture";
    if(isCamion) message += "Création de camion";
    if(isScooter) message += "Création de scooter";
    return message;
 }