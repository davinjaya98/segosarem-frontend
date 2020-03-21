import React, { Component, Fragment } from "react";

import { toast } from 'react-toastify';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CustomDataGroupAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            //Form
            formName: 'customDataGroupAddForm',
            cdGroupName: '',
            cdGroupDescription: '',
            pageSettingId: 0
            //Form
        }
    }

    componentDidMount() {
        let requestParam = localStorage.getItem("requestParam");
        if(requestParam) {
            requestParam = JSON.parse(requestParam);
            this.setState({
                pageSettingId: requestParam.settingId
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
        const { cdGroupName, cdGroupDescription, pageSettingId } = this.state;

        event.preventDefault();
        fetch("/segosarem-backend/addCustomDataGroup", {
            method: 'POST',
            body: JSON.stringify({
                cdGroupName: cdGroupName,
                cdGroupDescription: cdGroupDescription,
                pageSettingId: pageSettingId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((result) => {
                if (result.returnCode == "000000") {
                    this.setState({
                        data: result.responseObject
                    });

                    //Trigger success notification
                    toast.success("Successfully Added");

                    //Close the modal
                    this.toggleModal();

                    //Trigger list refresh
                    this.props.onAddSuccess();
                }
            },(err) => {
                toast.error("Server Error");
            });
    }

    render() {
        const { modal, formName, cdGroupName, cdGroupDescription } = this.state;

        return(
            <Fragment>
                <Button color="primary" onClick={this.toggleModal}>Add New Group</Button>
                <Modal isOpen={modal} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                    <ModalBody>
                        <form id={formName} name={formName} onSubmit={this.addNew}>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdGroupName">Group Name:</label>
                                <input className="form-control" type="text" id="cdGroupName" name="cdGroupName" value={cdGroupName} onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdGroupDescription">Group Description:</label>
                                <input className="form-control" type="text" id="cdGroupDescription" name="cdGroupDescription" value={cdGroupDescription} onChange={this.handleChange} required/>
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

export default CustomDataGroupAdd;