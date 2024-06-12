import React from "react";
import Button from "./common/Button";
import Image from "next/image";
import Link from "next/link";
import Images from "@/assets/images";
import styles from "@/styles";

const Footer: React.FC = () => {
  return (
    <div className="bg-[url('../assets/images/footer-inner.png')] bg-cover bg-center flex flex-col pt-[20px]" >
      <h1 className={`${styles.headingH1} text-white text-center`}>subscribe to Wellgorithms Weekly</h1>
      
      <h2 className={`${styles.subHeading} text-white text-center my-2 px-4`}>
        a weekly dose of Wellgorithms to warm your heart, <br />
        invigorate your mind, and inspire resilience in adversity.
      </h2>

      <form className="flex justify-center py-5 px-36 mb-[42px]">
        <div className="flex items-center bg-white rounded-full border-4 border-purple-light md:w-[40%] max-w-3xl">
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="rounded-full w-full px-5 text-lg border-none focus:ring-0"
          />
          <button
            type="submit"
            className={`rounded-full bg-gradient-to-b from-purple-light to-purple-dark text-white text-lg font-bold py-2 px-6 ml-4 `}
          >
            Subscribe
          </button>
        </div>
      </form>
      <div className="flex flex-wrap my-4 justify-around items-start">
        <div className="flex flex-col items-center ">
          <Button btnText="about " btnType="button" />
          <p className="text-16 font-semibold text-white text-center w-[280px] pt-2 "> (inner) was started by a Bronx teacher and her partner, a software architect and graphic designer.</p>
        </div>

        <Image
          src={Images.inner}
          alt="logo"
          width={300}
          height={300}
          className="px-4"
        />
        <Button btnText="donate Now" btnType="button" />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="lg:bg-[#564A8D] rounded-full flex flex-col md:flex-row flex-wrap justify-around items-center md:w-[40%] p-2 my-4">
          <Link href="" className="text-white">
            writers in residence
          </Link>
          <Link href="" className="text-white my-4">
            (inner)Academy
          </Link>
          <Link href="" className="text-white">
            (inner)TV
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-4 pb-2">
        <Link href="" className="text-white">
          policies
        </Link>
        <Link href="" className="text-white">
          contact
        </Link>
      </div>
      
      <h2 className="text-center text-white">© copyright 2024 by (inner). All rights reserved</h2>
    </div>
  );
};

export default Footer;

// 'use client'

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { inner } from '@/assets';
// // import { useForm } from 'react-hook-form';
// // import useSWR from 'swr';
// // import inner from 'public/images/inner.png'; // Adjust the path as needed

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// interface FormData {
//   email: string;
// }

// function Footer() {
//   const [isLoading, setIsLoading] = useState(false);
//   // const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
//   //   mode: 'onBlur',
//   //   reValidateMode: 'onChange',
//   // });

//   // const { data } = useSWR(`${process.env.NEXT_PUBLIC_APP_BASEURL}/getfooterCategory`, fetcher, {
//   //   revalidateOnMount: true,
//   // });

//   // const onSubmit = async ({ email }: FormData) => {
//   //   setIsLoading(true);
//   //   try {
//   //     const myHeaders = new Headers();
//   //     myHeaders.append('Content-Type', 'application/json');
//   //     myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_TOKEN}`);

//   //     const raw_data = JSON.stringify({ email });
//   //     await fetch('https://connect.mailerlite.com/api/subscribers', {
//   //       method: 'POST',
//   //       headers: myHeaders,
//   //       body: raw_data,
//   //     });
//   //   } catch (error) {
//   //     console.error(error);
//   //   } finally {
//   //     setIsLoading(false);
//   //     reset();
//   //   }
//   // };

//   return (
//     <div className={`bg-[url('/assets/footer1.svg')] bg-cover bg-top py-52`}>
//       <div className="container mx-auto text-center">
//         <div className="text-center mb-10">
//           <h2 className="text-white text-3xl font-bold">subscribe to Wellgorithms Weekly</h2>
//           <p className="text-white text-lg mt-2">
//             a weekly dose of Wellgorithms to warm your heart,<br />
//             invigorate your mind, and inspire resilience in adversity.
//           </p>
//         </div>

//         <form
//         // onSubmit={handleSubmit(onSubmit)}
//         className="flex justify-center py-5 px-36">
//           <div className="flex items-center bg-white rounded-full border-4 border-purple-200 w-full max-w-3xl">
//             <input
//               type="email"
//               placeholder="Email"
//               aria-label="Email"
//               className="rounded-full h-14 w-full px-5 text-lg border-none focus:ring-0"
//               // {...register('email', {
//               //   required: 'Email is required',
//               //   pattern: {
//               //     value: /^\S+@\S+$/i,
//               //     message: 'Invalid email address',
//               //   },
//               // })}
//             />
//             <button
//               type="submit"
//               className={`rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-bold py-2 px-6 ml-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={isLoading}
//             >
//               {isLoading ? 'Subscribing...' : 'Subscribe'}
//             </button>
//           </div>
//           {/* {errors.email && (
//             <div className="text-red-500 mt-2">
//               {errors.email.type === 'required' && <span>This field is required.</span>}
//               {errors.email.type === 'pattern' && <span>Invalid Email Address.</span>}
//             </div>
//           )} */}
//         </form>

//         <div className="flex justify-center mt-10 mb-5">
//           <div className="text-center mx-5">
//             <Link
//             href={""}
//             // href={`/categories/${data?.data[0]?.category}`}
//             >
//               <span className="border-3 border-purple-200 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-bold py-2 px-12 rounded-full inline-block">
//                 About
//               </span>
//             </Link>
//             <p className="text-white text-sm mt-2">
//               (inner) was started by a Bronx teacher and her partner, a software architect and graphic designer
//             </p>
//           </div>
//           <div className="text-center mx-5">
//             <Image
//             // src={""}
//             src={inner}
//             alt="img" className="w-full h-auto" />
//           </div>
//           <div className="text-center mx-5">
//             <Link href="/donate">
//               <span className="border-3 border-purple-200 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-bold py-2 px-12 rounded-full inline-block">
//                 Donate Now
//               </span>
//             </Link>
//           </div>
//         </div>

//         <div className="text-center mb-5">
//           <ul className="flex justify-center bg-purple-700 bg-opacity-50 rounded-full p-5 space-x-10">
//             <li className="text-white font-bold">
//               <span>Writers in Residence</span>
//             </li>
//             <li className="text-white font-bold">
//               <Link href="/innerAcademyScrollFinal">
//                 <span>(inner)Academy</span>
//               </Link>
//             </li>
//             <li className="text-white font-bold">
//               <Link href="/innerVedio">
//                 <span>(inner)TV</span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="flex justify-between text-white font-bold mb-5">
//           <p>
//             <Link href="/policies">
//               <span>Policies</span>
//             </Link>
//           </p>
//           <p>
//             <Link href="/contact">
//               <span>Contact</span>
//             </Link>
//           </p>
//         </div>

//         <div className="text-center text-gray-300">
//           <p>© copyright 2024 by (inner). All rights reserved</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
