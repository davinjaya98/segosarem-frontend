import React, { Fragment, Component } from 'react';
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

export default CustomDataGroupList;