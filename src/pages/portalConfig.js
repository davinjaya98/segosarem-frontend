import React, { Fragment, useRef } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import PageSettingAdd from '../components/page-setting/page-setting-add/pageSettingAdd';
import PageSettingList from '../components/page-setting/page-setting-list/pageSettingList';
import PageSettingEdit from '../components/page-setting/page-setting-edit/pageSettingEdit';
import { toast } from 'react-toastify';

import { BASE_HREF } from '../constant/basePath';

const PortalConfig = () => {

  const listRef = useRef();
  const editRef = useRef();

  function triggerRefresh() {
    listRef.current.fetchData();
  }

  function triggerShowModal() {
    editRef.current.toggleModal();
  }

  function deletePageSetting() {
    let deleteParam = localStorage.getItem("deleteParam");
    deleteParam = JSON.parse(deleteParam);

    const settingId = deleteParam.settingId;

    fetch(BASE_HREF + "/deletePageSetting", {
      method: 'POST',
      body: JSON.stringify({
        entityId: settingId
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
              toast.success("Successfully Deleted Page Setting");
    
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
                      <PageSettingAdd onAddSuccess={triggerRefresh} />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <PageSettingList ref={listRef} redirectUrl={`${process.env.PUBLIC_URL}/customDataGroup`} showEditModal={triggerShowModal} onDeleteClicked={deletePageSetting} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-end">
                      <PageSettingEdit ref={editRef} onEditSuccess={triggerRefresh} />
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

export default PortalConfig;