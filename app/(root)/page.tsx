// import Image from "next/image";

// import Testing from "../component/Testing";

 
 
export default function Home() {
  console.log("this is a message from the server and the client")
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello world</h1>
      {/* <Testing/> */}
    </div>
  );
}
