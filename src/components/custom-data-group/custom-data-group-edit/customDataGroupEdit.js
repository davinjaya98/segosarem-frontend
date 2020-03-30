import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';

class CustomDataGroupEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,

            formName: 'customDataGroupEditForm',
            cdGroupId: 0,
            cdGroupName: '',
            cdGroupDescription: '',
            pageSettingId: 0
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
                    cdGroupId: editParam.cdGroupId,
                    cdGroupName: editParam.cdGroupName,
                    cdGroupDescription: editParam.cdGroupDescription
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

    updateCdgData = (event) => {
        const { cdGroupId, cdGroupName, cdGroupDescription } = this.state;

        event.preventDefault();
        fetch("/segosarem-backend/updateCustomDataGroup", {
            method: 'POST',
            body: JSON.stringify({
                cdGroupId: cdGroupId,
                cdGroupName: cdGroupName,
                cdGroupDescription: cdGroupDescription
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
        const { modal, formName, cdGroupId, cdGroupName, cdGroupDescription } = this.state;

        return (
            <Fragment>
                <Modal isOpen={modal} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>Update Custom Data Group</ModalHeader>
                    {/* custom data edit form */}
                    <ModalBody>
                        <form id={formName} name={formName} onSubmit={this.updateCdgData}>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdGroupName">Custom Data Group Name:</label>
                                <input className="form-control" type="text" id="cdGroupName" name="cdGroupName" value={cdGroupName} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdGroupDescription">Custom Data Group Description:</label>
                                <input className="form-control" type="text" id="cdGroupDescription" name="cdGroupDescription" value={cdGroupDescription} onChange={this.handleChange} required />
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