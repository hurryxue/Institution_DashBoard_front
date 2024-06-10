import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Selection from './Selection';
import Report from "./reportCharts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="selection" element={<Selection />} />
                <Route path="report" element={<Report/>} />
            </Routes>
        </Router>
    );
}

export default App;