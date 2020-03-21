import React, { Fragment, Component } from 'react';
import Breadcrumb from '../../common/breadcrumb';
// import data from '../../data/dummyTableData';
import Datatable from '../../common/datatable';

class PageSettingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ "settingId": 123, "pageTitle": "Title Sample", "pageSeoKeywords": "Keywords Sample", "pageKey": "Key Sample" }]
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        //TODO CODE HERE
        fetch("/segosarem-backend/getPageList", {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((result) => {
                if (result.returnCode == "000000") {
                    this.setState({
                        data: result.responseObject
                    });
                    // setPages(result.responseObject);
                }
                console.log(result);
            });
        // var that = this;
        // setTimeout(function () {
        //     that.setState({
        //         data: [{ "settingId": 321, "pageTitle": "Updated Sample", "pageSeoKeywords": "Updated Sample", "pageKey": "Updated Sample" }]
        //     });
        // }, 5000);
    }

    render() {
        const { data } = this.state;
        // const dataList = data.map((single) =>
        //     <div key={single.settingId}>
        //         <span>{single.settingId}</span>
        //         <span>{single.pageTitle}</span>
        //         <span>{single.pageSeoKeywords}</span>
        //         <span>{single.pageKey}</span>
        //     </div>
        // );
        return (
            <Fragment>
                <Breadcrumb title="Page Setting List" parent="Page Setting" />
                {/* {dataList} */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Page Setting List</h5>
                                </div>
                                <div className="card-body datatable-react">
                                    <Datatable
                                        multiSelectOption={false}
                                        myData={data}
                                        pageSize={data.length > 10 ? 10 : data.length}
                                        pagination={true}
                                        class="-striped -highlight"
                                        childUrl={`${process.env.PUBLIC_URL}/customDataGroup`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default PageSettingList;