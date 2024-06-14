import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Selection from './Selection';
import Report from "./reportCharts";
import HelmetConfig from "./HelmetConfig";

function App() {
    return (
        <div>
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