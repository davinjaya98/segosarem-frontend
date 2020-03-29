import React, { Fragment, Component } from 'react';

import { withRouterInnerRef } from "../../util/withRouterInnerRef";

import Datatable from '../../common/datatable';

class CustomDataGroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pageSettingId: 0
        }
    }

    componentDidMount() {
        let requestParam = localStorage.getItem("requestParam");
        if(requestParam) {
            requestParam = JSON.parse(requestParam);
            this.setState({
                pageSettingId: requestParam.settingId
            }, 
            //Callback after set state
            () => {
                this.fetchData();
            });
        }
    }

    fetchData() {
        const { pageSettingId } = this.state;

        fetch("/segosarem-backend/getCdGroupByPageStgId", {
            method: 'POST',
            body: JSON.stringify({
                pageSettingId: pageSettingId
            }),
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
                    childUrl={`${process.env.PUBLIC_URL}/customData`}
                />
            </Fragment>
        );
    }
}

export default withRouterInnerRef(CustomDataGroupList);