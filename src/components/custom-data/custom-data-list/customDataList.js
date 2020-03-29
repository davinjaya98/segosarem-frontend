import React, { Fragment, Component } from 'react';
import Datatable from '../../common/datatable';
import { withRouterInnerRef } from "../../util/withRouterInnerRef";


class CustomDataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cdGroupId: 0
        }
        // this.editRef = React.createRef();
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
                } else {
                    this.setState({
                        data: []
                    });
                }
                console.log(result);
            });
    }

    activateModal = () => {
        // this.editRef.current.toggleModal();
        this.props.showEditModal();
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
                    onEditClicked={this.activateModal}
                    onDeleteTriggered={this.triggerDelete}
                />
                {/* <div>
                    <CustomDataEdit ref={this.editRef} />
                </div> */}
            </Fragment>
        );
    }
}

export default withRouterInnerRef(CustomDataList);