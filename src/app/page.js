import Head from 'next/head';
import EFirmaLogin from '../app/components/AutenticacionSAT';

export default function Home() {
  return (
    <>
      <Head>
        <title>SAT - e.firma | Gobierno de México</title>
        <meta name="description" content="Acceso con e.firma para el portal del SAT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EFirmaLogin />
    </>
  );
}
