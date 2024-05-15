import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Selection from './Selection';
import Report from "./reportCharts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="Selection" element={<Selection />} />
                <Route path="Report" element={<Report/>} />
            </Routes>
        </Router>
    );
}

export default App;