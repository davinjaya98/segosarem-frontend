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

        fetch("/getCdSettingsListByCdId", {
            method: 'POST',
            body: JSON.stringify({
                cdId: cdId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch (result.returnCode) {
                    case "000000":
                        this.setState({
                            data: result.responseObject
                        });
                        break;
                    case "333333":
                        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
                        break;
                    default:
                        this.setState({
                            data: []
                        });
                        break;
                }
            });
    }

    triggerDelete = () => {
        this.props.onDeleteClicked();
    }

    render() {
        const { data } = this.state;

        const columnsToShow = ["cdsName", "cdsKey", "cdsType", "cdsSequence"];
        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
                    columnsToShow={columnsToShow}
                    excludeEdit={true}
                    excludeRedirect={true}
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