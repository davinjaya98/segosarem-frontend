import React, { Fragment, Component, useImperativeHandle } from 'react';

import { withRouterInnerRef } from "../../util/withRouterInnerRef";

import Datatable from '../../common/datatable';


class PageSettingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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
        const { data } = this.state;
        const { redirectUrl } = this.props;

        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
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