import React from 'react';
import dynamic from "next/dynamic";
const AgencePage = dynamic(
    () => import("@/app/agence/_components/AgencePage"),
    {
        ssr: false
    }
);
const Page = async () => {
/*     await delay(2000);
 */    return <AgencePage/>
};


export default Page;