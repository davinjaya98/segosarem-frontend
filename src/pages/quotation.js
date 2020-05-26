import React, { Fragment, useState } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import QuotationList from '../components/quotation/quotation-list/quotationList';

const Quotation = () => {
    return (
        <Fragment>
            <Breadcrumb title="Quotation List" parent="Quotation" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Quotation List</h5>
                            </div>
                            <div className="card-body datatable-react">
                                <div className="row">
                                    <div className="col-12">
                                        <QuotationList />
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

export default Quotation;