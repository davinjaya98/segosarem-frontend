import React, { Component, Fragment } from "react";

import { toast } from 'react-toastify';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PageSettingAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            //Form
            formName: 'pageSettingAddForm',
            pageTitle: '',
            pageSeoKeywords: '',
            pageDescription: '',
            pageKey: ''
            //Form
        }
    }

    componentDidMount() { }

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
        const { pageTitle, pageSeoKeywords, pageKey, pageDescription } = this.state;

        event.preventDefault();
        fetch("/segosarem-backend/addPageSetting", {
            method: 'POST',
            body: JSON.stringify({
                pageTitle: pageTitle,
                pageSeoKeywords: pageSeoKeywords,
                pageDescription: pageDescription,
                pageKey: pageKey
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch(result.returnCode) {
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
        const { modal, formName, pageTitle, pageSeoKeywords, pageDescription, pageKey } = this.state;

        return (
            <Fragment>
                <Button color="primary" onClick={this.toggleModal}>Add New Page Setting</Button>
                <Modal isOpen={modal} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                    <ModalBody>
                        <form id={formName} name={formName} onSubmit={this.addNew}>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="pageTitle">Page Title:</label>
                                <input className="form-control" type="text" id="pageTitle" name="pageTitle" value={pageTitle} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="pageSeoKeywords">SEO Keywords:</label>
                                <input className="form-control" type="text" id="pageSeoKeywords" name="pageSeoKeywords" value={pageSeoKeywords} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="pageDescription">Page Description:</label>
                                <input className="form-control" type="textarea" id="pageDescription" name="pageDescription" value={pageDescription} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="pageKey">Page Key:</label>
                                <input className="form-control" type="text" id="pageKey" name="pageKey" value={pageKey} onChange={this.handleChange} required />
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

export default PageSettingAdd;