import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';

class CustomDataGroupEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,

            formName: 'pageSettingEditForm',
            settingId: 0,
            pageTitle: '',
            pageSeoKeywords: '',
            pageDescription: '',
            pageKey: ''
        }
    }

    toggleModal = () => {
        // get current modal state
        const { modal } = this.state;

        // inverse the state of the modal
        this.setState({
            modal: !modal
        },
            () => {
                let editParam = localStorage.getItem("editParam");
                editParam = JSON.parse(editParam);

                this.setState({
                    settingId: editParam.settingId,
                    pageTitle: editParam.pageTitle,
                    pageSeoKeywords: editParam.pageSeoKeywords,
                    pageDescription: editParam.pageDescription
                });
            }
        );
    }

    handleChange = (event) => {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    updatePageSettingData = (event) => {
        const { settingId, pageTitle, pageSeoKeywords, pageDescription } = this.state;

        event.preventDefault();
        fetch("/segosarem-backend/updatePageSetting", {
            method: 'POST',
            body: JSON.stringify({
                settingId: settingId,
                pageTitle: pageTitle,
                pageSeoKeywords: pageSeoKeywords,
                pageDescription: pageDescription
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch(result.returnCode) {
                    case "000000":
                        //Trigger success notification
                        toast.success("Successfully Updated");
    
                        //Close the modal
                        this.toggleModal();
    
                        //Trigger list refresh
                        this.props.onEditSuccess();
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
        // get modal status, form name, and current custom data row details
        const { modal, formName, pageTitle, pageSeoKeywords, pageDescription } = this.state;

        return (
            <Fragment>
                <Modal isOpen={modal} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>Update Page Setting</ModalHeader>
                    {/* custom data edit form */}
                    <ModalBody>
                        <form id={formName} name={formName} onSubmit={this.updatePageSettingData}>
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
                        </form>
                    </ModalBody>
                    {/* custom data edit form */}

                    <ModalFooter>
                        <Button color="primary" form={formName} type="submit">Save Changes</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default CustomDataGroupEdit;