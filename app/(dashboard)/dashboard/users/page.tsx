
import Link from "next/link";
import { motion } from 'framer-motion';
const page = () => {
  return (
    <div>
      <h1 className="text-4xl rounded-lg text-gray-400 m-10">Dashboard Users</h1>
      <div className="mt-10">
        <ul className="bg-gray-500 p-4 rounded-lg m-10 text-black">
          <li className="m-4 p-4 rounded-md"><Link href="/dashboard/users/1">Users 1</Link></li>
          <li className="m-4 p-4 rounded-md"><Link href="/dashboard/users/2">Users 2</Link></li>
          <li className="m-4 p-4 rounded-md"><Link href="/dashboard/users/3">Users 3</Link></li>
          <li className="m-4 p-4 rounded-md"><Link href="/dashboard/users/4">Users 4</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default page