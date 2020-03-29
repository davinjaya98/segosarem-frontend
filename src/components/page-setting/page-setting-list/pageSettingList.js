import React, { Fragment, Component, useImperativeHandle } from 'react';

import { withRouterInnerRef } from "../../util/withRouterInnerRef";

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

        const columnsToShow = ["pageTitle", "pageDescription", "pageSeoKeywords", "pageKey"];

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