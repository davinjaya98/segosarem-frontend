import React, { Fragment, Component } from 'react';

import { toast } from 'react-toastify';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { withRouter } from "react-router-dom";

class PageSettingUserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: [],
            //Form
            addFormName:'customDataValueAddEditForm',
            activeCdId: null,
            activeCustomDataSetting: null,
            activeCustomDataValue: null,
            newDataModal: true,
            formFieldEntities: {},
            //Form
            pageKey: ''
        }
    }

    componentDidMount() {
        let requestParam = localStorage.getItem("requestParam");
        if (requestParam) {
            requestParam = JSON.parse(requestParam);
            this.setState({
                pageKey: requestParam.pageKey
            },
                //Callback after set state
                () => {
                    this.fetchData();
                });
        }
    }

    fetchData() {
        const { pageKey } = this.state;

        //TODO CODE HERE
        fetch("/segosarem-backend/getPageSettingByKey", {
            method: 'POST',
            body: JSON.stringify({
                pageKey: pageKey
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((result) => {
                if (result.returnCode == "000000") {
                    try {

        // let result = {
        //     "returnCode": "000000",
        //     "responseObject": {
        //       "settingId": 5,
        //       "pageTitle": "Welcome to Segosarem Cakboyo",
        //       "pageSeoKeywords": "segosarem, cakboyo, ayam, pedas, nikmat",
        //       "pageKey": "page.homepage",
        //       "customDataGroupList": [
        //         {
        //           "cdGroupId": 2,
        //           "cdGroupName": "Outlet",
        //           "cdGroupDescription": "List Outlet di halaman homepage",
        //           "pageSettingId": 0,
        //           "customDataList": [
        //             {
        //               "cdId": 3,
        //               "cdValuePair": [
        //                 {
        //                   "parentId": 13,
        //                   "value": {
        //                     "outlet.description": {
        //                       "fieldType": 1,
        //                       "value": "Segosarem Cabang Kresek Raya adalah cabang pertama segosarem cak boyo."
        //                     },
        //                     "outlet.name": {
        //                       "fieldType": 1,
        //                       "value": "Segosarem Cabang Kresek Raya"
        //                     },
        //                     "outlet.trending": {
        //                       "fieldType": 2,
        //                       "value": "true"
        //                     }
        //                   }
        //                 }
        //               ],
        //               "cdName": "Outlet Section Carousel",
        //               "cdType": 3,
        //               "cdSequence": "2",
        //               "cdKey": "homepage.outlet.carousel",
        //               "cdGroupId": null,
        //               "cdSettingList": [
        //                 {
        //                   "cdsId": 7,
        //                   "cdsName": "Is Outlet a Trending Outlet?",
        //                   "cdsKey": "outlet.trending",
        //                   "cdsType": 2,
        //                   "cdsSequence": "3",
        //                   "cdId": null
        //                 },
        //                 {
        //                   "cdsId": 6,
        //                   "cdsName": "Outlet Name",
        //                   "cdsKey": "outlet.name",
        //                   "cdsType": 1,
        //                   "cdsSequence": "2",
        //                   "cdId": null
        //                 },
        //                 {
        //                   "cdsId": 8,
        //                   "cdsName": "Outlet Description",
        //                   "cdsKey": "outlet.description",
        //                   "cdsType": 1,
        //                   "cdsSequence": "4",
        //                   "cdId": null
        //                 },
        //                 {
        //                   "cdsId": 5,
        //                   "cdsName": "Outlet Picture",
        //                   "cdsKey": "outlet.picture",
        //                   "cdsType": 1,
        //                   "cdsSequence": "1",
        //                   "cdId": null
        //                 }
        //               ]
        //             },
        //             {
        //               "cdId": 4,
        //               "cdValuePair": null,
        //               "cdName": "Contoh Name",
        //               "cdType": 1,
        //               "cdSequence": "3",
        //               "cdKey": "Contoh Key",
        //               "cdGroupId": null,
        //               "cdSettingList": [
        //                 {
        //                   "cdsId": 9,
        //                   "cdsName": "Contoh Name",
        //                   "cdsKey": "Contoh Key",
        //                   "cdsType": 1,
        //                   "cdsSequence": "1",
        //                   "cdId": null
        //                 }
        //               ]
        //             },
        //             {
        //               "cdId": 2,
        //               "cdValuePair": [
        //                 {
        //                   "parentId": 11,
        //                   "value": {
        //                     "description": {
        //                       "fieldType": 1,
        //                       "value": "This is the description for the outlet section on homepage."
        //                     }
        //                   }
        //                 }
        //               ],
        //               "cdName": "Outlet Section Description",
        //               "cdType": 1,
        //               "cdSequence": "1",
        //               "cdKey": "homepage.outlet.description",
        //               "cdGroupId": null,
        //               "cdSettingList": [
        //                 {
        //                   "cdsId": 4,
        //                   "cdsName": "Description Text(Max 255)",
        //                   "cdsKey": "description",
        //                   "cdsType": 1,
        //                   "cdsSequence": "1",
        //                   "cdId": null
        //                 }
        //               ]
        //             }
        //           ]
        //         },
        //         {
        //           "cdGroupId": 1,
        //           "cdGroupName": "Menu",
        //           "cdGroupDescription": "List menu di halaman homepage",
        //           "pageSettingId": 0,
        //           "customDataList": [
        //             {
        //               "cdId": 1,
        //               "cdValuePair": null,
        //               "cdName": "Homepage Menu",
        //               "cdType": 3,
        //               "cdSequence": "1",
        //               "cdKey": "field.menu",
        //               "cdGroupId": null,
        //               "cdSettingList": [
        //                 {
        //                   "cdsId": 2,
        //                   "cdsName": "Menu Name",
        //                   "cdsKey": "menu.name",
        //                   "cdsType": 1,
        //                   "cdsSequence": "2",
        //                   "cdId": null
        //                 },
        //                 {
        //                   "cdsId": 1,
        //                   "cdsName": "Menu Picture",
        //                   "cdsKey": "menu.picture",
        //                   "cdsType": 1,
        //                   "cdsSequence": "1",
        //                   "cdId": null
        //                 },
        //                 {
        //                   "cdsId": 3,
        //                   "cdsName": "Trending menu",
        //                   "cdsKey": "trending.menu",
        //                   "cdsType": 2,
        //                   "cdsSequence": "3",
        //                   "cdId": null
        //                 }
        //               ]
        //             }
        //           ]
        //         },
        //         {
        //           "cdGroupId": 5,
        //           "cdGroupName": "Test",
        //           "cdGroupDescription": "Test 2",
        //           "pageSettingId": 0,
        //           "customDataList": []
        //         }
        //       ]
        //     }
        //   }

           let fields = {};

            result.responseObject.customDataGroupList.forEach((cdGroup) => {
                cdGroup.customDataList.forEach((customData) => {
                    if(customData.cdSettingList && customData.cdSettingList.length > 0) {
                        //Attempting to create formFieldEntities
                        customData.cdSettingList.forEach((cdSetting) => {
                            fields[cdSetting.cdsKey] = null;
                        });
                    }
                    if(customData.cdValuePair && customData.cdValuePair.length > 0) {
                        customData.cdValuePair.forEach((cdValue) => {
                            for(let [key, value ] of Object.entries(cdValue.value)) {
                                fields[key + cdValue.parentId] = value.value;
                            }
                        })
                    }
                });
            });

            this.setState({
                    formFieldEntities: fields
                }, () => {
                    this.setState({
                        data: result.responseObject.customDataGroupList,
                    })
                });

                }
                catch (e) {
                    console.log(e);
                }
            }
        });

    }

    handleChange = (event) => {
        const target = event.target;
        
        this.setState({
            formFieldEntities: {
                [target.name]: target.value
            }
        });
    }

    renderInputField(setting, value, parentId) {
        const { formFieldEntities } = this.state;
        
        switch(setting.cdsType) {
            //Text field
            case 1:
                return (
                    <div className="form-group">
                        <label className="col-form-label" htmlFor={setting.cdsKey + parentId}>{setting.cdsName}</label>
                        <input className="form-control" type="text" id={setting.cdsKey + parentId} name={setting.cdsKey} value={formFieldEntities[setting.cdsKey + parentId]} setting-id={setting.cdsId} onChange={ this.handleChange }/>
                    </div>
                );
            //Checkboxes
            case 2:
                return (
                    <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" name={setting.cdsKey} type="hidden" value="false" setting-id={setting.cdsId} />
                        <input className="custom-control-input" id={setting.cdsKey + parentId} name={setting.cdsKey} type="checkbox" defaultChecked={formFieldEntities[setting.cdsKey + parentId] == "true"} value="true" setting-id={setting.cdsId} onChange={ this.handleChange } />
                        <label className="custom-control-label" htmlFor={setting.cdsKey + parentId}>{setting.cdsName}</label>
                        <div className="invalid-feedback">Example invalid feedback text</div>
                    </div>
                );
            //Blob
            case 3:
                return (
                    <div className="form-group">
                        <label className="col-form-label" htmlFor={setting.cdsKey + parentId}>{setting.cdsName}</label>
                        <input className="form-control" type="text" id={setting.cdsKey + parentId} name={setting.cdsKey} value={formFieldEntities[setting.cdsKey + parentId]} setting-id={setting.cdsId} onChange={ this.handleChange }/>
                    </div>
                );
            //Textarea
            case 4:
                return (
                    <div className="form-group">
                        <label className="col-form-label" htmlFor={setting.cdsKey + parentId}>{setting.cdsName}</label>
                        <textarea className="form-control" type="text" id={setting.cdsKey + parentId} name={setting.cdsKey} row="5" value={formFieldEntities[setting.cdsKey + parentId]} setting-id={setting.cdsId} onChange={ this.handleChange }></textarea>
                    </div>
                );
            default:
                return (
                    <span>Error when rendering custom data field</span>
                );
        }
    }

    //Set Active Custom Data and toggle modal
    setActiveCustomData(cdId, fieldSettings, fieldValue, newData) {
        this.setState({
            activeCdId: cdId,
            activeCustomDataSetting: fieldSettings,
            activeCustomDataValue: fieldValue,
            newDataModal: newData
        }, () => {
            this.toggleModal();
        });
    }

    deleteCustomDataValue(parentId) {
        
        fetch("/segosarem-backend/deleteCustomDataValue", {
            method: 'POST',
            body: JSON.stringify({
                entityId: parentId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((result) => {
                if (result.returnCode == "000000") {
                    //Trigger success notification
                    toast.success("Successfully Deleted!");
                    this.fetchData();
                }
            });
                
                
    }

    renderMultiTable = (fieldSettings, fieldValue, customData) => {
        //To sort by the sequence of the custom data settings
        let sortFieldSettings = (a,b) => {
            if(Number.parseInt(a["cdsSequence"]) > Number.parseInt(b["cdsSequence"])) return 1;
            if(Number.parseInt(b["cdsSequence"]) > Number.parseInt(a["cdsSequence"])) return -1;

            return 0;
        }

        fieldSettings.sort(sortFieldSettings);
        //To sort by the sequence of the custom data settings
        let renderTableValue = (values) => {
            return(
                <Fragment>
                    {values.map(value => {
                        return (
                            <Fragment>
                                <tr>
                                    {fieldSettings.map(setting => {
                                        return(
                                            <Fragment>
                                                {(value["value"][setting["cdsKey"]]) ? 
                                                    <td>{value["value"][setting["cdsKey"]].value}</td>
                                                    :
                                                    <td></td>
                                                }
                                            </Fragment>
                                        );
                                    })}
                                    <td>
                                        <span>
                                            <i className="fa fa-trash" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteCustomDataValue(value.parentId)}} style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}
                                            ></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-pencil" onClick={() => {this.setActiveCustomData(customData.cdId, fieldSettings, value, false);}} style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i>
                                        </span>
                                    </td>
                                </tr>
                            </Fragment>
                        )
                    })}
                </Fragment>
            );
        }
        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            {fieldSettings.map(setting => {
                                return(
                                    <th scope="col">{setting.cdsName}</th>
                                );
                            })}
                            <th style={{ minWidth: 95 }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {(fieldValue && fieldValue.length > 0) ? 
                                renderTableValue(fieldValue)
                                : 
                                <tr>
                                    <td className="text-center" colSpan={fieldSettings.length + 1}>You haven't add any value yet</td>
                                </tr>
                            }
                    </tbody>
                </table>
            </div>
        );
    }

    renderSectionBasedOnType(customData) {
        if (customData.cdSettingList && customData.cdSettingList.length > 0) {
            let fieldSettings,
            fieldValue;
            switch (customData.cdType) {
                //Single Data
                case 1:
                    fieldSettings = customData.cdSettingList[0];
                    if(customData.cdValuePair && customData.cdValuePair.length > 0) {
                        fieldValue = customData.cdValuePair[0];
                    }
                    return (
                        <Fragment>
                            <input type="hidden" name="cdId" value={customData.cdId} />
                            <input type="hidden" name="parentId" value={fieldValue ? fieldValue.parentId : ""}></input>
                            {this.renderInputField(fieldSettings, (fieldValue ? fieldValue.value[fieldSettings.cdsKey].value : null), (fieldValue ? fieldValue.parentId : ""))}
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <button className="btn btn-primary mr-1">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                        );
                //2 - Array
                case 2:
                    return (
                        <div className="form-group">
                            Type 2
                        </div>
                    );
                //3 - Multifield
                case 3:
                    fieldSettings = customData.cdSettingList;
                    if(customData.cdValuePair && customData.cdValuePair.length > 0) {
                        fieldValue = customData.cdValuePair;
                    }

                    return (
                        <Fragment>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-12">
                                        {this.renderMultiTable(fieldSettings, fieldValue, customData)}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <button type="button" className="btn btn-primary mr-1" onClick={() => {this.setActiveCustomData(customData.cdId, fieldSettings, null, true);}}>Add New</button>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    );
                default:
                    return (
                        <span>Error when rendering custom data section<br></br></span>
                    );
            }
        }
        else {
            return (
                <span>Custom Data Setting is not yet set for custom data with key "{customData.cdKey}"<br></br></span>
            );
        }
    }

    toggleModal = (close) => {
        const { modal } = this.state;
        if (close) {
            this.setState({
                modal: false
            });
        }
        else {
            this.setState({
                modal: !modal
            });
        }
    }

    constructModalBody = () => {
        const { addFormName, activeCdId, activeCustomDataSetting, activeCustomDataValue, newDataModal } = this.state;

        let parentId = activeCustomDataValue ? activeCustomDataValue.parentId : "";

        return (
            <Fragment>
                <ModalBody>
                    <form id={addFormName} name={addFormName} onSubmit={(e) => this.doSubmit(e, addFormName)}>
                        <input type="hidden" name="cdId" value={activeCdId} />
                        <input type="hidden" name="parentId" value={parentId} />
                        {newDataModal ? 
                            activeCustomDataSetting.map(setting => {
                                return this.renderInputField(setting, null, parentId);
                            }) 
                            : 
                            activeCustomDataSetting.map(setting => {
                                let value = activeCustomDataValue.value[setting.cdsKey];
                                return this.renderInputField(setting, (value ? value.value : ""), parentId);
                            })
                        }
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" form={addFormName} type="submit">Save Changes</Button>
                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Fragment>
        );
    }

    doSubmit = (event, formId, parentId) => {
        event.preventDefault();
        //Use FormID and get data using jquery form to cater for dynamic form
        let formElem = document.getElementById(formId);
        let formData = new FormData(formElem);
        let request = {
            valueBeans: []
        }

        for (let [key,value] of formData.entries()){
            if(key == "parentId") {
                if(value) {
                    request.parentId = value;
                }
            }
            else if(key == "cdId") {
                request.cdId = value;
            }
            else {

                let foundData = request.valueBeans.find(x => x.cdValueKey == key);
                if(foundData) {
                    foundData.cdValue = value;
                }
                else {
                    let field = {
                        cdValueKey: key,
                        cdValue: value,
                        cdsId: document.getElementById(key+formData.get("parentId")).getAttribute("setting-id")
                    }
                    request.valueBeans.push(field);
                }
            }
        };
        

        fetch("/segosarem-backend/addOrUpdateCustomDataValue", {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((result) => {
                if (result.returnCode == "000000") {
                    // this.setState({
                    //     data: result.responseObject
                    // });

                    //Trigger success notification
                    toast.success("Successfully Added!");
                    this.fetchData();

                    //Close the modal
                    this.toggleModal(true);

                    //Trigger list refresh
                    // this.props.onAddSuccess();
                }
            },(err) => {
                toast.error("Server Error");
            });

    }

    render() {
        const { modal, data, activeCustomDataSetting, newDataModal } = this.state;

        if (!data || data.length <= 0) {
            return (
                <Fragment>
                    Loading Data...
                </Fragment>
            );
        }
        else {
            return (
                <Fragment>
                    {data.map((customGroup, index) => {
                        let formName = `form${index}`;
                        //To sort by the sequence of the custom data
                        let sortCustomData = (a,b) => {
                            if(Number.parseInt(a["cdSequence"]) > Number.parseInt(b["cdSequence"])) return 1;
                            if(Number.parseInt(b["cdSequence"]) > Number.parseInt(a["cdSequence"])) return -1;
                
                            return 0;
                        }
                
                        if (customGroup.customDataList && customGroup.customDataList.length > 0) {
                            customGroup.customDataList.sort(sortCustomData);
                        }
                        //To sort by the sequence of the custom data
            
                        return (
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{customGroup.cdGroupName}</h5>
                                        <span>{customGroup.cdGroupDescription}</span>
                                    </div>
                                    <div className="card-body datatable-react">
                                        <div className="row">
                                            <div className="col-12">
                                                {(customGroup.customDataList && customGroup.customDataList.length > 0) ?
                                                    <Fragment>
                                                        {customGroup.customDataList.map((customData, index) => {
                                                            // return this.renderInputSectionBasedOnType(customData);
                                                            return (
                                                                <Fragment>
                                                                    <form id={formName + index} name={formName + index} className="theme-form" onSubmit={(e) => this.doSubmit(e, formName + index)}>
                                                                        {(index != 0) ? <hr className="mt-4 mb-4"></hr> : ""}
                                                                        <h6>{customData.cdName}</h6>
                                                                        {this.renderSectionBasedOnType(customData)}
                                                                    </form>
                                                                </Fragment>
                                                            );
                                                        })}
                                                    </Fragment>
                                                    :
                                                    <span>Please configure the fields first!</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <Modal isOpen={modal} toggle={this.toggleModal} size="lg">
                        <ModalHeader toggle={this.toggleModal}>{newDataModal ? "New Value" : "Update Value"}</ModalHeader>
                        {activeCustomDataSetting ? this.constructModalBody() : <Fragment> Loading Data... </Fragment>}
                    </Modal>
                </Fragment>
            );
        }
    }
};

export default withRouter(PageSettingUserEdit);