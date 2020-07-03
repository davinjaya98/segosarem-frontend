import React, { Fragment, Component } from 'react';
import Datatable from '../../common/datatable'; // front end table view for cms
import moment from 'moment';

class QuotationList extends Component {
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
        fetch("/getQuotationList", {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
            // let result = {"returnCode":"000000","responseObject":[{"quotationDate":1586083673000,"quotationId":1,"custName":"Dimmmmmmm","custEmail":"dim@tes.com","custPhoneNumber":"88800009999"},{"quotationDate":1586086974000,"quotationId":2,"custName":"Davin Jaya Wisastra","custEmail":"davinjaya98@gmail.com","custPhoneNumber":"0163906293"},{"quotationDate":1586170152000,"quotationId":3,"custName":"Rian Sucitra","custEmail":"rsucita@gmail.com","custPhoneNumber":"081284903152"},{"quotationDate":1586171599000,"quotationId":4,"custName":"Tes data","custEmail":"tes@d.com","custPhoneNumber":"88899990000"}]};
                switch(result.returnCode) {
                    case "000000":
                        this.setState({
                            data: result.responseObject
                        }, () => {
                            this.state.data.forEach((quotation) => {
                                quotation.quotationDate = moment(quotation.quotationDate, "x").format("YYYY MMM D, HH:mm")
                            })
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

    render() {
        const { data } = this.state;

        return (
            <Fragment>
                <Datatable
                    excludeAction={true}
                    multiSelectOption={false}
                    myData={data}
                    pageSize={data.length}
                    pagination={false}
                    class="-striped -highlight"
                />
            </Fragment>
        );
    }
}

export default QuotationList;