/* import { Link as RadixLink } from '@radix-ui/themes'
import NexLink from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    href: string,
    children: string | ReactElement
}

const CustomLink = ({href,children}:Props) => {
  return (
    <NexLink href={href}>
        <RadixLink href={href}>{children}</RadixLink>
    </NexLink>
  )
}

export default CustomLink */