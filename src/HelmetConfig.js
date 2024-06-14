// src/HelmetConfig.js
import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetConfig = () => {
    const environment = process.env.REACT_APP_ENV;

    return (
        <Helmet>
            <title>Membership Report</title>
            {environment === 'LOCAL' && (
                <link rel="stylesheet" href="/static/css/arxivstyle.css"/>
                )}
            {environment === 'DEV' && (
                <link rel="stylesheet" href="./static/css/arxivstyle.css"/>
            )}
        </Helmet>
    );
};

export default HelmetConfig;
