import BokehPlot from "./BokehPlot";

import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

function Report({file}){
    const [plotData,setPlotData] = useState(null)
    const [Loadingerror,setLoadingError] = useState(null)
    const [ChampionSingleChart,setChampionSingleChart] = useState(null)
    const [ChampionConsortChart,setChampionConsortChart] = useState(null)
    const [StandardSingleChart,setStandardSingleChart] = useState(null)
    const [StandardConsortChart,setStandardConsortChart] = useState(null)
    const location = useLocation()
    let fid = file ? file : location.state;
    const apiUrl = process.env.REACT_APP_DEV_URL;


    console.log(fid)
    useEffect(()=>{
        const fetchData = async () => {
            setLoadingError(null);
            setPlotData(null)
            try {
                console.log('fetching')
                const response = await fetch(`${apiUrl}/retrive/${fid}`)
                const data = await response.json();
                setPlotData(data.chart)
                data.forEach(item => {
                    console.log(item.type);  // 打印每个元素的'name'字段
                    if(item.type === "ChampionSingle"){
                        setChampionSingleChart(item.chart)
                    }else if(item.type === "ChampionConsort"){
                        setChampionConsortChart(item.chart)
                    }else if (item.type === "StandardConsort"){
                        setStandardConsortChart(item.chart)
                    }else if(item.type === "StandardSingle"){
                        setStandardSingleChart(item.chart)
                    }
                });



            }catch (error) {
                console.error('Error fetching diagram:', error);
                setLoadingError("The file does not exist")
            }
        };
        fetchData();
    },[fid])

    if (Loadingerror) {
        return <p>Error loading the plot: {Loadingerror}</p>;
    }

    return (
        <div>
            <h1>Submission Report</h1>
            <h2>Thank you for your support for arXiv, here is the submission report for 20XX</h2>
            {/*{<BokehPlot data={chris_data}/>}*/}

            <BokehPlot data={ChampionSingleChart} title={'Champion Dashboard'} plotId={'chart1'}/>
            <BokehPlot data={ChampionConsortChart} title={'Consortia Champion Dashboard'} plotId={'chart2'}/>
            <BokehPlot data={StandardSingleChart} title={'Member Dashboard'} plotId={'chart3'}/>
            <BokehPlot data={StandardConsortChart} title={'Consortia Single Dashboard'} plotId={'chart4'}/>

        </div>
    )
}

export default Report;
