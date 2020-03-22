import React, { Fragment, Component } from 'react';
import Datatable from '../../common/datatable';
import { withRouterInnerRef } from "../../util/withRouterInnerRef";

class CustomDataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                "cdId": 1,
                "cdName": "CustomData-dummy",
                "cdType": 3,
                "cdSequence": "1",
                "cdKey": "homepage.menu"
            }],
            cdGroupId: 0
        }
    }

    componentDidMount() {
        let requestParam = localStorage.getItem("requestParam");
        if (requestParam) {
            requestParam = JSON.parse(requestParam);
            this.setState({
                cdGroupId: requestParam.cdGroupId
            },
                () => {
                    this.fetchData();
                });
        }
    }

    fetchData() {
        const { cdGroupId } = this.state;

        fetch("/segosarem-backend/getCustomDataListByCdGroupId", {
            method: 'POST',
            body: JSON.stringify({
                cdGroupId: cdGroupId
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
                console.log(result);
            });
    }

    render() {
        const { data } = this.state;

        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
                    pageSize={data.length > 10 ? 10 : data.length}
                    pagination={true}
                    class="-striped -highlight"
                />
            </Fragment>
        );
    }
}

export default withRouterInnerRef(CustomDataList);