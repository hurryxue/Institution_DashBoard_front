// BokehPlot.js

/* global Bokeh */

import React, {useEffect} from 'react';
// import * as Bokeh from '@bokeh/bokehjs';

const BokehPlot = ({data, title, plotId}) => {

    useEffect(() => {
        if (data) {
            try {
                console.log('BokehPlot rend')
                console.log(data)
                Bokeh.embed.embed_item(data);
            } catch (error) {
                console.error('Error parsing JSON or embedding chart:', error);
            }
        }
    }, [data]);
    if (data==null){
        return <></>
    }


    // return <div><p>{JSON.stringify(data, null, 2)}</p></div>;
    return <div style={{marginTop:10}}>
        <h3>{title}</h3>
        <div id={plotId}></div>
    </div>
};

export default BokehPlot;
