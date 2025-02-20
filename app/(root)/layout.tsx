import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p className='text-[90px] text-gray-400 m-10 text-center'>Root Layout file</p>
            {children}
        </div>
    )
}

export default layout