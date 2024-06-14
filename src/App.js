import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Selection from './Selection';
import Report from "./reportCharts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="membershipreports/selection" element={<Selection />} />
                <Route path="membershipreports/report" element={<Report/>} />
            </Routes>
        </Router>
    );
}

export default App;