import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Selection from './Selection';
import Report from "./reportCharts";
import HelmetConfig from "./HelmetConfig";
import DataTable from "./DataTable";

function App() {
    return (
        <div>
            <DataTable/>
            <HelmetConfig />
            <Router>
                <Routes>
                    <Route path="membershipreports/selection" element={<Selection />} />
                    <Route path="membershipreports/report" element={<Report/>} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;