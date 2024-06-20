// src/DataTable.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';

const HtmlContent = ({ htmlString }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
};

const DataTable = (rawData) => {

    useEffect(() => {
        $(document).ready(function() {
            $('#'+rawData.target_id).DataTable({
                paging: true,
                searching: true,
                ordering: true,
                info: true,
                lengthMenu: [10, 25, 50, 100],
                order: [[0, 'asc']],
                pageLength: 25
            });
        });
    }, [rawData]);

    console.log(rawData.data)
    return (
        <div>
            <h3>{rawData.title}</h3>
            <HtmlContent htmlString={rawData.data}></HtmlContent>
        </div>

    );
};

export default DataTable;
