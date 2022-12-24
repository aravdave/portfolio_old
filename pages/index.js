import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

// Testing linking between pages
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Arav Dave</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <Image
          src="/images/profile_image.jpg"
          height={144}
          width={144}
          alt="Smiling Arav"
        />
        <p className="description">
          Hi! This page is under development.
        </p>
      </main>

      <Footer />
    </div>
  )
}
