import { Routes, Route } from "react-router-dom"
import { lazy } from "react"

const Home = lazy(() => import("../../pages/Home/Home"))
const AddNewWords = lazy(() => import("../../pages/AddNewWords/AddNewWords"))
const Testing = lazy(() => import("../../pages/Testing/Testing"))
const Results = lazy(() => import("../../pages/Results/Results"))
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"))


export default function UserRoutes () {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/new-words" element={<AddNewWords/>}/>
                <Route path="/test" element={<Testing/>}/>
                <Route path="/results" element={<Results/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}