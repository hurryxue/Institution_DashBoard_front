import BokehPlot from "./BokehPlot";

import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

function Report({file,name}){
    const [plotData,setPlotData] = useState(null)
    const [Loadingerror,setLoadingError] = useState(null)
    const [ChampionSingleChart,setChampionSingleChart] = useState(null)
    const [ChampionConsortChart,setChampionConsortChart] = useState(null)
    const [StandardSingleChart,setStandardSingleChart] = useState(null)
    const [StandardConsortChart,setStandardConsortChart] = useState(null)
    const [ArchiveBarplot,setArchiveBarplot] = useState(null)
    const location = useLocation()
    console.log(location.state)
    const { fileID, institutionName } = location.state;
    console.log(fileID, institutionName)
    const fid = fileID || file;
    const instname = institutionName || name;


    //let fid = file ? file : location.state;
    // const apiUrl = process.env.REACT_APP_API_DEV_URL;
    let apiUrl
    const environment = process.env.REACT_APP_ENV
    switch (environment) {
        case 'LOCAL':
            apiUrl = process.env.REACT_APP_API_Local_URL;
            break;
        case 'DEV':
            apiUrl = process.env.REACT_APP_API_DEV_URL;
            break;
    }


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
                console.log(plotData)
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
                    }else if (item.type === "archive-year-count-barplot"){
                        setArchiveBarplot(item.chart)
                        console.log("chartloaded")
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
            <h1>Submission Statistics for {instname}</h1>
            <h5>Thank you for being an arXiv member! This information is provided as a benefit of membership for your
                organization and should not be shared publicly. Questions about the data? Please see our <a
                    href="https://info.arxiv.org/about/submission_data_faq.html" target="_blank"
                    rel="noopener noreferrer"> FAQ</a>.</h5>
            {/*{<BokehPlot data={chris_data}/>}*/}

            <BokehPlot data={ChampionSingleChart} title={'Champion Dashboard'} plotId={'chart1'}/>
            <BokehPlot data={ChampionConsortChart} title={'Consortia Champion Dashboard'} plotId={'chart2'}/>
            <BokehPlot data={StandardSingleChart} title={'Member Dashboard'} plotId={'chart3'}/>
            <BokehPlot data={StandardConsortChart} title={'Consortia Single Dashboard'} plotId={'chart4'}/>
            <BokehPlot data={ArchiveBarplot} title={'Archive Barplot'} plotId={'archive-year-count-barplot'}/>

            Data provided by       Data provided by <img width="44" style={{ verticalAlign: 'middle' }} src="https://arxiv.org/scopus.png" alt="arXiv logo" />

            <h2 id="member-resources">Member Resources</h2>
            <ul>
                <li><a href="https://info.arxiv.org/about/membership.html">Membership program information</a></li>
                <li><a href="https://info.arxiv.org/about/membership_confirm.html">Renew your membership or update your contact information</a></li>
                <li><a href="https://static.arxiv.org/static/arxiv.marxdown/0.1/about/arXiv-payment-info.pdf">Payment instructions (pdf)</a></li>
                <li><a href="mailto:membership@arXiv.org">Questions? We're happy to help</a></li>
            </ul>
        </div>
    )
}

export default Report;
