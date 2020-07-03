import React, { Component, Fragment } from "react";

import { toast } from 'react-toastify';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CustomDataAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            //Form
            formName: "CustomDataForm",
            cdName: '',
            cdType: 0,
            cdSequence: '',
            cdKey: '',
            cdGroupId: 0
            //Form
        }
    }

    componentDidMount() {
        let requestParam = localStorage.getItem("requestParam");
        if (requestParam) {
            requestParam = JSON.parse(requestParam);
            this.setState({
                cdGroupId: requestParam.cdGroupId
            });
        }
    }

    toggleModal = () => {
        const { modal } = this.state;
        this.setState({
            modal: !modal
        });
    }

    handleChange = (event) => {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    addNew = (event) => {
        const { cdName, cdType, cdSequence, cdKey, cdGroupId } = this.state;

        event.preventDefault();
        fetch("/addCustomData", {
            method: 'POST',
            body: JSON.stringify({
                cdName: cdName,
                cdType: cdType,
                cdSequence: cdSequence,
                cdKey: cdKey,
                cdGroupId: cdGroupId
            }),
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

                        //Trigger success notification
                        toast.success("Successfully Added");

                        //Close the modal
                        this.toggleModal();

                        //Trigger list refresh
                        this.props.onAddSuccess();
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

    render() {
        const { modal, formName, cdName, cdType, cdSequence, cdKey } = this.state;

        return (
            <Fragment>
                <Button color="primary" onClick={this.toggleModal}>Add New Custom Data</Button>
                <Modal isOpen={modal} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>New Custom Data</ModalHeader>
                    <ModalBody>
                        <form id={formName} name={formName} onSubmit={this.addNew}>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdName">Custom Data Name:</label>
                                <input className="form-control" type="text" id="cdName" name="cdName" value={cdName} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdType">Custom Data Type:</label>
                                <select className="form-control btn-pill digits" id="cdType" name="cdType" value={cdType} onChange={this.handleChange} required>
                                    <option value="">Please Select</option>
                                    <option value="1">1 - Single</option>
                                    {/* <option value="2">2 - Array</option> */}
                                    <option value="3">3 - Multifield</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdSequence">Custom Data Sequence:</label>
                                <input className="form-control" type="text" id="cdSequence" name="cdSequence" value={cdSequence} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdKey">Custom Data Key:</label>
                                <input className="form-control" type="text" id="cdKey" name="cdKey" value={cdKey} onChange={this.handleChange} required />
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" form={formName} type="submit">Save Changes</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default CustomDataAdd;