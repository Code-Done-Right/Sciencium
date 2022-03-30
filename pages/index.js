// Imports
import Head from "next/head";

import { initializeApp } from "firebase/app";

export default function HomePage() {
  return (
    <div className="bg-slate-800">
      <Head>
        <title>Sciencium</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <p className="font-bold text-xl text-gray-200 ml-20 mt-10 antialiased">
        Hello World! 🚀
      </p>
    </div>
  );
}
