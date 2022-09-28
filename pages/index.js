import Link from "next/link"
import Head from "next/head"
import { MainLayout } from "./components/MainLayout"

export default function Index() {
     return (
     <MainLayout title={'Home page'}>
     <h1>Hello Next.JS!</h1>
     <p><Link href={'/About'}><a>About</a></Link></p>
     <p><Link href={'/Posts'}><a>Posts</a></Link></p>
     <p>Lorem ipsum dolor sit amet,concectetur adipisicing.</p>
     </MainLayout>
     )
}