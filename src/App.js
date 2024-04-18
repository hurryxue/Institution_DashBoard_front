import React, {useEffect, useState} from 'react';
import BokehPlot from "./BokehPlot";

function App() {

    const [detail, setDetail] = useState('');
    const [institutionList, setInstitutionList] = useState([]);
    const [plotData, setPlotData] = useState(null);
    const [loadingerror,setLoadingerror] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/getinstitutions'); // 替换为你的API URL
                const idList = await response.json();

                const institutions = []

                for (const id of idList) {
                    const response = await fetch(`http://127.0.0.1:8000/report/${id}`);
                    const results = await response.json();
                    institutions.push(results);
                }
                setInstitutionList(institutions)
                console.log(institutions);
            } catch (error) {
                console.error('Error fetching data:', error);
                setInstitutionList(null); // 在出错时设置数据为null
            }
        };

        fetchData();
    }, []); // 空数组意味着这个效果只在组件首次渲染时运行



    const handleButtonClick = async (fileId,description) => {
        setDetail(description);
        setLoadingerror(null);
        setPlotData(null)
        console.log('handleButtonClick')
        try {
            const response = await fetch(`http://127.0.0.1:8000/retrive/${fileId}`)
            const data = await response.json();
            console.log(data)
            setPlotData(data)

        }catch (error) {
            console.error('Error fetching diagram:', error);
            setLoadingerror("The file does not exist")
        }
    };

    // Style object for buttons container
    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',  // Makes the buttons stack vertically
        alignItems: 'flex-start', // Aligns buttons to the left
    };

    return (
        <React.Fragment>
            <html>
            <div style={{height: '200px'}}>
                <h1>Institution Reports</h1>
                <div style={buttonContainerStyle}>
                    {institutionList.map((inst, index) => (
                        <button key={index}
                                onClick={() => handleButtonClick(inst.institution_file_id, inst.institution_info)}>
                            {inst.insitution_name}
                        </button>
                    ))}
                </div>
                <p>{detail}</p>
                <div>
                    <h1>Submission Report</h1>
                    {loadingerror ? (
                        <p>Error loading the plot: {loadingerror}</p>
                    ) : (
                        plotData ? <BokehPlot data={plotData}/> : <p>Loading...</p>

                    )}
                </div>

            </div>
            </html>
        </React.Fragment>
    )
        ;
}

export default App;
