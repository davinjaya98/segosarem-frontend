import React, { Fragment, useRef } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import CustomDataList from '../components/custom-data/custom-data-list/customDataList';
import CustomDataAdd from '../components/custom-data/custom-data-add/customDataAdd';
import CustomDataEdit from '../components/custom-data/custom-data-edit/customDataEdit';
import { toast } from 'react-toastify';

const CustomData = () => {

    const listRef = useRef();
    const editRef = useRef();

    function triggerRefresh() {
        listRef.current.fetchData();
    }

    function triggerShowModal() {
        editRef.current.toggleModal();
    }

    function deleteCustomData() {
        let deleteParam = localStorage.getItem("deleteParam");
        deleteParam = JSON.parse(deleteParam);

        const cdId = deleteParam.cdId;

        fetch("/segosarem-backend/deleteCustomData", {
            method: 'POST',
            body: JSON.stringify({
                entityId: cdId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch (result.returnCode) {
                    case "000000":
                        //Trigger success notification
                        toast.success("Successfully Deleted Custom Data");

                        //Trigger list refresh
                        listRef.current.fetchData();
                        break;
                    case "333333":
                        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
                        break;
                    default:
                        toast.error("Server Error");
                        break;
                }
            }, (err) => {
                toast.error("Server Error");
            });
    }

    return (
        <Fragment>
            <Breadcrumb title="Custom Data List" parent="Custom Data" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Custom Data List</h5>
                            </div>
                            <div className="card-body datatable-react">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-end">
                                            <CustomDataAdd onAddSuccess={triggerRefresh} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <CustomDataList ref={listRef} showEditModal={triggerShowModal} onDeleteClicked={deleteCustomData} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-end">
                                            <CustomDataEdit ref={editRef} onEditSuccess={triggerRefresh} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CustomData;