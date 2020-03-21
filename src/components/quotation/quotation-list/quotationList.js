import React, { Fragment, Component } from 'react';
import Breadcrumb from '../../common/breadcrumb'; // menu hierarchy in cms
import Datatable from '../../common/datatable'; // front end table view for cms

class QuotationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                "quotationId": 21,
                "custName": "dudud",
                "custEmail": "email@domain.com",
                "custPhoneNumnber": "8123019237012"
            }]
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch("/segosarem-backend/getQuotationList", {
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
                }
                console.log(result);
            });
    }

    render() {
        const { data } = this.state;
        /*
        Example of Difference between getting object state and state

        1. object state
        const { data } = this.state;
        const data = [{ 
            "quotationId": 21, 
            "custName": "dudud", 
            "custEmail": "email@domain.com", 
            "custPhoneNumnber": "8123019237012" 
        }]

        2. whole state
        const data = this.state;
        const data = {
            data: [{ 
                "quotationId": 21, 
                "custName": "dudud", 
                "custEmail": "email@domain.com", 
                "custPhoneNumnber": "8123019237012" 
            }]
        }
        */


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
                                    <Datatable
                                        multiSelectOption={false}
                                        myData={data}
                                        pageSize={data.length > 10 ? 10 : data.length}
                                        pagination={true}
                                        class="-striped -highlight"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default QuotationList;