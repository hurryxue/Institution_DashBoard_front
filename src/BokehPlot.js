// BokehPlot.js

/* global Bokeh */

import React, {useEffect} from 'react';
// import * as Bokeh from '@bokeh/bokehjs';

const BokehPlot = ({data}) => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.async = true;
    //     script.textContent = `
    //   Bokeh.embed.embed_item(${data}, 'myplot');
    // `;
    //     document.body.appendChild(script);
    //
    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, [data]);
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


    // return <div><p>{JSON.stringify(data, null, 2)}</p></div>;
    return <div><p>this is a test</p>
        <div id='member_dashboard'></div>
    </div>
};

export default BokehPlot;
