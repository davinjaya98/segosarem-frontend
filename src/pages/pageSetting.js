import React, { Fragment, useRef } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import PageSettingUserEdit from '../components/page-setting/page-setting-user-edit/pageSettingUserEdit';

const PageSetting = () => {

  const listRef = useRef();

  function triggerRefresh() {
    listRef.current.fetchData();
  }

  return (
    <Fragment>
      <Breadcrumb title="Page Setting" parent="Dashboard" />
      <div className="container-fluid">
        <div className="row">
            <PageSettingUserEdit />
        </div>
      </div>
    </Fragment>
  );
};

export default PageSetting;