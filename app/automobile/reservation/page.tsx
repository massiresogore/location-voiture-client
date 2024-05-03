import dynamic from 'next/dynamic'
import React from 'react'

const ReservationPage = dynamic(
    () => import("@/app/automobile/reservation/_components/ReservationPage"),
    {ssr: false}
)

const page = () => {
  return <ReservationPage/>
}

export default page