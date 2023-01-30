import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const SharedLayout = lazy(() => import("../layout/SharedLayout/SharedLayout"))
const HomePage = lazy(() => import("../../pages/HomePage"))
const AddNewWordsPage = lazy(() => import("../../pages/AddNewWordsPage"))
const TestingPage = lazy(() => import("../../pages/TestingPage"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"))


export function UserRoutes () {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/new-words" element={<AddNewWordsPage/>}/>
                <Route path="/testing" element={<TestingPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}