import React, { Fragment, useState } from 'react';
// import Breadcrumb from '../components/common/breadcrumb';
// import data from '../data/dummyTableData';
// import Datatable from '../components/common/datatable';
import PageSettingList from '../components/page-setting/page-setting-list/pageSettingList';

const PageSetting = () => {

  // const [count, setCount] = useState(0);

  // var data = [
  //   {
  //     id: "1",
  //     name: "Product Menu",
  //     status: <i className="fa fa-circle font-success f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "2",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "3",
  //     name: "Subcategory Menu",
  //     status: <i className="fa fa-circle font-success f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "4",
  //     name: "Sales  Menu",
  //     status: <i className="fa fa-circle font-danger f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "5",
  //     name: "Vendor Menu",
  //     status: <i className="fa fa-circle font-success f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "6",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "7",
  //     name: "Subcategory Menu",
  //     status: <i className="fa fa-circle font-success f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "8",
  //     name: "Sales  Menu",
  //     status: <i className="fa fa-circle font-danger f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "9",
  //     name: "Vendor Menu",
  //     status: <i className="fa fa-circle font-success f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "10",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "11",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "12",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   }
  // ];

  // setTimeout(function() {
  //   fetch("./sampleData.json").then(res => res.json()).then((result) => {console.log(result)},(error) => {console.log(error)});
  //   this.data = [{
  //     id: "11",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   },
  //   {
  //     id: "12",
  //     name: "Category Menu",
  //     status: <i className="fa fa-circle font-warning f-12" />,
  //     creat_on: "2018-04-18T00:00:00"
  //   }];
  //   setCount(1);
  //   console.log("YEASH");
  // },5000);

  return (
    <Fragment>
      <PageSettingList />
    </Fragment>
  );
};

export default PageSetting;