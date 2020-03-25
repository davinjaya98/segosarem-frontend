import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';


class CustomDataEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,

            // custom data details
            cdFormName: "CustomDataEditForm",
            cdsFormName: "CustomDataSettingsForm",
            cdName: '',
            cdType: 0,
            cdSequence: '',
            cdKey: '',
            cdGroupId: 0,
            // custom data details

            // custom data settings add form
            cdsName: '',
            cdsKey: '',
            cdsType: 0,
            cdsSequence: '',
            cdId: 0
            // custom data settings add form
        }
    }

    // componentDidMount() {
    //     console.log("custom data edit mounted.");
    // }

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
                    cdName: editParam.cdName,
                    cdType: editParam.cdType,
                    cdSequence: editParam.cdSequence,
                    cdKey: editParam.cdKey,
                    cdId: editParam.cdId
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

    updateCdData = (event) => {
        const { cdId, cdName, cdType, cdSequence, cdKey, cdGroupId } = this.state;

        event.preventDefault();
        fetch("/segosarem-backend/updateCustomData", {
            method: 'POST',
            body: JSON.stringify({
                cdId: cdId,
                cdName: cdName,
                // cdType: cdType,
                cdSequence: cdSequence
                // cdKey: cdKey
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
                    toast.success("Successfully Updated");

                    //Close the modal
                    this.toggleModal();

                    //Trigger list refresh
                    this.props.onEditSuccess();
                }
            }, (err) => {
                toast.error("Server Error");
            });
    }

    addNewSetting = (event) => {
        const { cdsName, cdsKey, cdsType, cdsSequence, cdId } = this.state;

        event.preventDefault();

        // save new setting
        fetch("/segosarem-backend/addCustomDataSetting", {
            method: 'POST',
            body: JSON.stringify({
                // "cdId": 1,
                // "cdsKey": "tes key",
                // "cdsName": "tes name",
                // "cdsSequence": "5",
                // "cdsType": 1
                cdId: cdId,
                cdsKey: cdsKey,
                cdsName: cdsName,
                cdsSequence: cdsSequence,
                cdsType: cdsType
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((result) => {
                if (result.returnCode == "000000") {
                    this.setState({
                        data: result.responseObject,
                        cdId: 0,
                        cdsKey: '',
                        cdsName: '',
                        cdsSequence: '',
                        cdsType: 0
                    });

                    //Trigger success notification
                    toast.success("Successfully Added New Settings");

                    //Trigger list refresh
                    //this.props.onAddSuccess();
                }
            }, (err) => {
                toast.error("Server Error");
            });
    }

    updateCdsData = () => {

    }

    render() {
        // get modal status, form name, and current custom data row details
        const { modal, cdFormName, cdsFormName, cdName, cdType, cdSequence, cdKey, cdsName, cdsKey, cdsType, cdsSequence } = this.state;

        return (
            <Fragment>
                <Modal isOpen={modal} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>Update Custom Data</ModalHeader>
                    <ModalBody>
                        {/* custom data edit form */}
                        <form id={cdFormName} name={cdFormName} onSubmit={this.updateCdData}>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdName">Custom Data Name:</label>
                                <input className="form-control" type="text" id="cdName" name="cdName" value={cdName} onChange={this.handleChange} required />
                            </div>
                            {/* <div className="form-group">
                                <label className="col-form-label" htmlFor="cdType">Custom Data Type:</label>
                                <input className="form-control" type="text" id="cdType" name="cdType" value={cdType} onChange={this.handleChange} required />
                            </div> */}
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdSequence">Custom Data Sequence:</label>
                                <input className="form-control" type="text" id="cdSequence" name="cdSequence" value={cdSequence} onChange={this.handleChange} required />
                            </div>
                            {/* <div className="form-group">
                                <label className="col-form-label" htmlFor="cdKey">Custom Data Key:</label>
                                <input className="form-control" type="text" id="cdKey" name="cdKey" value={cdKey} onChange={this.handleChange} required />
                            </div> */}
                        </form>
                        {/* custom data edit form */}
                    </ModalBody>
                    <ModalBody>
                        {/* custom data settings form, to add new settings*/}
                        <h5>Add New Custom Data Setting</h5>
                        <form id={cdsFormName} name={cdsFormName} onSubmit={this.addNewSetting}>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdsName">Setting Name:</label>
                                <input className="form-control" type="text" id="cdsName" name="cdsName" value={cdsName} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdsKey">Setting Key:</label>
                                <input className="form-control" type="text" id="cdsKey" name="cdsKey" value={cdsKey} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdsType">Setting Type:</label>
                                <input className="form-control" type="text" id="cdsType" name="cdsType" value={cdsType} onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="cdsSequence">Setting Sequence:</label>
                                <input className="form-control" type="text" id="cdsSequence" name="cdsSequence" value={cdsSequence} onChange={this.handleChange} required />
                            </div>
                        </form>
                        {/* custom data settings form, to add new settings*/}

                        {/* custom data settings list */}
                        {/* <CustomDataSettingsList /> */}
                        {/* custom data settings list */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" form={cdFormName} type="submit">Save Custom Data Changes</Button>
                        <Button color="primary" form={cdsFormName} type="submit">Add New Setting</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default CustomDataEdit;