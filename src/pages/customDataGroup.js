import React, { Fragment, useRef } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import CustomDataGroupList from '../components/custom-data-group/custom-data-group-list/customDataGroupList';
import CustomDataGroupAdd from '../components/custom-data-group/custom-data-group-add/customDataGroupAdd';
import CustomDataGroupEdit from '../components/custom-data-group/custom-data-group-edit/customDataGroupEdit';
import { toast } from 'react-toastify';

import { BASE_HREF } from '../constant/basePath';

const CustomDataGroup = () => {

    const listRef = useRef();
    const editRef = useRef();

    function triggerRefresh() {
        listRef.current.fetchData();
    }

    function triggerShowModal() {
        editRef.current.toggleModal();
    }

    function deleteCdGroup() {
        let deleteParam = localStorage.getItem("deleteParam");
        deleteParam = JSON.parse(deleteParam);

        const cdGroupId = deleteParam.cdGroupId;

        fetch(BASE_HREF + "/deleteCustomDataGroup", {
            method: 'POST',
            body: JSON.stringify({
                entityId: cdGroupId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch(result.returnCode) {
                  case "000000":
                    //Trigger success notification
                    toast.success("Successfully Deleted Custom Data Group");
            
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
            <Breadcrumb title="Custom Data Group List" parent="Custom Data Group" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Custom Data Group List</h5>
                            </div>
                            <div className="card-body datatable-react">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-end">
                                            <CustomDataGroupAdd onAddSuccess={triggerRefresh} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <CustomDataGroupList ref={listRef} showEditModal={triggerShowModal} onDeleteClicked={deleteCdGroup} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-end">
                                            <CustomDataGroupEdit ref={editRef} onEditSuccess={triggerRefresh} />
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

export default CustomDataGroup;