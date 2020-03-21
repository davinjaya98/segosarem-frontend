import React, { Fragment, Component } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import Datatable from '../../common/datatable';

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
            }]
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch("/segosarem-backend/getCustomDataList", {
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
                console.log(result);
            });
    }

    render() {
        const { data } = this.state;

        return (
            <Fragment>
                <Breadcrumb title="Custom Data List" parent="Custom Data" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Custom Data List</h5>
                                </div>
                                <div className="card-body datatable-react">
                                    <Datatable
                                        multiSelectOption={false}
                                        myData={data}
                                        pageSize={data.length > 10 ? 10 : data.length}
                                        pagination={true}
                                        class="-striped -highlight"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CustomDataList;