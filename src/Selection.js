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

let chris_data = {"target_id": "member_dashboard", "root_id": "p1241", "doc": {"version": "3.4.0", "title": "", "roots": [{"type": "object", "name": "Figure", "id": "p1241", "attributes": {"width": 800, "height": 1200, "x_range": {"type": "object", "name": "DataRange1d", "id": "p1243", "attributes": {"start": 0, "end": 1104.0}}, "y_range": {"type": "object", "name": "FactorRange", "id": "p1240", "attributes": {"factors": [["stat", "2023"], ["stat", "2022"], ["stat", "2021"], ["quant-ph", "2023"], ["quant-ph", "2022"], ["quant-ph", "2021"], ["q-fin", "2023"], ["q-fin", "2022"], ["q-fin", "2021"], ["q-bio", "2023"], ["q-bio", "2022"], ["q-bio", "2021"], ["physics", "2023"], ["physics", "2022"], ["physics", "2021"], ["nucl-th", "2023"], ["nucl-th", "2022"], ["nucl-th", "2021"], ["nucl-ex", "2023"], ["nucl-ex", "2022"], ["nucl-ex", "2021"], ["nlin", "2023"], ["nlin", "2022"], ["nlin", "2021"], ["math-ph", "2023"], ["math-ph", "2022"], ["math-ph", "2021"], ["math", "2023"], ["math", "2022"], ["math", "2021"], ["hep-th", "2023"], ["hep-th", "2022"], ["hep-th", "2021"], ["hep-ph", "2023"], ["hep-ph", "2022"], ["hep-ph", "2021"], ["hep-lat", "2023"], ["hep-lat", "2022"], ["hep-lat", "2021"], ["hep-ex", "2023"], ["hep-ex", "2022"], ["hep-ex", "2021"], ["gr-qc", "2023"], ["gr-qc", "2022"], ["gr-qc", "2021"], ["eess", "2023"], ["eess", "2022"], ["eess", "2021"], ["econ", "2023"], ["econ", "2022"], ["econ", "2021"], ["cs", "2023"], ["cs", "2022"], ["cs", "2021"], ["cond-mat", "2023"], ["cond-mat", "2022"], ["cond-mat", "2021"], ["astro-ph", "2023"], ["astro-ph", "2022"], ["astro-ph", "2021"]], "range_padding": 0.01}}, "x_scale": {"type": "object", "name": "LinearScale", "id": "p1251"}, "y_scale": {"type": "object", "name": "CategoricalScale", "id": "p1252"}, "title": {"type": "object", "name": "Title", "id": "p1244", "attributes": {"text": "Article count by year and archive"}}, "renderers": [{"type": "object", "name": "GlyphRenderer", "id": "p1282", "attributes": {"data_source": {"type": "object", "name": "ColumnDataSource", "id": "p1237", "attributes": {"selected": {"type": "object", "name": "Selection", "id": "p1238", "attributes": {"indices": [], "line_indices": []}}, "selection_policy": {"type": "object", "name": "UnionRenderers", "id": "p1239"}, "data": {"type": "map", "entries": [["labels", [["stat", "2023"], ["stat", "2022"], ["stat", "2021"], ["quant-ph", "2023"], ["quant-ph", "2022"], ["quant-ph", "2021"], ["q-fin", "2023"], ["q-fin", "2022"], ["q-fin", "2021"], ["q-bio", "2023"], ["q-bio", "2022"], ["q-bio", "2021"], ["physics", "2023"], ["physics", "2022"], ["physics", "2021"], ["nucl-th", "2023"], ["nucl-th", "2022"], ["nucl-th", "2021"], ["nucl-ex", "2023"], ["nucl-ex", "2022"], ["nucl-ex", "2021"], ["nlin", "2023"], ["nlin", "2022"], ["nlin", "2021"], ["math-ph", "2023"], ["math-ph", "2022"], ["math-ph", "2021"], ["math", "2023"], ["math", "2022"], ["math", "2021"], ["hep-th", "2023"], ["hep-th", "2022"], ["hep-th", "2021"], ["hep-ph", "2023"], ["hep-ph", "2022"], ["hep-ph", "2021"], ["hep-lat", "2023"], ["hep-lat", "2022"], ["hep-lat", "2021"], ["hep-ex", "2023"], ["hep-ex", "2022"], ["hep-ex", "2021"], ["gr-qc", "2023"], ["gr-qc", "2022"], ["gr-qc", "2021"], ["eess", "2023"], ["eess", "2022"], ["eess", "2021"], ["econ", "2023"], ["econ", "2022"], ["econ", "2021"], ["cs", "2023"], ["cs", "2022"], ["cs", "2021"], ["cond-mat", "2023"], ["cond-mat", "2022"], ["cond-mat", "2021"], ["astro-ph", "2023"], ["astro-ph", "2022"], ["astro-ph", "2021"]]], ["counts", [105.0, 103.0, 103.0, 103.0, 111.0, 107.0, 5.0, 2.0, 2.0, 15.0, 13.0, 9.0, 188.0, 178.0, 167.0, 12.0, 5.0, 8.0, 64.0, 78.0, 66.0, 8.0, 4.0, 1.0, 15.0, 6.0, 7.0, 215.0, 262.0, 231.0, 26.0, 34.0, 33.0, 87.0, 117.0, 74.0, 7.0, 4.0, 3.0, 110.0, 83.0, 76.0, 13.0, 13.0, 19.0, 64.0, 74.0, 92.0, 24.0, 29.0, 19.0, 958.0, 960.0, 857.0, 210.0, 225.0, 181.0, 853.0, 659.0, 688.0]]]}}}, "view": {"type": "object", "name": "CDSView", "id": "p1283", "attributes": {"filter": {"type": "object", "name": "AllIndices", "id": "p1284"}}}, "glyph": {"type": "object", "name": "HBar", "id": "p1279", "attributes": {"y": {"type": "field", "field": "labels"}, "height": {"type": "value", "value": 0.8}, "right": {"type": "field", "field": "counts"}, "line_color": {"type": "field", "field": "labels", "transform": {"type": "object", "name": "CategoricalColorMapper", "id": "p1275", "attributes": {"palette": ["#6baed6", "#3182bd", "#b31b1b"], "factors": ["2021", "2022", "2023"], "start": 1, "end": 2}}}, "fill_color": {"type": "field", "field": "labels", "transform": {"type": "object", "name": "CategoricalColorMapper", "id": "p1274", "attributes": {"palette": ["#6baed6", "#3182bd", "#b31b1b"], "factors": ["2021", "2022", "2023"], "start": 1, "end": 2}}}}}, "nonselection_glyph": {"type": "object", "name": "HBar", "id": "p1280", "attributes": {"y": {"type": "field", "field": "labels"}, "height": {"type": "value", "value": 0.8}, "right": {"type": "field", "field": "counts"}, "line_color": {"type": "field", "field": "labels", "transform": {"id": "p1275"}}, "line_alpha": {"type": "value", "value": 0.1}, "fill_color": {"type": "field", "field": "labels", "transform": {"id": "p1274"}}, "fill_alpha": {"type": "value", "value": 0.1}, "hatch_alpha": {"type": "value", "value": 0.1}}}, "muted_glyph": {"type": "object", "name": "HBar", "id": "p1281", "attributes": {"y": {"type": "field", "field": "labels"}, "height": {"type": "value", "value": 0.8}, "right": {"type": "field", "field": "counts"}, "line_color": {"type": "field", "field": "labels", "transform": {"id": "p1275"}}, "line_alpha": {"type": "value", "value": 0.2}, "fill_color": {"type": "field", "field": "labels", "transform": {"id": "p1274"}}, "fill_alpha": {"type": "value", "value": 0.2}, "hatch_alpha": {"type": "value", "value": 0.2}}}}}], "toolbar": {"type": "object", "name": "Toolbar", "id": "p1250", "attributes": {"tools": [{"type": "object", "name": "PanTool", "id": "p1263"}, {"type": "object", "name": "WheelZoomTool", "id": "p1264", "attributes": {"renderers": "auto"}}, {"type": "object", "name": "BoxZoomTool", "id": "p1265", "attributes": {"overlay": {"type": "object", "name": "BoxAnnotation", "id": "p1266", "attributes": {"syncable": false, "level": "overlay", "visible": false, "left": {"type": "number", "value": "nan"}, "right": {"type": "number", "value": "nan"}, "top": {"type": "number", "value": "nan"}, "bottom": {"type": "number", "value": "nan"}, "left_units": "canvas", "right_units": "canvas", "top_units": "canvas", "bottom_units": "canvas", "line_color": "black", "line_alpha": 1.0, "line_width": 2, "line_dash": [4, 4], "fill_color": "lightgrey", "fill_alpha": 0.5}}}}, {"type": "object", "name": "SaveTool", "id": "p1271"}, {"type": "object", "name": "ResetTool", "id": "p1272"}, {"type": "object", "name": "HelpTool", "id": "p1273"}]}}, "left": [{"type": "object", "name": "CategoricalAxis", "id": "p1258", "attributes": {"ticker": {"type": "object", "name": "CategoricalTicker", "id": "p1259"}, "formatter": {"type": "object", "name": "CategoricalTickFormatter", "id": "p1260"}, "major_label_policy": {"type": "object", "name": "AllLabels", "id": "p1261"}, "group_label_orientation": "horizontal"}}], "below": [{"type": "object", "name": "LinearAxis", "id": "p1253", "attributes": {"ticker": {"type": "object", "name": "BasicTicker", "id": "p1254", "attributes": {"mantissas": [1, 2, 5]}}, "formatter": {"type": "object", "name": "BasicTickFormatter", "id": "p1255"}, "major_label_policy": {"type": "object", "name": "AllLabels", "id": "p1256"}}}], "center": [{"type": "object", "name": "Grid", "id": "p1257", "attributes": {"axis": {"id": "p1253"}}}, {"type": "object", "name": "Grid", "id": "p1262", "attributes": {"dimension": 1, "axis": {"id": "p1258"}, "grid_line_color": null}}, {"type": "object", "name": "LabelSet", "id": "p1287", "attributes": {"level": "glyph", "source": {"id": "p1237"}, "x": {"type": "field", "field": "counts"}, "y": {"type": "field", "field": "labels"}, "text": {"type": "field", "field": "counts"}, "x_offset": {"type": "value", "value": 5}, "text_font_size": {"type": "value", "value": "11px"}, "text_baseline": {"type": "value", "value": "middle"}}}]}}]}, "version": "3.4.0"}

// export default MyDataTable;



function Selection() {

    const [detail, setDetail] = useState('');
    const [institutionList, setInstitutionList] = useState([]);
    const [plotData, setPlotData] = useState(null);
    const [loadingerror,setLoadingerror] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://127.0.0.1:8000/getinstitutions'); // 替换为你的API URL
                const idList = await response.json();
                console.log(idList)
                if  (!idList){
                    // if the user do not have institutions
                    return (
                        <div>
                            <h1>You do not have the right to access this page.</h1>
                        </div>
                    )
                }

                const fetchPromises = idList.map(id =>
                    fetch(`http://127.0.0.1:8000/report/${id}`).then(response => response.json())
                );

                const institutions = await Promise.all(fetchPromises);
                setInstitutionList(institutions);


                console.log(institutions);
                console.log(institutionList.length)
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
