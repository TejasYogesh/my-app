import React from 'react'
import { motion } from 'framer-motion'
const page = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok)
        throw new Error("failed to fetch data");
    const albums = await response.json();

    return (
        <div>
            {albums.map((album: { id: number; title: string, userId: number }) => (
                <div key={album.id} className='bg-gray-500 rounded-md p-10 m-10 text-black'>
                    <div className='rounded-full bg-white h-10 w-10 text-center flex justify-center items-center p-10 m-4 shadow-lg'>
                        {album.userId}
                    </div>
                    {album.title}

                </div>
            ))}
        </div>
    )
}

export default page