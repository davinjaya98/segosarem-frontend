import React, { Fragment, Component, useImperativeHandle } from 'react';

import { withRouterInnerRef } from "../../util/withRouterInnerRef";

import { toast } from 'react-toastify';

import Datatable from '../../common/datatable';


class PageSettingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            excludeDelete: this.props.excludeDelete,
            excludeEdit: this.props.excludeEdit
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
        const { data, excludeDelete, excludeEdit } = this.state;
        const { redirectUrl } = this.props;

        const columnsToShow = ["pageTitle", "pageDescription", "pageSeoKeywords", "pageKey", "pageSequence"];

        // sort pagesetting list
        let sortPageSetting = (a, b) => {
            if (Number.parseInt(a["pageSequence"]) > Number.parseInt(b["pageSequence"])) return 1;
            if (Number.parseInt(b["pageSequence"]) > Number.parseInt(a["pageSequence"])) return -1;

            return 0;
        }

        data.sort(sortPageSetting);

        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
                    columnsToShow={columnsToShow}
                    excludeDelete={excludeDelete}
                    excludeEdit={excludeEdit}
                    pageSize={data.length}
                    pagination={false}
                    class="-striped -highlight"
                    childUrl={redirectUrl}
                    onEditClicked={this.activateModal}
                    onDeleteTriggered={this.triggerDelete}
                />
            </Fragment>
        );
    }
};

export default withRouterInnerRef(PageSettingList);