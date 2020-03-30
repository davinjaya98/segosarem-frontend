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
        // this.editRef.current.toggleModal();
        this.props.showEditModal();
    }

    triggerDelete = () => {
        this.props.onDeleteClicked();
    }

    render() {
        const { data } = this.state;

        const columnsToShow = ["cdName", "cdType", "cdSequence", "cdKey"];
        return (
            <Fragment>
                <Datatable
                    multiSelectOption={false}
                    myData={data}
                    columnsToShow={columnsToShow}
                    excludeRedirect={true}
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