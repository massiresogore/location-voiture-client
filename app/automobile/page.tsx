import dynamic from 'next/dynamic';
const AutomobilePage = dynamic(
  () => import("@/app/automobile/_components/AutomobilePage"),
  {
      ssr: false
  }
);

 const automobilePager =async () => {
/*   await delay(1000);
 */  return <AutomobilePage/>

}

export default automobilePager;