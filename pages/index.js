// Imports
import Head from "next/head";

export default function HomePage() {
  return (
    <div className="bg-slate-700">
      <Head>
        <title>Sciencium</title>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>

      <p className="font-bold text-xl antialiased">Hello World! 🚀</p>
    </div>
  );
}
