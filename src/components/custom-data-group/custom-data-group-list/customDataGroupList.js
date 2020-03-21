import React, { Fragment, Component } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import Datatable from '../../common/datatable';

class CustomDataGroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                "cdGroupId": 1,
                "cdGroupName": "Group-dummy",
                "cdGroupDescription": "dummy-description"
            }]
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch("/segosarem-backend/getcustomDataGroupList", {
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
                <Breadcrumb title="Custom Data Group List" parent="Custom Data Group" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Custom Data Group List</h5>
                                </div>
                                <div className="card-body datatable-react">
                                    <Datatable
                                        multiSelectOption={false}
                                        myData={data}
                                        pageSize={data.length > 10 ? 10 : data.length}
                                        pagination={true}
                                        class="-striped -highlight"
                                        childUrl={`${process.env.PUBLIC_URL}/customData`}
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

export default CustomDataGroupList;