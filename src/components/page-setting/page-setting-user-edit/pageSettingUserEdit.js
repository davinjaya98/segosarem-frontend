import React, { Fragment, Component } from 'react';

import { toast } from 'react-toastify';

import CKEditors from "react-ckeditor-component";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { withRouter } from "react-router-dom";

import { BASE_HREF } from '../../../constant/basePath';

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
        fetch(BASE_HREF + "/getPageSettingByKey", {
            method: 'POST',
            body: JSON.stringify({
                pageKey: pageKey
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
            // let result = {"returnCode":"000000","responseObject":{"settingId":2,"pageTitle":"CSA Home","pageDescription":"Homepage for CSA website","pageSeoKeywords":"CSA Home page","pageKey":"homepage","pageSequence":"1","customDataGroupList":[{"cdGroupId":7,"cdGroupName":"Hero Banner Carousel Component","cdGroupDescription":"Component for homepage banner","pageSettingId":0,"pageSettingKey":null,"cdGroupSequence":"1","cdGroupImage":null,"customDataList":[{"cdId":1,"cdValuePair":[{"parentId":1,"value":{"titletext":{"cdsId":1,"fieldType":1,"value":"We Connect Every Lines & Shapes Together With You"}}}],"cdName":"Banner Upper Title","cdType":1,"cdSequence":"1","cdKey":"bannertitle1","cdGroupId":null,"cdSettingList":[{"cdsId":1,"cdsName":"Upper Homepage Banner Title","cdsKey":"titletext","cdsType":1,"cdsSequence":"1","cdId":null}]},{"cdId":2,"cdValuePair":[{"parentId":3,"value":{"titletext":{"cdsId":1,"fieldType":1,"value":"Architecture, Interior, Furniture"}}}],"cdName":"Banner Lower Title","cdType":1,"cdSequence":"1","cdKey":"bannertitle2","cdGroupId":null,"cdSettingList":[{"cdsId":2,"cdsName":"Lower homepage banner title","cdsKey":"titletext","cdsType":1,"cdsSequence":"1","cdId":null}]}]},{"cdGroupId":8,"cdGroupName":"CSA Intro Component","cdGroupDescription":"Component for CSA Introduction","pageSettingId":0,"pageSettingKey":null,"cdGroupSequence":"2","cdGroupImage":null,"customDataList":[{"cdId":3,"cdValuePair":[{"parentId":5,"value":{"titletext":{"cdsId":11,"fieldType":1,"value":"Our Services"}}}],"cdName":"Title for CSA Intro","cdType":1,"cdSequence":"1","cdKey":"csaintrotitle","cdGroupId":null,"cdSettingList":[{"cdsId":11,"cdsName":"title for csa intro component","cdsKey":"titletext","cdsType":1,"cdsSequence":"1","cdId":null}]},{"cdId":4,"cdValuePair":[{"parentId":7,"value":{"paragraphtextarea":{"cdsId":12,"fieldType":4,"value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}}}],"cdName":"Paragraph of CSA Intro","cdType":1,"cdSequence":"2","cdKey":"csaintroparagraph","cdGroupId":null,"cdSettingList":[{"cdsId":12,"cdsName":"Paragraph at the left sideof csa intro component","cdsKey":"paragraphtextarea","cdsType":4,"cdsSequence":"1","cdId":null}]},{"cdId":6,"cdValuePair":[{"parentId":9,"value":{"imgurl":{"cdsId":3,"fieldType":3,"value":"https://www.childhood.org.au/app/uploads/2017/07/ACF-logo-placeholder.png"},"titletext":{"cdsId":4,"fieldType":1,"value":"Build & Constructions"},"paragraphtextarea":{"cdsId":5,"fieldType":4,"value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}}},{"parentId":16,"value":{"imgurl":{"cdsId":3,"fieldType":3,"value":""},"titletext":{"cdsId":4,"fieldType":1,"value":"Interior"},"paragraphtextarea":{"cdsId":5,"fieldType":4,"value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}}},{"parentId":33,"value":{"imgurl":{"cdsId":3,"fieldType":3,"value":"https://www.childhood.org.au/app/uploads/2017/07/ACF-logo-placeholder.png"},"titletext":{"cdsId":4,"fieldType":1,"value":"Furniture"},"paragraphtextarea":{"cdsId":5,"fieldType":4,"value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}}}],"cdName":"Content of CSA Intro","cdType":3,"cdSequence":"3","cdKey":"csaintrocontent","cdGroupId":null,"cdSettingList":[{"cdsId":3,"cdsName":"img url for csa intro content","cdsKey":"imgurl","cdsType":3,"cdsSequence":"1","cdId":null},{"cdsId":4,"cdsName":"csa intro content title","cdsKey":"titletext","cdsType":1,"cdsSequence":"2","cdId":null},{"cdsId":5,"cdsName":"paragraph of each csa intro content","cdsKey":"paragraphtextarea","cdsType":4,"cdsSequence":"3","cdId":null}]}]},{"cdGroupId":9,"cdGroupName":"About Us Snippet Component","cdGroupDescription":"Component for About Us Snippet at Homepage","pageSettingId":0,"pageSettingKey":null,"cdGroupSequence":"3","cdGroupImage":"","customDataList":[{"cdId":7,"cdValuePair":[{"parentId":46,"value":{"imgurl":{"cdsId":6,"fieldType":3,"value":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/csa-fe/img-architect-05.png"}}}],"cdName":"First Snippet Image","cdType":1,"cdSequence":"1","cdKey":"aboutussnippetimage1","cdGroupId":null,"cdSettingList":[{"cdsId":6,"cdsName":"url for about us snippet first image","cdsKey":"imgurl","cdsType":3,"cdsSequence":"1","cdId":null}]},{"cdId":8,"cdValuePair":[{"parentId":48,"value":{"imgurl":{"cdsId":7,"fieldType":3,"value":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/csa-fe/img-architect-04.png"}}}],"cdName":"Second Snippet Image","cdType":1,"cdSequence":"2","cdKey":"aboutussnippetimage2","cdGroupId":null,"cdSettingList":[{"cdsId":7,"cdsName":"url for about us snippet second image","cdsKey":"imgurl","cdsType":3,"cdsSequence":"1","cdId":null}]},{"cdId":9,"cdValuePair":[{"parentId":50,"value":{"titletext":{"cdsId":8,"fieldType":1,"value":"About CSA"}}}],"cdName":"About us snippet title","cdType":1,"cdSequence":"3","cdKey":"aboutussnippettitle","cdGroupId":null,"cdSettingList":[{"cdsId":8,"cdsName":"title for about us snippet","cdsKey":"titletext","cdsType":1,"cdsSequence":"1","cdId":null}]},{"cdId":10,"cdValuePair":[{"parentId":52,"value":{"paragraphtextarea":{"cdsId":9,"fieldType":4,"value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}}}],"cdName":"About us snippet paragraph","cdType":1,"cdSequence":"4","cdKey":"aboutussnippetparagraph","cdGroupId":null,"cdSettingList":[{"cdsId":9,"cdsName":"paragraph content of about us snippet","cdsKey":"paragraphtextarea","cdsType":4,"cdsSequence":"1","cdId":null}]}]},{"cdGroupId":10,"cdGroupName":"Gallery Component","cdGroupDescription":"Gallery image slider at homepage","pageSettingId":0,"pageSettingKey":null,"cdGroupSequence":"4","cdGroupImage":null,"customDataList":[{"cdId":11,"cdValuePair":[{"parentId":54,"value":{"imgurl":{"cdsId":10,"fieldType":3,"value":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/csa-fe/img-architect-04.png"}}},{"parentId":56,"value":{"imgurl":{"cdsId":10,"fieldType":3,"value":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/csa-fe/img-architect-05.png"}}},{"parentId":58,"value":{"imgurl":{"cdsId":10,"fieldType":3,"value":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/csa-fe/img-architect-04.png"}}},{"parentId":60,"value":{"imgurl":{"cdsId":10,"fieldType":3,"value":"https://paparadam-assets.sgp1.digitaloceanspaces.com/images/csa-fe/img-architect-05.png"}}}],"cdName":"Gallery Images","cdType":3,"cdSequence":"1","cdKey":"galleryslider","cdGroupId":null,"cdSettingList":[{"cdsId":10,"cdsName":"url for slider images","cdsKey":"imgurl","cdsType":3,"cdsSequence":"1","cdId":null}]}]}]}};
                switch(result.returnCode) {
                    case "000000":
                        try {
                            let fields = {};
                            result.responseObject.customDataGroupList.forEach((cdGroup) => {
                                //Set the cd group image field to field entity
                                fields[`cdGroupImage${cdGroup.cdGroupId}`] = cdGroup.cdGroupImage;
                                cdGroup.customDataList.forEach((customData) => {
                                    if(customData.cdSettingList && customData.cdSettingList.length > 0) {
                                        //Attempting to create formFieldEntities
                                        customData.cdSettingList.forEach((cdSetting) => {
                                            fields[cdSetting.cdsId] = null;
                                        });
                                    }
                                    if(customData.cdValuePair && customData.cdValuePair.length > 0) {
                                        customData.cdValuePair.forEach((cdValue) => {
                                            for(let [key, value ] of Object.entries(cdValue.value)) {
                                                fields[value.cdsId + "par" + cdValue.parentId] = value.value;
                                            }
                                        });
                                    }
                                });
                            });
    
                            this.setState({
                                formFieldEntities: fields
                            }, () => {
                                this.setState({
                                    data: result.responseObject.customDataGroupList,
                                })

                                // console.log("List of all form fields ", this.state.formFieldEntities)
                            });
            
                        }
                        catch (e) {
                            console.log(e);
                        }
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

    handleChange = (event) => {
        const target = event.target;
        const { formFieldEntities } = this.state;
        
        let changed = {
            [target.name]: target.value
        }

        let merged = {
            ...formFieldEntities,
            ...changed
        }
        this.setState({
            formFieldEntities: merged
        });
    }

    handleCKEditorChange = (event, name) => {
        const { formFieldEntities } = this.state;
        
        let changed = {
            [name]: event.editor.getData()
        }

        let merged = {
            ...formFieldEntities,
            ...changed
        }
        this.setState({
            formFieldEntities: merged
        });
    }

    renderInputField(setting, value, parentId) {
        const { formFieldEntities } = this.state;
        
        switch(setting.cdsType) {
            //Text field
            case 1:
                return (
                    <div className="form-group">
                        <label className="col-form-label" htmlFor={setting.cdsId + "par" +  parentId}>{setting.cdsName}</label>
                        <input className="form-control" type="text" id={setting.cdsId + "par" +  parentId} name={setting.cdsId + "par" +  parentId} value={formFieldEntities[setting.cdsId + "par" +  parentId]} setting-id={setting.cdsId} onChange={ this.handleChange }/>
                    </div>
                );
            //Checkboxes
            case 2:
                return (
                    <div className="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" name={setting.cdsId + "par" +  parentId} type="hidden" value="false" setting-id={setting.cdsId} />
                        <input className="custom-control-input" id={setting.cdsId + "par" +  parentId} name={setting.cdsId + "par" +  parentId} type="checkbox" defaultChecked={formFieldEntities[setting.cdsId + "par" +  parentId] == "true"} value="true" setting-id={setting.cdsId} onChange={ this.handleChange } />
                        <label className="custom-control-label" htmlFor={setting.cdsId + "par" +  parentId}>{setting.cdsName}</label>
                        <div className="invalid-feedback">Example invalid feedback text</div>
                    </div>
                );
            //Image URL - Single
            case 3:
                return (
                    <div className="form-group">
                        <label className="col-form-label" htmlFor={setting.cdsId + "par" +  parentId}>{setting.cdsName}</label>
                        <input className="form-control" type="text" id={setting.cdsId + "par" +  parentId} name={setting.cdsId + "par" +  parentId} value={formFieldEntities[setting.cdsId + "par" +  parentId]} setting-id={setting.cdsId} onChange={ this.handleChange }/>
                    </div>
                );
            //Textarea
            case 4:
                return (
                    <div className="form-group">
                        <label className="col-form-label" htmlFor={setting.cdsId + "par" +  parentId}>{setting.cdsName}</label>
                        <textarea className="form-control" type="text" id={setting.cdsId + "par" +  parentId} name={setting.cdsId + "par" +  parentId} row="5" value={formFieldEntities[setting.cdsId + "par" +  parentId]} setting-id={setting.cdsId} onChange={ this.handleChange }></textarea>
                    </div>
                );
            //Image Upload
            case 5:
                break;
            //WYSWYG Editor
            case 6:
                return (
                    <div className="form-group">
                        {/* This is to submit the value */}
                        <input type="hidden" id={setting.cdsId + "par" +  parentId} name={setting.cdsId + "par" +  parentId} value={formFieldEntities[setting.cdsId + "par" +  parentId]} setting-id={setting.cdsId}></input>
                        {/* This one to render the value */}
                        <CKEditors
                            activeclassName="p10"
                            content={formFieldEntities[setting.cdsId + "par" +  parentId]}
                            events={{
                                "blur": this.onBlur,
                                "afterPaste": this.afterPaste,
                                "change": (evt) => {
                                    this.handleCKEditorChange(evt, setting.cdsId + "par" +  parentId);
                                }
                            }}
                        />
                    </div>
                );
                //Image URL - Array Split by Commas
                case 7:
                    return (
                        <div className="form-group">
                            <label className="col-form-label" htmlFor={setting.cdsId + "par" +  parentId}>{setting.cdsName}</label>
                            <input className="form-control" type="text" id={setting.cdsId + "par" +  parentId} name={setting.cdsId + "par" +  parentId} value={formFieldEntities[setting.cdsId + "par" +  parentId]} setting-id={setting.cdsId} onChange={ this.handleChange }/>
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
        fetch(BASE_HREF + "/deleteCustomDataValue", {
            method: 'POST',
            body: JSON.stringify({
                entityId: parentId
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
                        toast.success("Successfully Deleted!");
                        this.fetchData();
                        break;
                    case "333333":
                        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
                        break;
                    default:
                        toast.error("Server Error");
                        break;
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
                        cdsId: document.getElementById(key).getAttribute("setting-id")
                    }
                    request.valueBeans.push(field);
                }
            }
        };
        

        fetch(BASE_HREF + "/addOrUpdateCustomDataValue", {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch(result.returnCode) {
                    case "000000":
                        //Trigger success notification
                        toast.success("Successfully Added!");
                        this.fetchData();
    
                        //Close the modal
                        this.toggleModal(true);
                        break;
                    case "333333":
                        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
                        break;
                    default:
                        toast.error("Server Error");
                        break;
                }
            },(err) => {
                toast.error("Server Error");
            });

    }

    updateCdGroup = (event, formId) => {
        event.preventDefault();
        //Use FormID and get data using jquery form to cater for dynamic form
        let formElem = document.getElementById(formId);
        let formData = new FormData(formElem);
        // let request = {
        //     valueBeans: []
        // }
        let request = {};

        for (let [key,value] of formData.entries()){
            if(key.indexOf("cdGroupImage") > -1) {
                request.cdGroupImage = value;
            }
            else {
                request[key] = value;
            }
            // let foundData = request.valueBeans.find(x => x.cdValueKey == key);
            // if(foundData) {
            //     foundData.cdValue = value;
            // }
            // else {
            //     let field = {
            //         cdValueKey: key,
            //         cdValue: value,
            //         cdsId: document.getElementById(key).getAttribute("setting-id")
            //     }
            //     request.valueBeans.push(field);
            // }
        };
        

        fetch(BASE_HREF + "/updateCustomDataGroup", {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "token": localStorage.getItem("AdminToken")
            }
        }).then(res => res.json())
            .then((result) => {
                switch(result.returnCode) {
                    case "000000":
                        //Trigger success notification
                        toast.success("Successfully Added!");
                        this.fetchData();
    
                        //Close the modal
                        this.toggleModal(true);
                        break;
                    case "333333":
                        this.props.history.push(`${process.env.PUBLIC_URL}/login`);
                        break;
                    default:
                        toast.error("Server Error");
                        break;
                }
            },(err) => {
                toast.error("Server Error");
            });

    }

    render() {
        const { modal, data, activeCustomDataSetting, newDataModal, formFieldEntities } = this.state;

        let sortCdGroupData = (a,b) => {
            if(Number.parseInt(a["cdGroupSequence"]) > Number.parseInt(b["cdGroupSequence"])) return 1;
            if(Number.parseInt(b["cdGroupSequence"]) > Number.parseInt(a["cdGroupSequence"])) return -1;

            return 0;
        }

        data.sort(sortCdGroupData);

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
                                        {/* This is to edit the custom data group image */}
                                        <div className="row">
                                            <div className="col-12">
                                                <form id={`group` + formName + index} name={`group` + formName + index} className="theme-form" onSubmit={(e) => this.updateCdGroup(e, `group` + formName + index)}>
                                                    <h6>Custom Data Group Image</h6>
                                                    <input type="hidden" name="cdGroupId" value={customGroup.cdGroupId} />
                                                    <input type="hidden" name="cdGroupName" value={customGroup.cdGroupName} />
                                                    <input type="hidden" name="cdGroupDescription" value={customGroup.cdGroupDescription} />
                                                    <input type="hidden" name="cdGroupSequence" value={customGroup.cdGroupSequence} />
                                                    <div className="form-group">
                                                        <label className="col-form-label" for={`cdGroupImage${customGroup.cdGroupId}`}> Image URL</label>
                                                        <input className="form-control" type="text" id={`cdGroupImage${customGroup.cdGroupId}`} name={`cdGroupImage${customGroup.cdGroupId}`} value={formFieldEntities[`cdGroupImage${customGroup.cdGroupId}`]} onChange={ this.handleChange }/>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex align-items-center justify-content-end">
                                                                <button className="btn btn-primary mr-1">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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