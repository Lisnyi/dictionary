import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Header, Footer } from '../../../components'
import { Loader } from "./Loader.styled"

export default function SharedLayout() {
  return (
    <>
        <Header/>
        <main>
          <Suspense fallback={<span>Loading...</span>}>
            <Outlet/>
          </Suspense>
        </main>
    </>
  )
}