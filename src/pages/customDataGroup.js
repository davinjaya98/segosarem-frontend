import React, { Fragment, useRef } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import CustomDataGroupList from '../components/custom-data-group/custom-data-group-list/customDataGroupList';
import CustomDataGroupAdd from '../components/custom-data-group/custom-data-group-add/customDataGroupAdd';

const CustomDataGroup = () => {

    const listRef = useRef();

    function triggerRefresh() {
        listRef.current.fetchData();
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
                                        <CustomDataGroupList ref={listRef} />
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