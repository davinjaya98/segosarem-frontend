import React, { Fragment, Component } from 'react';

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
            activeCustomData: null,
            activeCustomDataSetting: null,
            activeCustomDataValue: null,
            newDataModal: true,
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
        //     "responseObject": {
        //         "settingId": 5,
        //         "pageTitle": "Welcome to Segosarem Cakboyo",
        //         "pageSeoKeywords": "segosarem, cakboyo, ayam, pedas, nikmat",
        //         "pageKey": "page.homepage",
        //         "customDataGroupList": [
        //             {
        //                 "cdGroupId": 2,
        //                 "cdGroupName": "Outlet",
        //                 "cdGroupDescription": "List Outlet di halaman homepage",
        //                 "pageSettingId": 0,
        //                 "customDataList": [
        //                     {
        //                         "cdId": 4,
        //                         "cdValuePair": null,
        //                         "cdName": "Contoh Name",
        //                         "cdType": 1,
        //                         "cdSequence": "3",
        //                         "cdKey": "Contoh Key",
        //                         "cdGroupId": null,
        //                         "cdSettingList": [

        //                         ]
        //                     },
        //                     {
        //                         "cdId": 2,
        //                         "cdValuePair": [
        //                             {
        //                                 "description": {
        //                                     "fieldType": 1,
        //                                     "value": "This is the description for the outlet section on homepage."
        //                                 }
        //                             }
        //                         ],
        //                         "cdName": "Outlet Section Description",
        //                         "cdType": 1,
        //                         "cdSequence": "1",
        //                         "cdKey": "homepage.outlet.description",
        //                         "cdGroupId": null,
        //                         "cdSettingList": [
        //                             {
        //                                 "cdsId": 4,
        //                                 "cdsName": "Description Text(Max 255)",
        //                                 "cdsKey": "description",
        //                                 "cdsType": 1,
        //                                 "cdsSequence": "1",
        //                                 "cdId": null
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         "cdId": 3,
        //                         "cdValuePair": [
        //                             {
        //                                 "outlet.description": {
        //                                     "fieldType": 1,
        //                                     "value": "Segosarem Cabang Kresek Raya adalah cabang pertama segosarem cak boyo."
        //                                 },
        //                                 "outlet.name": {
        //                                     "fieldType": 1,
        //                                     "value": "Segosarem Cabang Kresek Raya"
        //                                 },
        //                                 "outlet.trending": {
        //                                     "fieldType": 2,
        //                                     "value": "true"
        //                                 }
        //                             }
        //                         ],
        //                         "cdName": "Outlet Section Carousel",
        //                         "cdType": 3,
        //                         "cdSequence": "2",
        //                         "cdKey": "homepage.outlet.carousel",
        //                         "cdGroupId": null,
        //                         "cdSettingList": [
        //                             {
        //                                 "cdsId": 6,
        //                                 "cdsName": "Outlet Name",
        //                                 "cdsKey": "outlet.name",
        //                                 "cdsType": 1,
        //                                 "cdsSequence": "2",
        //                                 "cdId": null
        //                             },
        //                             {
        //                                 "cdsId": 7,
        //                                 "cdsName": "Is Outlet a Trending Outlet?",
        //                                 "cdsKey": "outlet.trending",
        //                                 "cdsType": 2,
        //                                 "cdsSequence": "3",
        //                                 "cdId": null
        //                             },
        //                             {
        //                                 "cdsId": 8,
        //                                 "cdsName": "Outlet Description",
        //                                 "cdsKey": "outlet.description",
        //                                 "cdsType": 1,
        //                                 "cdsSequence": "4",
        //                                 "cdId": null
        //                             },
        //                             {
        //                                 "cdsId": 5,
        //                                 "cdsName": "Outlet Picture",
        //                                 "cdsKey": "outlet.picture",
        //                                 "cdsType": 1,
        //                                 "cdsSequence": "1",
        //                                 "cdId": null
        //                             }
        //                         ]
        //                     }
        //                 ]
        //             },
        //             {
        //                 "cdGroupId": 1,
        //                 "cdGroupName": "Menu",
        //                 "cdGroupDescription": "List menu di halaman homepage",
        //                 "pageSettingId": 0,
        //                 "customDataList": [
        //                     {
        //                         "cdId": 1,
        //                         "cdValuePair": null,
        //                         "cdName": "Homepage Menu",
        //                         "cdType": 3,
        //                         "cdSequence": "1",
        //                         "cdKey": "field.menu",
        //                         "cdGroupId": null,
        //                         "cdSettingList": [
        //                             {
        //                                 "cdsId": 3,
        //                                 "cdsName": "Trending menu",
        //                                 "cdsKey": "trending.menu",
        //                                 "cdsType": 2,
        //                                 "cdsSequence": "3",
        //                                 "cdId": null
        //                             },
        //                             {
        //                                 "cdsId": 2,
        //                                 "cdsName": "Menu Name",
        //                                 "cdsKey": "menu.name",
        //                                 "cdsType": 1,
        //                                 "cdsSequence": "2",
        //                                 "cdId": null
        //                             },
        //                             {
        //                                 "cdsId": 1,
        //                                 "cdsName": "Menu Picture",
        //                                 "cdsKey": "menu.picture",
        //                                 "cdsType": 1,
        //                                 "cdsSequence": "1",
        //                                 "cdId": null
        //                             }
        //                         ]
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
        // let result = {"returnCode":"000000","responseObject":{"settingId":1,"pageTitle":"Segosarem Homepage","pageSeoKeywords":"Segosarem, Cak, Boyo, Enak","pageKey":"page.homepage","customDataGroupList":[{"cdGroupId":6,"cdGroupName":"ad","cdGroupDescription":"asdawd","pageSettingId":0,"customDataList":[]},{"cdGroupId":4,"cdGroupName":"cina","cdGroupDescription":"cina 2","pageSettingId":0,"customDataList":[]},{"cdGroupId":7,"cdGroupName":"well","cdGroupDescription":"hi","pageSettingId":0,"customDataList":[]},{"cdGroupId":8,"cdGroupName":"asd","cdGroupDescription":"asdaaaaaaaaaaaaaaaaaaa","pageSettingId":0,"customDataList":[]},{"cdGroupId":3,"cdGroupName":"tes 3","cdGroupDescription":"desc 3 cms","pageSettingId":0,"customDataList":[]},{"cdGroupId":2,"cdGroupName":"group 2","cdGroupDescription":"tes tambahan dari cms","pageSettingId":0,"customDataList":[]},{"cdGroupId":1,"cdGroupName":"Bagian Menu","cdGroupDescription":"Custom data untuk menu di homepage","pageSettingId":0,"customDataList":[{"cdId":1,"cdValuePair":[{"homepage.menu.description":{"fieldType":1,"value":"Deskripsi Makanan seperti Ayam, bakwan jagung, daun singkong, sambel mantul"},"homepage.menu.title":{"fieldType":1,"value":"Title Makanan"},"homepage.menu.trending":{"fieldType":3,"value":"true"}},{"homepage.menu.title":{"fieldType":1,"value":"Title Makanan"},"homepage.menu.trending":{"fieldType":3,"value":"true"},"homepage.menu.description":{"fieldType":1,"value":"Deskripsi Makanan seperti Ayam, bakwan jagung, daun singkong, sambel mantul"}}],"cdName":"Menu List","cdType":3,"cdSequence":"1","cdKey":"homepage.menu","cdGroupId":null,"cdSettingList":[{"cdsId":3,"cdsName":"Menu Description","cdsKey":"homepage.menu.description","cdsType":1,"cdsSequence":"3","cdId":null},{"cdsId":2,"cdsName":"Menu Title","cdsKey":"homepage.menu.title","cdsType":1,"cdsSequence":"2","cdId":null},{"cdsId":4,"cdsName":"Is trending menu?","cdsKey":"homepage.menu.trending","cdsType":3,"cdsSequence":"4","cdId":null},{"cdsId":6,"cdsName":"tes name 2","cdsKey":"tes key 2","cdsType":1,"cdsSequence":"6","cdId":null},{"cdsId":7,"cdsName":"tes name 3","cdsKey":"tes key 3","cdsType":1,"cdsSequence":"7","cdId":null},{"cdsId":9,"cdsName":"setting tes 2","cdsKey":"key tes 2","cdsType":2,"cdsSequence":"10","cdId":null},{"cdsId":5,"cdsName":"tes name","cdsKey":"tes key","cdsType":1,"cdsSequence":"5","cdId":null},{"cdsId":8,"cdsName":"setting tes 1","cdsKey":"key tes","cdsType":3,"cdsSequence":"8","cdId":null},{"cdsId":1,"cdsName":"Menu Image","cdsKey":"homepage.menu.image","cdsType":2,"cdsSequence":"1","cdId":null}]},{"cdId":7,"cdValuePair":null,"cdName":"Contoh Name","cdType":1,"cdSequence":"3","cdKey":"Contoh key 2","cdGroupId":null,"cdSettingList":[]},{"cdId":8,"cdValuePair":null,"cdName":"tes baru dari cms ","cdType":1,"cdSequence":"1","cdKey":"asdasdasdasd","cdGroupId":null,"cdSettingList":[]},{"cdId":6,"cdValuePair":null,"cdName":"Contoh Name","cdType":1,"cdSequence":"4","cdKey":"Contoh key","cdGroupId":null,"cdSettingList":[]},{"cdId":9,"cdValuePair":null,"cdName":"nyahahahaha","cdType":3,"cdSequence":"2","cdKey":"custom keyeye","cdGroupId":null,"cdSettingList":[]}]},{"cdGroupId":5,"cdGroupName":"tes lagi 5","cdGroupDescription":"desc tes","pageSettingId":0,"customDataList":[]}]}};
        
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

            this.setState({
                    data: result.responseObject.customDataGroupList
                });

                // console.log(result)
                }
                catch (e) {
                    console.log(e);
                }
                // console.log(result.responseObject);
            }
        });

    }

    renderInputField(setting, value) {
        switch(setting.cdsType) {
            //Text field
            case 1:
                return (
                    <div className="form-group">
                        <label className="col-form-label" htmlFor={setting.cdsKey}>{setting.cdsName}</label>
                        <input className="form-control" type="text" id={setting.cdsKey} name={setting.cdsKey} value={value ? value : ""}/>
                    </div>
                );
            //Checkboxes
            case 2:
                return (
                    <div className="custom-control custom-checkbox mb-3">
                      <input className="custom-control-input" id={setting.cdsKey} type="checkbox" checked={value == "true"} required />
                      <label className="custom-control-label" htmlFor={setting.cdsKey}>{setting.cdsName}</label>
                      <div className="invalid-feedback">Example invalid feedback text</div>
                    </div>
                );
            //Blob
            //Textarea
            default:
                return (
                    <span>Error when rendering custom data field</span>
                );
        }
    }

    //Set Active Custom Data and toggle modal
    setActiveCustomData(fieldSettings, fieldValue, newData) {
        this.setState({
            activeCustomDataSetting: fieldSettings,
            activeCustomDataValue: fieldValue,
            newDataModal: newData
        }, () => {
            this.toggleModal();
            console.log(this.state.activeCustomDataSetting, this.state.activeCustomDataValue, this.state.newDataModal);

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
                                            <i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}
                                            ></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-pencil" onClick={() => {this.setActiveCustomData(fieldSettings, value, false);}} style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i>
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
                            {this.renderInputField(fieldSettings, fieldValue ? fieldValue.value[fieldSettings.cdsKey].value : null)}
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex align-items-center justify-content-end">
                                        PARENT {fieldValue ? fieldValue.parentId : ""}
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
                                        <button type="button" className="btn btn-primary mr-1" onClick={() => {this.setActiveCustomData(fieldSettings, null, true);}}>Add New</button>
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

    toggleModal = () => {
        const { modal } = this.state;
        this.setState({
            modal: !modal
        });
    }

    constructModalBody = () => {
        const { addFormName, activeCustomDataSetting, activeCustomDataValue, newDataModal } = this.state;

        return (
            <Fragment>
                <ModalBody>
                    <form id={addFormName} name={addFormName}>
                        {newDataModal ? 
                            activeCustomDataSetting.map(setting => {
                                return this.renderInputField(setting);
                            }) 
                            : 
                            activeCustomDataSetting.map(setting => {
                                let value = activeCustomDataValue.value[setting.cdsKey];
                                return this.renderInputField(setting, value ? value.value : "");
                            })
                        }
                    </form>
                </ModalBody>
                <ModalFooter>
                    PARENT {activeCustomDataValue ? activeCustomDataValue.parentId : ""}
                    <Button color="primary" form={addFormName} type="submit">Save Changes</Button>
                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Fragment>
        );
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
                                                <form id={formName} name={formName} className="theme-form">
                                                    {(customGroup.customDataList && customGroup.customDataList.length > 0) ?
                                                        <Fragment>
                                                            {customGroup.customDataList.map((customData, index) => {
                                                                // return this.renderInputSectionBasedOnType(customData);
                                                                return (
                                                                    <Fragment>
                                                                        {(index != 0) ? <hr className="mt-4 mb-4"></hr> : ""}
                                                                        <h6>{customData.cdName}</h6>
                                                                        {this.renderSectionBasedOnType(customData)}
                                                                    </Fragment>
                                                                );
                                                            })}
                                                        </Fragment>
                                                        :
                                                        <span>Please configure the fields first!</span>
                                                    }
                                                </form>
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