import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Header } from '../../../components'

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