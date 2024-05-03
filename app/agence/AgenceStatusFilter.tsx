"use client"
import React from 'react';
import {Select} from "@radix-ui/themes";
import {useRouter} from "next/navigation";

export enum Status {
    LIBRE = "LIBRE",
    OCCUPEE = "OCCUPEE",
    ALL = "ALL"
}

function AgenceStatusFilter() {

    const statustues:{label:string; value: Status  }[] = [
        {label:"All", value: Status.ALL },
        {label:"Libre", value:Status.LIBRE},
        {label:"Occupée", value: Status.OCCUPEE},
    ]

    const router = useRouter();
    return (
        <Select.Root
            onValueChange={(status)=>{
                const query = status ? `?status=${status}` : "All";
                router.push(`/automobile/${query}`);
            }}
        >
            <Select.Trigger placeholder="Filter by Status ..."/>
            <Select.Content>
                {statustues.map((st) => {
              return  <Select.Item
                  key={st.value}
                  value={st.value || ""}
              >
                            {st.label}
                        </Select.Item>
                })}
            </Select.Content>
        </Select.Root>
    );
}

export default AgenceStatusFilter;