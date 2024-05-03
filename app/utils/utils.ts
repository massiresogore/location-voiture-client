
export const calculPourcentage = (xNbre:number, xTotal:number)=> {

    if(Number(xNbre) && Number(xTotal)){

      return  ((xNbre/xTotal)*100).toFixed(2)
    }
    return 0;
};
