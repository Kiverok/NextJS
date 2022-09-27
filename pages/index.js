import Link from "next/link"
import Head from "next/head"
import { MainLayout } from "./components/MainLayout"

export default function Index() {
     return (
     <MainLayout>
     <Head>
          <title>Next title</title>
          <meta name="keywords" content="next, javascript"/>
          <meta name="description" content="this is youtube tutorial for next"/>
          <meta charSet="utf-8"/>
     </Head>
     <h1>Hello Next.JS!</h1>
     <p><Link href={'/About'}><a>About</a></Link></p>
     <p><Link href={'/Posts'}><a>Posts</a></Link></p>
     <p>Lorem ipsum dolor sit amet,concectetur adipisicing.</p>
     </MainLayout>
     )
}