
import {Table} from "@/app/agence/styledComponents/Table";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Button, Flex } from '@radix-ui/themes';
import Link from "next/link";
const DashboardLoadIng = () => {
  return (
    <>
    <div className=" w-full py-10 px-10" id='das'>
        <div className="sm:grid lg:grid-cols-3 grid-cols-2 sm:gap-x-4">
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        <div className="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
        <Skeleton/>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default DashboardLoadIng