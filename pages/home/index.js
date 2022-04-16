// Imports
import Head from "next/head";
import PageRootNavbar from "../../components/navbar.jsx";

import { initializeApp } from "firebase/app";

export default function HomePage() {
  return (
    <div className="bg-slate-800 flex flex-col">
      <Head>
        <title>Home | Sciencium</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <PageRootNavbar></PageRootNavbar>

      <p className="font-bold text-xl text-buoyantBlue ml-20 mt-10 antialiased">
        Hello World! 🚀
      </p>
    </div>
  );
}
