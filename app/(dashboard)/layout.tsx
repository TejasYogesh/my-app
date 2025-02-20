import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p className='text-5xl rounded-lg text-gray-400 m-10'>Dashboard files</p>
            {children}
        </div>
    )
}

export default layout