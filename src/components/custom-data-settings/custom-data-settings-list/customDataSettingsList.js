import React, { Fragment, Component } from 'react';
import Datatable from '../../common/datatable';

class CustomDataSettingsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cdId: 0
        }
    }

    componentDidMount() {
        let editParam = localStorage.getItem("editParam");
        if (editParam) {
            editParam = JSON.parse(editParam);
            this.setState({
                cdId: editParam.cdId
            },
                () => {
                    this.fetchData();
                });
        }
    }

    fetchData() {
        const { cdId } = this.state;

        fetch("/segosarem-backend/getCdSettingsListByCdId", {
            method: 'POST',
            body: JSON.stringify({
                cdId: cdId
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
                } else {
                    this.setState({
                        data: []
                    });
                }
                console.log(result);
            });
    }

    triggerDelete = () => {
        this.props.onDeleteClicked();
    }

    render() {
        const { data } = this.state;

        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
                    pageSize={data.length > 10 ? 10 : data.length}
                    pagination={false}
                    class="-striped -highlight"
                    onDeleteTriggered={this.triggerDelete}
                />
            </Fragment>
        );
    }
}

export default CustomDataSettingsList;