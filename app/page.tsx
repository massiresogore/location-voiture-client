import dynamic from "next/dynamic";
import DashboardLoadIng from "./components/DashboardLoadIng";
const Dashboard = dynamic(()=> import("@/app/Dashboard"),{
  ssr:false,
  loading: ()=> <DashboardLoadIng/>
});
export default async function Home() {
  return (<Dashboard/>);
}

//export const dynamic = 'force-dynamic';
