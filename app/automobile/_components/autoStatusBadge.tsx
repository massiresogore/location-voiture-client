import { Badge } from '@radix-ui/themes'
import React from 'react'



const statusMap: Record<
string, 
  { label: string, color: 'red' | 'violet' | 'green' }
> = {
  OCCUPE: { label: 'Occupé', color: 'red' },
  LIBRE: { label: 'Libre', color: 'green' },
};

const AutoStatusBadge = ({status}:{status:string}) => {
  return (
    <Badge color={statusMap[status].color}>
        {statusMap[status].label}
    </Badge>
  )
}

export default AutoStatusBadge