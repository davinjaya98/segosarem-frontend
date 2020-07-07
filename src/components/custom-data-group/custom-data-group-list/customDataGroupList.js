import React, { Fragment, Component } from 'react';

import { withRouterInnerRef } from "../../util/withRouterInnerRef";

import Datatable from '../../common/datatable';

import { BASE_HREF } from '../../../constant/basePath';

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
        if (requestParam) {
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

        fetch(BASE_HREF + "/getCdGroupByPageStgId", {
            method: 'POST',
            body: JSON.stringify({
                pageSettingId: pageSettingId
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

    activateModal = () => {
        this.props.showEditModal();
    }

    triggerDelete = () => {
        this.props.onDeleteClicked();
    }

    render() {
        const { data } = this.state;

        const columnsToShow = ["cdGroupName", "cdGroupDescription", "cdGroupSequence"];
        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
                    columnsToShow={columnsToShow}
                    pageSize={data.length}
                    pagination={false}
                    class="-striped -highlight"
                    childUrl={`${process.env.PUBLIC_URL}/customData`}
                    onEditClicked={this.activateModal}
                    onDeleteTriggered={this.triggerDelete}
                />
            </Fragment>
        );
    }
}

export default withRouterInnerRef(CustomDataGroupList);