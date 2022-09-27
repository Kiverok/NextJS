import Head from "next/dist/shared/lib/head"
import { MainLayout } from "./components/MainLayout"

export default function Posts() {
    return(
        <MainLayout>
        <Head>
          <title>Posts page</title>
     </Head>
        <h1>Posts Page</h1>
        </MainLayout>
    )
}