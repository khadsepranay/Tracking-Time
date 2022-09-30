import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/integration"></Route>
            <Route path="/blog"></Route>
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