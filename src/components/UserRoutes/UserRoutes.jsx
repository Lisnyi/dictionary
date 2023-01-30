import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const SharedLayout = lazy(() => import("../layout/SharedLayout/SharedLayout"))
const Home = lazy(() => import("../../pages/Home/Home"))
const AddNewWords = lazy(() => import("../../pages/AddNewWords/AddNewWords"))
const TestingPage = lazy(() => import("../../pages/TestingPage/TestingPage"))
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"))


export function UserRoutes () {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/new-words" element={<AddNewWords/>}/>
                <Route path="/testing" element={<TestingPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}