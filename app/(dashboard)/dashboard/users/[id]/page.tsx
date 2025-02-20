import React from "react"
import Link from "next/link"
// page contains the id and typescript saying that the input is the string it's self.
const page = ({ params }: { params: { id: string } }) => {
    // destructing the id from the params from the string.
    const id = params.id;
    return (
        // <div>
        //     <h1>Users Profile : {id}</h1>
        // </div>
        <div className="mt-10">
            <div className="bg-gray-500 p-4 rounded-lg m-10 text-black">
                <div className="text-[60px] text-center">Users Profile : {id}</div>

            </div>
        </div>
    )
}

export default page