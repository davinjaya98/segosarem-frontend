import React, { Fragment, Component, useImperativeHandle } from 'react';
import { withRouterInnerRef } from "../../util/withRouterInnerRef";

import { BASE_HREF } from '../../../constant/basePath';

class pageSettingCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        //TODO CODE HERE
        fetch(BASE_HREF + "/getPageList", {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch (result.returnCode) {
                    case "000000":
                        this.setState({
                            data: result.responseObject
                        });
                        break;
                    case "333333":
                        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
                        break;
                    default:
                        this.setState({
                            data: []
                        });
                        break;
                }
            });
    }

    redirectToChild = (row) => {
        // save current selected row data to browser local storage
        localStorage.setItem("requestParam", JSON.stringify(row));
        this.props.history.push(this.props.redirectUrl) //use here
    }

    render() {
        const { data } = this.state;

        // sort pagesetting list
        let sortPageSetting = (a, b) => {
            if (Number.parseInt(a["pageSequence"]) > Number.parseInt(b["pageSequence"])) return 1;
            if (Number.parseInt(b["pageSequence"]) > Number.parseInt(a["pageSequence"])) return -1;

            return 0;
        }

        data.sort(sortPageSetting);

        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        {data.map((pageSetting) => {
                            return (
                                <div className="col-sm-12">
                                    <div className="card" onClick={() => { this.redirectToChild(pageSetting) }}>
                                        <div className="card-header toggle-data">
                                            <h5 className="d-flex align-items-center justify-content-between">{pageSetting.pageTitle} <i className="icofont icofont-arrow-right"></i></h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Fragment >
        );
    }

};

export default withRouterInnerRef(pageSettingCards);