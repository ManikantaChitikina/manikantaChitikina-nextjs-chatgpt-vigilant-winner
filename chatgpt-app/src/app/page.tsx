"use state";
import Head from 'next/head';
import ChatGPT from '@/components/chatgpt'
export default function Home() {
  return (
    <div>
      <Head>
        <title>ChatGPT Demo</title>
        <meta name="description" content="Integrate ChatGPT with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>ChatGPT Demo</h1>
        <ChatGPT />
      </main>
    </div>
  );
}

