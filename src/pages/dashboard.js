import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import { FileText } from 'react-feather';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageSettingList from '../components/page-setting/page-setting-list/pageSettingList';
import CountUp from 'react-countup';

const Dashboard = () => {


  const [totalQuotation, setTotalQuotation] = useState(0);

  useEffect(() => {
    fetch("/segosarem-backend/getQuotationList", {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "token": localStorage.getItem("AdminToken")
        }
    }).then(res => res.json())
        .then((result) => {
            switch(result.returnCode) {
                case "000000":
                    setTotalQuotation(result.responseObject.length);
                    break;
                case "333333":
                    this.props.history.push(`${process.env.PUBLIC_URL}/login`);
                    break;
                default:
                    break;
            }
        });
  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Ecommerce" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 xl-100">
            <div className="row">
              <div className="col-xs-6 col-md-4" >
                <div className="item">
                  <div className="card">
                    <div className="card-body ecommerce-icons text-center">
                      <FileText />
                      <div><span>Total Quotation</span></div>
                      <h4 className="font-primary mb-0">
                        <CountUp className="counter" end={totalQuotation} /></h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xs-6 col-md-4" >
                <div className="item">
                  <div className="card">
                    <div className="card-body ecommerce-icons text-center">
                      <MapPin />
                      <div><span>Total Web Visitor</span></div>
                      <h4 className="font-primary mb-0">
                        <CountUp className="counter" end={65} /></h4>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Page List</h5>
              </div>
              <div className="card-body datatable-react">
                <div className="row mt-4">
                  <div className="col-12">
                    <PageSettingList excludeDelete={true} excludeEdit={true} redirectUrl={`${process.env.PUBLIC_URL}/pageSetting`}/>
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

export default Dashboard;