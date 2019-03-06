import React from 'react';
import Error from 'next/error';


const Page = () => (
    <Error statusCode={404} />
);

export default Page;
