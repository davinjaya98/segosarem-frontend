import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../components/common/breadcrumb';
import { DollarSign, MapPin, X, TrendingDown, ArrowUp, ShoppingCart, Search, Activity, User } from 'react-feather';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageSettingList from '../components/page-setting/page-setting-list/pageSettingList';
import CountUp from 'react-countup';

const Dashboard = () => {


  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth:true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  useEffect(() => {});

  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Ecommerce" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 xl-100">
            <div className="row">
              <div className="col-md-12 ecommerce-slider" >
                <Slider {...settings}>
                  <div className="item">
                    <div className="card">
                      <div className="card-body ecommerce-icons text-center">
                        <DollarSign />
                        <div><span>Total Earning</span></div>
                        <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={72} /></h4>
                      </div>
                    </div>
                  </div>
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
                  <div className="item">
                    <div className="card">
                      <div className="card-body ecommerce-icons text-center">
                        <ShoppingCart />
                        <div><span>Total Sale Product</span></div>
                        <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={96} />
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body ecommerce-icons text-center">
                        <TrendingDown />
                        <div><span>Company Loss</span></div>
                        <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={89} />
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body ecommerce-icons text-center">
                        <DollarSign />
                        <div><span>Total Earning</span></div>
                        <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={72} />
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body ecommerce-icons text-center">
                        <MapPin />
                        <div><span>Total Web Visitor</span></div>
                        <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={65} />
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body ecommerce-icons text-center">
                        <ShoppingCart />
                        <div><span>Total Sale Product</span></div>
                        <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={96} />
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body ecommerce-icons text-center">
                        <TrendingDown />
                        <div><span>Company Loss</span></div>
                        <h4 className="font-primary mb-0">
                          <CountUp className="counter" end={89} />
                        </h4>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
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