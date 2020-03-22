import React, { Fragment, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import Breadcrumb from '../components/common/breadcrumb';
import PageSettingAdd from '../components/page-setting/page-setting-add/pageSettingAdd';
import PageSettingList from '../components/page-setting/page-setting-list/pageSettingList';

const PortalConfig = () => {

  const listRef = useRef();
  
  function triggerRefresh() {
    listRef.current.fetchData();
  }

  return (
    <Fragment>
      <Breadcrumb title="Page List" parent="Portal Config" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5>Page List</h5>
              </div>
              <div className="card-body datatable-react">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-end">
                      <PageSettingAdd onAddSuccess={triggerRefresh}/>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <PageSettingList ref={listRef} redirectUrl={`${process.env.PUBLIC_URL}/customDataGroup`}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default PortalConfig;