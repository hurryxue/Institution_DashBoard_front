import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import MediaCard from './memberCard'
import CardGrid from "./cardList";
import {Box, CircularProgress} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Report from "./reportCharts";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";


// import DataTable from 'datatables.net-dt';

// export default MyDataTable;



function Selection() {

    console.log("hello selection")

    const [detail, setDetail] = useState('');
    const [institutionList, setInstitutionList] = useState([]);
    const [plotData, setPlotData] = useState(null);
    const [loadingerror,setLoadingerror] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [hasAccess, setHasList] = useState(true);
    //const  apiUrl  = process.env.REACT_APP_API_DEV_URL;
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




    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            console.log(`${apiUrl}/getinstitutions`)

            try {
                const response = await fetch(`${apiUrl}/getinstitutions`, {
                    method: 'GET',
                    credentials: 'include'  // cookie
                });

                const idList = await response.json();
                console.log(idList)
                // console.log(idList)
                if  (!idList || idList.length === 0){
                    // if the user do not have institutions
                    setHasList(false)
                }else{
                    const fetchPromises = idList.map(id =>
                        fetch(`${apiUrl}/report/${id}`, {
                            credentials: 'include',  // 允许携带cookie
                        }).then(response => response.json())
                    );
                    const institutions = await Promise.all(fetchPromises);
                    setInstitutionList(institutions);
                    console.log(institutions);
                    console.log(institutionList.length)
                }


            } catch (error) {
                console.error('Error fetching data:', error);
                setInstitutionList(null); // 在出错时设置数据为null
            }finally {
                setLoading(false)
            }
        };

        fetchData();
    }, []); // 空数组意味着这个效果只在组件首次渲染时运行


    if (loading) {
        return         <Box
            sx={{
                position: 'fixed',   // coverall screen
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // white background
            }}
        >
            <CircularProgress />
        </Box>
    }

    if(!hasAccess){
        return (
            <React.Fragment>
                <div>
                    <h1>You do not have the right to access this page.</h1>
                </div>
            </React.Fragment>
        )
    }



    if (institutionList.length === 1) {
        const fileID = institutionList[0].institution_file_id
        const institution = institutionList[0]
        navigate(location.pathname, { replace: true, state: { fid: fileID } });
        return(
            <React.Fragment>
                <h1>Institution Reports</h1>
                <div>
                    {/*<Card sx={{ height: 250 }}>*/}
                    {/*    <CardMedia*/}
                    {/*        component="img"*/}
                    {/*        height="50"*/}
                    {/*        image="static/arXiv-logo.png"*/}
                    {/*        sx={{*/}
                    {/*            maxWidth: 150,*/}
                    {/*            height: 100,*/}
                    {/*            marginLeft:1,*/}
                    {/*            marginTop:1,*/}
                    {/*            borderRadius: '10px',*/}
                    {/*            // border: '1px solid #ccc'*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*    <CardContent>*/}
                    {/*        <Typography gutterBottom variant="h5" component="div">*/}
                    {/*            {institution.insitution_name}*/}
                    {/*        </Typography>*/}
                    {/*        <Typography variant="body2" color="text.secondary">*/}
                    {/*            {institution.institution_info}*/}
                    {/*        </Typography>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
                    <Card sx={{ display: 'flex', height: 150, maxWidth: '40%', boxShadow: 3, bgcolor: 'background.paper', m: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    width: 125, // 控制图片宽度
                                    height: 90, // 控制图片高度
                                    borderRadius: '10px',
                                }}
                                image="static/arXiv-logo.png"
                            />
                        </Box>
                        <CardContent sx={{ flex: '1 0 auto',p: 3 }}>
                            <Typography gutterBottom variant="h4" component="div">
                                {institution.insitution_name}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                {institution.institution_info}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Report file={fileID}/>
                </div>
            </React.Fragment>
        )
    }


    return (
        <React.Fragment>
            <div>
            <h1>Institution Reports</h1>
                {/*<div style={buttonContainerStyle}>*/}
                <h2>Please select the report you want to see</h2>
                <div>
                    <CardGrid institutions={institutionList}/>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Selection;
