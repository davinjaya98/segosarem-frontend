import React, { Fragment, Component, useImperativeHandle } from 'react';

import { withRouter } from "react-router-dom";

import Datatable from '../../common/datatable';

class PageSettingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ "settingId": 123, "pageTitle": "Title Sample", "pageSeoKeywords": "Keywords Sample", "pageKey": "Key Sample" },
            { "settingId": 123, "pageTitle": "Title Sample", "pageSeoKeywords": "Keywords Sample", "pageKey": "Key Sample" },
            { "settingId": 123, "pageTitle": "Title Sample", "pageSeoKeywords": "Keywords Sample", "pageKey": "Key Sample" },
            { "settingId": 123, "pageTitle": "Title Sample", "pageSeoKeywords": "Keywords Sample", "pageKey": "Key Sample" },
            { "settingId": 123, "pageTitle": "Title Sample", "pageSeoKeywords": "Keywords Sample", "pageKey": "Key Sample" },
            { "settingId": 123, "pageTitle": "Title Sample", "pageSeoKeywords": "Keywords Sample", "pageKey": "Key Sample" }]
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        //TODO CODE HERE
        fetch("/segosarem-backend/getPageList", {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((result) => {
                if (result.returnCode == "000000") {
                    this.setState({
                        data: result.responseObject
                    });
                }
            });
    }

    render() {
        const { data } = this.state;

        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
                    pageSize={data.length}
                    pagination={false}
                    class="-striped -highlight"
                    childUrl={`${process.env.PUBLIC_URL}/customDataGroup`}
                />
            </Fragment>
        );
    }
};

export default withRouter(PageSettingList);