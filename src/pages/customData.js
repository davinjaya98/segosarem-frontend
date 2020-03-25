import React, { Fragment, useRef } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import CustomDataList from '../components/custom-data/custom-data-list/customDataList';
import CustomDataAdd from '../components/custom-data/custom-data-add/customDataAdd';
import CustomDataEdit from '../components/custom-data/custom-data-edit/customDataEdit';

const CustomData = () => {

    const listRef = useRef();
    const editRef = useRef();

    function triggerRefresh() {
        listRef.current.fetchData();
    }

    function triggerShowModal() {
        editRef.current.toggleModal();
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
                                        <CustomDataList ref={listRef} showEditModal={triggerShowModal} />
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