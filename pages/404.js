import React from 'react';
import { Error } from 'next/app';


const Page = () => (
    <Error statusCode={404} />
);

export default Page;
