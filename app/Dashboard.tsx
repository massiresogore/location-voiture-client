"use client"
import { Flex } from '@radix-ui/themes';
import moment from 'moment';
import Link from "next/link";
import styled from 'styled-components';
import { AgenceResultInformation, ReservationsResult } from './components/interfaces/ResultInterface';
import { useReservation } from './hooks/automobile/useReservation';
import { useInformationSystem } from './hooks/useInformationSystem';
import { calculPourcentage } from './utils/utils';
//import delay from "delay";
//delay(2000);


const Dashboard = () => {
  const {data:informationData, isLoading} = useInformationSystem();
  const resultInformation:AgenceResultInformation = informationData?.data;
  const data = useReservation();
  
     const result:ReservationsResult = data?.data?.data;

    
    const prixTotal =(xCheckin: string, xChecout:string, prixJournalier:number)=>{
      const dateDebut = moment(xCheckin);
      const dateFinf = moment(xChecout);
      const diff = dateFinf.diff(dateDebut, "days");                  
     return diff ? diff * prixJournalier: prixJournalier;
    } 

    
  const  prixTotalToutesLesReservations = ( )=> {
    var prixResevationTotal =0;
    result?.data?.forEach(element => {
        prixResevationTotal+=prixTotal(element.dateDebut,element.dateFin,element.prixJournalier);

        
      });

      
   return prixResevationTotal;
  }

  
  const prixReservationDeuxRoues = ()=>{
    var prixResevationTotal =0;
    result?.data?.forEach(element => {
        if(element.automobileName=="Scooter"){
            prixResevationTotal+=prixTotal(element.dateDebut,element.dateFin,element.prixJournalier);
        }
    });
   return prixResevationTotal;
  }

  const prixReservationQuatresRoues = ()=>{
    var prixResevationTotal =0;
    result?.data?.forEach(element => {
        if(element.automobileName=="Camion" || element.automobileName=="Voiture" ){
            prixResevationTotal+=prixTotal(element.dateDebut,element.dateFin,element.prixJournalier);
        }
        
    });
   return prixResevationTotal;
  }
  

    return (
        <>        
<div className=" w-full py-10 px-10" id='das'>
   
    <div className=" sm:flex space-x-7 md:items-start items-center">
      <div>
     </div>
      </div>
  <div className="sm:grid lg:grid-cols-3 grid-cols-2 sm:gap-x-4">
    <Link href="/agence">
    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span className="text-md text-slate-400">Agences</span>
        <h1 className="text-3xl font-bold text-slate-100">
        {resultInformation?.data?.totalAgence ?? "0"}
        </h1>
        <h1 style={{visibility: "hidden"}} className="text-3xl font-bold text-slate-100">
          1%
        </h1>
      </div>
      <div>
      <svg fill="#000000" width="80px" height="80px" viewBox="0 0 24 24" id="home" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><path id="secondary" d="M19,10V20.3a.77.77,0,0,1-.83.7H14.3V14.1H9.7V21H5.83A.77.77,0,0,1,5,20.3V10l7-7Z" style={{fill:"rgb(44, 169, 188); strokeWidth: 2"}}></path><path id="primary" d="M19,10V20.3a.77.77,0,0,1-.83.7H14.3V14.1H9.7V21H5.83A.77.77,0,0,1,5,20.3V10" style={{fill:"fill: none; stroke: rgb(0, 0, 0)", strokeLinecap:"round",strokeLinejoin:"round", strokeWidth:" 2"}}></path><polyline id="primary-2" data-name="primary" points="21 12 12 3 3 12" style={{fill:"none; stroke: rgb(0, 0, 0)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}}></polyline></svg>
      </div>
    </div>
    </Link>
      <Link href="/automobile/voiture">
    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span className="text-md text-slate-400">Voitures</span>
        <h1 className="text-3xl font-bold text-slate-100">
          {resultInformation?.data?.totalVehicule  ?? "0"}
        </h1>
        <h1 className="text-3xl font-bold text-slate-100">
        {!isLoading && calculPourcentage(resultInformation?.data?.totalVehicule,resultInformation?.data?.totalAutomobile)}%

        </h1>
      </div>
      <svg width="80px" height="80px" viewBox="0 0 102.4 102.4" 
      className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="m95.074 50.309 -6.051 -10.083h1.408c1.848 0 3.361 -1.512 3.361 -3.361s-1.512 -3.361 -3.361 -3.361h-4.481c-0.04 0 -0.076 0.01 -0.115 0.012l-3.764 -13.074c-0.823 -2.862 -3.479 -4.862 -6.459 -4.862H26.835c-2.98 0 -5.636 2 -6.459 4.861L16.61 33.516c-0.039 -0.001 -0.075 -0.012 -0.114 -0.012h-4.481c-1.848 0 -3.361 1.512 -3.361 3.361s1.512 3.361 3.361 3.361h1.407L7.373 50.31a6.71 6.71 0 0 0 -0.958 3.458v15.486c0 3.706 3.015 6.721 6.721 6.721h2.241v6.557c0 2.268 1.838 4.106 4.106 4.106h2.99c2.268 0 4.106 -1.838 4.106 -4.106v-6.557h49.29v6.119c0 2.216 1.796 4.012 4.012 4.012h3.179c2.216 0 4.012 -1.796 4.012 -4.012v-6.119h2.241c3.706 0 6.721 -3.015 6.721 -6.721V53.768a6.72 6.72 0 0 0 -0.958 -3.459m-3.523 18.945c0 1.235 -1.004 2.24 -2.24 2.24H13.136c-1.236 0 -2.24 -1.005 -2.24 -2.24V53.768a2.25 2.25 0 0 1 0.319 -1.153l8.316 -13.863c0.295 -0.492 0.527 -1.025 0.694 -1.593l4.457 -15.479c0.274 -0.954 1.16 -1.619 2.153 -1.619h48.778c0.993 0 1.879 0.665 2.153 1.62l4.457 15.477 0.002 0.01a6.87 6.87 0 0 0 0.694 1.588l8.314 13.856a2.26 2.26 0 0 1 0.319 1.154z" fill="#22C67F"/><path d="m78.992 37.992 -2.761 -11.288c-0.491 -2.005 -2.288 -3.416 -4.352 -3.416H30.451c-2.076 0 -3.88 1.425 -4.359 3.445L23.409 38.021c-0.669 2.815 1.466 5.517 4.36 5.517h46.871c2.906 0 5.043 -2.723 4.352 -5.546m-56.662 14.395 -6.721 -0.701c-1.322 -0.138 -2.473 0.899 -2.473 2.228v1.995c0 1.237 1.003 2.241 2.241 2.241h6.721c1.237 0 2.241 -1.003 2.241 -2.241v-1.293c0 -1.147 -0.867 -2.109 -2.008 -2.228m64.508 -0.947 -6.721 0.701c-1.141 0.119 -2.008 1.081 -2.008 2.228v1.293c0 1.237 1.003 2.241 2.241 2.241h6.721c1.237 0 2.241 -1.003 2.241 -2.241v-1.995c0 -1.329 -1.151 -2.366 -2.473 -2.228m-16.08 -0.012H31.689c-1.458 0 -2.527 1.37 -2.174 2.784l1.12 4.481a2.241 2.241 0 0 0 2.174 1.697H69.638a2.241 2.241 0 0 0 2.174 -1.697l1.12 -4.481c0.353 -1.414 -0.716 -2.784 -2.174 -2.784m-3.852 11.202H35.54c-1.237 0 -2.241 1.003 -2.241 2.241 0 1.237 1.003 2.241 2.241 2.241h31.366c1.237 0 2.241 -1.003 2.241 -2.241 0 -1.238 -1.003 -2.241 -2.241 -2.241" fill="#74E8AE"/></svg>
    
    </div>
      </Link>
      <Link href="/automobile/voiture">
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
          <div>
            <span className="text-md text-slate-400">Camion</span>
            <h1 className="text-3xl font-bold text-slate-100">
              {resultInformation?.data?.totalCamion  ?? "0"}
            </h1>
            <h1 className="text-3xl font-bold text-slate-100">
              {!isLoading && calculPourcentage(resultInformation?.data?.totalCamion,resultInformation?.data?.totalAutomobile)}%

            </h1>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
      </Link>
  </div>
  {/* block 2 */}
  <div className="sm:grid lg:grid-cols-3 grid-cols-2 sm:gap-x-4">
      <Link href="/automobile/reservation">
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
          <div>
            <span className="text-md text-slate-400">Reservation</span>
            <h1 className="text-3xl font-bold text-slate-100">
              {resultInformation?.data?.totalReservation  ?? "0"}
            </h1>
            <h1 style={{visibility: "hidden"}}  className="text-3xl font-bold text-slate-100">
          %
        </h1>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </Link>
      <Link href="/automobile/clients">
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        
          <div>
            <span className="text-md text-slate-400">Clients</span>
            <h1 className="text-3xl font-bold text-slate-100">
              {resultInformation?.data?.totalClient  ?? "0"}
            </h1>
            <h1 style={{visibility: "hidden"}} className="text-3xl font-bold text-slate-100">
              %
            </h1>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </Link>
      <Link href="/automobile/moto">
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
          
            <div>
              <span className="text-md text-slate-400">Moto</span>
              <h1 className="text-3xl font-bold text-slate-100">
                {resultInformation?.data?.totalScooter  ?? "0"}
              </h1>
              <h1 className="text-3xl font-bold text-slate-100">
              {!isLoading && calculPourcentage(resultInformation?.data?.totalScooter,resultInformation?.data?.totalAutomobile)}%
              </h1>
            </div>
            <div>
              <svg width="80px" height="80px" viewBox="0 0 102.4 102.4" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M21.333 87.467c-10.588 0 -19.2 -8.612 -19.2 -19.2s8.612 -19.2 19.2 -19.2 19.2 8.612 19.2 19.2 -8.612 19.2 -19.2 19.2" fill="#444444"/><path d="M21.333 78.933c-5.882 0 -10.667 -4.785 -10.667 -10.667S15.452 57.6 21.333 57.6 32 62.385 32 68.267s-4.785 10.667 -10.667 10.667" fill="#E6E6E6"/><path d="M46.933 68.267h-25.6l25.6 -17.067z" fill="#5B5B5B"/><path d="M46.933 70.4h-25.6a2.133 2.133 0 0 1 -1.184 -3.908l25.6 -17.067A2.131 2.131 0 0 1 49.067 51.2v17.067A2.133 2.133 0 0 1 46.933 70.4m-18.554 -4.267H44.8V55.185z" fill="#5B5B5B"/><path d="m79.558 7.025 -4.267 4.267a2.138 2.138 0 0 0 0.45 3.36c3.695 2.112 7.458 6.56 7.458 8.815 0 1.771 -1.468 3.349 -3.642 4.166C59.733 16 44.124 34.72 44.124 34.72c-0.804 0.853 -2.419 1.547 -3.571 1.547h-8.572c-1.163 0 -2.786 -0.672 -3.61 -1.493l-5.532 -5.534c-0.828 -0.828 -2.453 -1.643 -3.614 -1.807L8.508 25.901c-1.158 -0.164 -2.464 0.589 -2.899 1.677l-2.711 6.782a2.133 2.133 0 0 0 1.114 2.741L21.333 44.8C34.295 44.8 44.8 55.307 44.8 68.267c0 0.721 -0.043 1.429 -0.107 2.133H64a2.14 2.14 0 0 0 1.173 -0.35s24.066 -15.857 24.179 -15.949c4.066 -4.128 10.914 -12.785 10.914 -24.235 0 -17.082 -17.777 -23.113 -18.534 -23.36a2.133 2.133 0 0 0 -2.174 0.518" fill="#72C472"/><path d="M43.072 35.514c-0.796 0.45 -1.758 0.753 -2.517 0.753h-8.576c-1.161 0 -2.784 -0.672 -3.605 -1.493l-5.534 -5.534c-0.828 -0.828 -2.453 -1.643 -3.614 -1.807L8.508 25.901c-1.158 -0.164 -2.464 0.589 -2.899 1.677L4.047 31.486l22.62 9.047h10.85a2.133 2.133 0 0 0 1.508 -0.625l4.252 -4.252 -0.203 -0.143z" fill="#444444"/><path d="M81.067 87.467c-10.588 0 -19.2 -8.612 -19.2 -19.2s8.612 -19.2 19.2 -19.2 19.2 8.612 19.2 19.2 -8.612 19.2 -19.2 19.2" fill="#444444"/><path d="M81.067 78.933C75.185 78.933 70.4 74.148 70.4 68.267S75.185 57.6 81.067 57.6s10.667 4.785 10.667 10.667 -4.785 10.667 -10.667 10.667" fill="#E6E6E6"/><path d="M74.667 38.4a2.133 2.133 0 0 1 -1.508 -3.642l6.4 -6.4a2.133 2.133 0 1 1 3.017 3.017l-6.4 6.4A2.127 2.127 0 0 1 74.667 38.4" fill="#444444"/><path d="m98.991 22.47 -7.932 2.643A2.133 2.133 0 0 0 89.6 27.138v2.729A2.133 2.133 0 0 0 91.733 32h8.452c0.053 -0.7 0.081 -1.41 0.081 -2.133 0 -2.756 -0.497 -5.195 -1.276 -7.396" fill="#E6E6E6"/></svg>
            </div>
        </div>
      </Link>
  </div>

   {/* block 3 */}
   <div className="sm:grid lg:grid-cols-3 grid-cols-2 sm:gap-x-4">
    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span className="text-md text-slate-400">Total prix de réservation quatre roues</span>
        <h1 className="text-3xl font-bold text-slate-100">
        {prixReservationQuatresRoues()}€
        
        </h1>
        <h1 style={{visibility: "hidden"}}  className="text-3xl font-bold text-slate-100">
          0%
        </h1>
      </div>
      <div>
      <Flex direction="row" gap="1">
          <svg width="25px" height="25px" viewBox="0 0 2.4 2.4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 1V0.3m0.141 0.759 0.495 -0.495M1.4 1.2h0.7m-0.759 0.141 0.495 0.495M1.2 1.4v0.7m-0.141 -0.759 -0.495 0.495M1 1.2H0.3m0.759 -0.141 -0.495 -0.495M2.1 1.2a0.9 0.9 0 1 1 -1.8 0 0.9 0.9 0 0 1 1.8 0m-0.7 0a0.2 0.2 0 1 1 -0.4 0 0.2 0.2 0 0 1 0.4 0" stroke="#000000" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg width="25px" height="25px" viewBox="0 0 2.4 2.4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 1V0.3m0.141 0.759 0.495 -0.495M1.4 1.2h0.7m-0.759 0.141 0.495 0.495M1.2 1.4v0.7m-0.141 -0.759 -0.495 0.495M1 1.2H0.3m0.759 -0.141 -0.495 -0.495M2.1 1.2a0.9 0.9 0 1 1 -1.8 0 0.9 0.9 0 0 1 1.8 0m-0.7 0a0.2 0.2 0 1 1 -0.4 0 0.2 0.2 0 0 1 0.4 0" stroke="#000000" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Flex>
      <Flex direction="row" gap="1">
          <svg width="25px" height="25px" viewBox="0 0 2.4 2.4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 1V0.3m0.141 0.759 0.495 -0.495M1.4 1.2h0.7m-0.759 0.141 0.495 0.495M1.2 1.4v0.7m-0.141 -0.759 -0.495 0.495M1 1.2H0.3m0.759 -0.141 -0.495 -0.495M2.1 1.2a0.9 0.9 0 1 1 -1.8 0 0.9 0.9 0 0 1 1.8 0m-0.7 0a0.2 0.2 0 1 1 -0.4 0 0.2 0.2 0 0 1 0.4 0" stroke="#000000" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg width="25px" height="25px" viewBox="0 0 2.4 2.4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 1V0.3m0.141 0.759 0.495 -0.495M1.4 1.2h0.7m-0.759 0.141 0.495 0.495M1.2 1.4v0.7m-0.141 -0.759 -0.495 0.495M1 1.2H0.3m0.759 -0.141 -0.495 -0.495M2.1 1.2a0.9 0.9 0 1 1 -1.8 0 0.9 0.9 0 0 1 1.8 0m-0.7 0a0.2 0.2 0 1 1 -0.4 0 0.2 0.2 0 0 1 0.4 0" stroke="#000000" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Flex>
      </div>
    </div>
    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span className="text-md text-slate-400">Total Prix de réservation deux roues</span>
        <h1 className="text-3xl font-bold text-slate-100">
        {prixReservationDeuxRoues()}€
        </h1>
      </div>
      <div>
          <Flex direction="row" gap="2">
          <svg width="40px" height="40px" viewBox="0 0 2.4 2.4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 1V0.3m0.141 0.759 0.495 -0.495M1.4 1.2h0.7m-0.759 0.141 0.495 0.495M1.2 1.4v0.7m-0.141 -0.759 -0.495 0.495M1 1.2H0.3m0.759 -0.141 -0.495 -0.495M2.1 1.2a0.9 0.9 0 1 1 -1.8 0 0.9 0.9 0 0 1 1.8 0m-0.7 0a0.2 0.2 0 1 1 -0.4 0 0.2 0.2 0 0 1 0.4 0" stroke="#000000" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg width="40px" height="40px" viewBox="0 0 2.4 2.4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 1V0.3m0.141 0.759 0.495 -0.495M1.4 1.2h0.7m-0.759 0.141 0.495 0.495M1.2 1.4v0.7m-0.141 -0.759 -0.495 0.495M1 1.2H0.3m0.759 -0.141 -0.495 -0.495M2.1 1.2a0.9 0.9 0 1 1 -1.8 0 0.9 0.9 0 0 1 1.8 0m-0.7 0a0.2 0.2 0 1 1 -0.4 0 0.2 0.2 0 0 1 0.4 0" stroke="#000000" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Flex>
      </div>
    </div>
    <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span className="text-md text-slate-400">Prix total de réservation</span>
        <h1 className="text-3xl font-bold text-slate-100">
        {prixTotalToutesLesReservations()}€
        </h1>
      </div>
      <div>
        <svg width="80px" height="80px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_901_3008)">
        <path d="M31 6V11V16V21V26V31H12C18.07 31 23 26.07 23 20C23 13.93 18.07 9 12 9C10.23 9 8.56 9.42 7.08 10.16L7 10V1H31V6Z" fill="#668077"/>
        <path d="M12 9C18.07 9 23 13.93 23 20C23 26.07 18.07 31 12 31C5.93 31 1 26.07 1 20C1 15.7 3.48 11.97 7.08 10.16C8.56 9.42 10.23 9 12 9Z" fill="#FFC44D"/>
        <path d="M15 17C15 15.343 13.657 14 12 14M12 14C10.343 14 9 15.343 9 17C9 18.657 10.343 20 12 20C13.657 20 15 21.343 15 23C15 24.657 13.657 26 12 26M12 14V13M12 26C10.343 26 9 24.657 9 23M12 26V27M22 31H31V29M25 26H31V24M26 21H31V19M26 16H31V14M23 11H31V9M10 6H31V1H7V6M23 20C23 13.926 18.074 9 12 9C5.926 9 1 13.926 1 20C1 26.074 5.926 31 12 31C18.074 31 23 26.074 23 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_901_3008">
        <rect width="32" height="32" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      </div>
    </div>
  </div>
</div>

        </>
    );
};
export default Dashboard;

const Texts = styled.h1`


  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
  font-size: 92px;
  padding: 80px 50px;
  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  
  &.elegantshadow {
    color: #131313;
    /*background-color: #e7e5e4;*/
    letter-spacing: .15em;
    text-shadow: 
      1px -1px 0 #767676, 
      -1px 2px 1px #737272, 
      -2px 4px 1px #767474, 
      -3px 6px 1px #787777, 
      -4px 8px 1px #7b7a7a, 
      -5px 10px 1px #7f7d7d, 
      -6px 12px 1px #828181, 
      -7px 14px 1px #868585, 
      -8px 16px 1px #8b8a89, 
      -9px 18px 1px #8f8e8d, 
      -10px 20px 1px #949392, 
      -11px 22px 1px #999897, 
      -12px 24px 1px #9e9c9c, 
      -13px 26px 1px #a3a1a1, 
      -14px 28px 1px #a8a6a6, 
      -15px 30px 1px #adabab, 
      -16px 32px 1px #b2b1b0, 
      -17px 34px 1px #b7b6b5, 
      -18px 36px 1px #bcbbba, 
      -19px 38px 1px #c1bfbf, 
      -20px 40px 1px #c6c4c4, 
      -21px 42px 1px #cbc9c8, 
      -22px 44px 1px #cfcdcd, 
      -23px 46px 1px #d4d2d1, 
      -24px 48px 1px #d8d6d5, 
      -25px 50px 1px #dbdad9, 
      -26px 52px 1px #dfdddc, 
      -27px 54px 1px #e2e0df, 
      -28px 56px 1px #e4e3e2;
  }
  &.deepshadow {
    color: #e0dfdc;
    background-color: inset;
    letter-spacing: .1em;
    text-shadow: 
      0 -1px 0 #fff, 
      0 1px 0 #2e2e2e, 
      0 2px 0 #2c2c2c, 
      0 3px 0 #2a2a2a, 
      0 4px 0 #282828, 
      0 5px 0 #262626, 
      0 6px 0 #242424, 
      0 7px 0 #222, 
      0 8px 0 #202020, 
      0 9px 0 #1e1e1e, 
      0 10px 0 #1c1c1c, 
      0 11px 0 #1a1a1a, 
      0 12px 0 #181818, 
      0 13px 0 #161616, 
      0 14px 0 #141414, 
      0 15px 0 #121212, 
      0 22px 30px rgba(0, 0, 0, 0.9);
  }
  &.insetshadow {
    color: #202020;
    background-color: inset;
    letter-spacing: .1em;
    text-shadow: 
      -1px -1px 1px #111, 
      2px 2px 1px #363636;
  }
  &.retroshadow {
    color: #2c2c2c;
    background-color: #d5d5d5;
    letter-spacing: .05em;
    text-shadow: 
      4px 4px 0px #d5d5d5, 
      7px 7px 0px rgba(0, 0, 0, 0.2);
  }


`;