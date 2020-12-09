import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Hello() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Hello World</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
            src="1.png"
            alt="Halo semuanya"
            width={500}
            height={300}
        />

        <ul>
            <li>
                <Link href="/post/abc">
                <a>Go to pages/post/[pid].js</a>
                </Link>
            </li>
            <li>
                <Link href="/post/abc?foo=bar">
                <a>Also goes to pages/post/[pid].js</a>
                </Link>
            </li>
            <li>
                <Link href="/post/abc/a-comment">
                <a>Go to pages/post/[pid]/[comment].js</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}
