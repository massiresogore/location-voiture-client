"use client";
import React from 'react';
import {Table} from "@/app/agence/styledComponents/Table";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Button } from '@radix-ui/themes';

const LoadingBody = () => {
    const agences = [1,2,3,4,5];
    return (
        <div>
            <Button color="cyan">Ajouter une agence</Button>
            <Table>
                <caption>
                    List of agences
                </caption>
                <thead>
                <tr>
                    <th scope="col">Fullname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Tel</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <>
                    {agences.map((agence: number, index: number) => (
                        <tr key={index}>
                            <td>
                                <Skeleton/>
                            </td>
                            <td>
                                <Skeleton/>
                            </td>
                            <td>
                                <Skeleton/>
                            </td>
                            <td>
                                <Skeleton/>
                            </td>
                            <td>
                                <Skeleton/>

                            </td>
                            <td>
                                <Skeleton/>

                            </td>
                            <td>
                                <Skeleton/>
                            </td>
                        </tr>
                    ))}
                </>
                </tbody>
            </Table>
        </div>
    );
};

export default LoadingBody;