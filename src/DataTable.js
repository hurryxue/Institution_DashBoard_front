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

const DataTable = () => {
    useEffect(() => {
        $(document).ready(function() {
            $('#report').DataTable({
                paging: true,
                searching: true,
                ordering: true,
                info: true,
                lengthMenu: [10, 25, 50, 100],
                order: [[0, 'asc']],
                pageLength: 25
            });
        });
    }, []);

    const content= "<table id=\"report\" className=\"display\" style=\" width: 100%; \">\n" +
        "            <thead>\n" +
        "            <tr>\n" +
        "                <th>Name</th>\n" +
        "                <th>Position</th>\n" +
        "                <th>Office</th>\n" +
        "                <th>Age</th>\n" +
        "                <th>Start date</th>\n" +
        "                <th>Salary</th>\n" +
        "            </tr>\n" +
        "            </thead>\n" +
        "            <tbody>\n" +
        "            <tr>\n" +
        "                <td>Tiger Nixon</td>\n" +
        "                <td>System Architect</td>\n" +
        "                <td>Edinburgh</td>\n" +
        "                <td>61</td>\n" +
        "                <td>2011/04/25</td>\n" +
        "                <td>$320,800</td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td>Garrett Winters</td>\n" +
        "                <td>Accountant</td>\n" +
        "                <td>Tokyo</td>\n" +
        "                <td>63</td>\n" +
        "                <td>2011/07/25</td>\n" +
        "                <td>$170,750</td>\n" +
        "            </tr>\n" +
        "            </tbody>\n" +
        "        </table>"
    return (
        <HtmlContent htmlString={content}></HtmlContent>
    );
};

export default DataTable;
