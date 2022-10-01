import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Integrations from "../Pages/Intergrations"
import Blog from "../Pages/Blog"
import Login from "../Pages/Login"
import PrivateRoute from "./PrivateRoute"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/integration" element={<PrivateRoute><Integrations/></PrivateRoute>}></Route>
            <Route path="/blog" element={<PrivateRoute><Blog/></PrivateRoute>}></Route>
            <Route path="/feaures/timetracker"></Route>
            <Route path="/feaures/projectmanagement"></Route>
            <Route path="/feaures/onlinetimesheet"></Route>
            <Route path="/feaures/timecards"></Route>
            <Route path="/feaures/attendancetracking"></Route>
            <Route path="/feaures/timereporting"></Route>
        </Routes>
    )
}

export default AllRoutes