import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Header } from '../../index'
import { Spinner } from '@chakra-ui/react'

export default function SharedLayout() {
    return (
        <>
            <Header/>
            <main>
                <Suspense fallback={<Spinner m='25% 50%'/>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
}