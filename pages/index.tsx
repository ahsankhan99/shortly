import Boost from "@/components/Boost";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Head from "next/head";


export default function Home() {
  return (<>

    <Head>
      <title>Shortly</title>
      <meta name="description" content="Shortly - url shortner" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Hero />
      <Form />
      <Statistics />
      <Boost />
    </main>
    {/* <Footer /> */}
  </>
  )
}
