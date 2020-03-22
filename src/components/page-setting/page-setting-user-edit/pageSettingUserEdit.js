import React, { Fragment, Component } from 'react';

import { withRouter } from "react-router-dom";

class PageSettingUserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            //Form
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
        // fetch("/segosarem-backend/getPageSettingByKey", {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         pageKey: pageKey
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // }).then(res => res.json())
        //     .then((result) => {
        //         if (result.returnCode == "000000") {
        //             try {
        let result = {
            "responseObject": {
                "settingId": 5,
                "pageTitle": "Welcome to Segosarem Cakboyo",
                "pageSeoKeywords": "segosarem, cakboyo, ayam, pedas, nikmat",
                "pageKey": "page.homepage",
                "customDataGroupList": [
                    {
                        "cdGroupId": 2,
                        "cdGroupName": "Outlet",
                        "cdGroupDescription": "List Outlet di halaman homepage",
                        "pageSettingId": 0,
                        "customDataList": [
                            {
                                "cdId": 4,
                                "cdValuePair": null,
                                "cdName": "Contoh Name",
                                "cdType": 1,
                                "cdSequence": "3",
                                "cdKey": "Contoh Key",
                                "cdGroupId": null,
                                "cdSettingList": [

                                ]
                            },
                            {
                                "cdId": 2,
                                "cdValuePair": [
                                    {
                                        "description": {
                                            "fieldType": 1,
                                            "value": "This is the description for the outlet section on homepage."
                                        }
                                    }
                                ],
                                "cdName": "Outlet Section Description",
                                "cdType": 1,
                                "cdSequence": "1",
                                "cdKey": "homepage.outlet.description",
                                "cdGroupId": null,
                                "cdSettingList": [
                                    {
                                        "cdsId": 4,
                                        "cdsName": "Description Text(Max 255)",
                                        "cdsKey": "description",
                                        "cdsType": 1,
                                        "cdsSequence": "1",
                                        "cdId": null
                                    }
                                ]
                            },
                            {
                                "cdId": 3,
                                "cdValuePair": [
                                    {
                                        "outlet.description": {
                                            "fieldType": 1,
                                            "value": "Segosarem Cabang Kresek Raya adalah cabang pertama segosarem cak boyo."
                                        },
                                        "outlet.name": {
                                            "fieldType": 1,
                                            "value": "Segosarem Cabang Kresek Raya"
                                        },
                                        "outlet.trending": {
                                            "fieldType": 2,
                                            "value": "true"
                                        }
                                    }
                                ],
                                "cdName": "Outlet Section Carousel",
                                "cdType": 3,
                                "cdSequence": "2",
                                "cdKey": "homepage.outlet.carousel",
                                "cdGroupId": null,
                                "cdSettingList": [
                                    {
                                        "cdsId": 6,
                                        "cdsName": "Outlet Name",
                                        "cdsKey": "outlet.name",
                                        "cdsType": 1,
                                        "cdsSequence": "2",
                                        "cdId": null
                                    },
                                    {
                                        "cdsId": 7,
                                        "cdsName": "Is Outlet a Trending Outlet?",
                                        "cdsKey": "outlet.trending",
                                        "cdsType": 2,
                                        "cdsSequence": "3",
                                        "cdId": null
                                    },
                                    {
                                        "cdsId": 8,
                                        "cdsName": "Outlet Description",
                                        "cdsKey": "outlet.description",
                                        "cdsType": 1,
                                        "cdsSequence": "4",
                                        "cdId": null
                                    },
                                    {
                                        "cdsId": 5,
                                        "cdsName": "Outlet Picture",
                                        "cdsKey": "outlet.picture",
                                        "cdsType": 1,
                                        "cdsSequence": "1",
                                        "cdId": null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "cdGroupId": 1,
                        "cdGroupName": "Menu",
                        "cdGroupDescription": "List menu di halaman homepage",
                        "pageSettingId": 0,
                        "customDataList": [
                            {
                                "cdId": 1,
                                "cdValuePair": null,
                                "cdName": "Homepage Menu",
                                "cdType": 3,
                                "cdSequence": "1",
                                "cdKey": "field.menu",
                                "cdGroupId": null,
                                "cdSettingList": [
                                    {
                                        "cdsId": 3,
                                        "cdsName": "Trending menu",
                                        "cdsKey": null,
                                        "cdsType": 2,
                                        "cdsSequence": "3",
                                        "cdId": null
                                    },
                                    {
                                        "cdsId": 2,
                                        "cdsName": "Menu Name",
                                        "cdsKey": null,
                                        "cdsType": 1,
                                        "cdsSequence": "2",
                                        "cdId": null
                                    },
                                    {
                                        "cdsId": 1,
                                        "cdsName": "Menu Picture",
                                        "cdsKey": null,
                                        "cdsType": 1,
                                        "cdsSequence": "1",
                                        "cdId": null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
        this.setState({
            data: result.responseObject.customDataGroupList
        });
        //             }
        //             catch (e) {
        //                 console.log(e);
        //             }
        //             // console.log(result.responseObject);
        //         }
        //     });

    }

    renderInputFieldBasedOnType(fieldSetting, value) {
        switch(fieldSetting.cdsType) {
            //Text field
            case 1:
                return (
                    <div className="form-group">
                        Type 1
                        <label className="col-form-label" htmlFor={fieldSetting.cdsKey}>{fieldSetting.cdsName}</label>
                        <input className="form-control" type="text" id={fieldSetting.cdsKey} name={fieldSetting.cdsKey} />
                    </div>
                );
            //Boolean
            //Blob
            //Textarea
            default:
                return (
                    <span>Error when rendering custom data field</span>
                );
        }
    }

    renderInputSectionBasedOnType(customData) {
        if (customData.cdSettingList && customData.cdSettingList.length > 0) {
            switch (customData.cdType) {
                //Single Data
                case 1:
                    let fieldSetting = customData.cdSettingList[0],
                        fieldValue = "";
                    if(customData.cdValuePair && customData.cdValuePair.length > 0) {
                        fieldValue = customData.cdValuePair[0];
                    }
                    return this.renderInputFieldBasedOnType(fieldSetting, fieldValue);
                //2 - Array
                case 2:
                    return (
                        <div className="form-group">
                            Type 2
                        </div>
                    );
                //3 - Multifield
                case 3:
                    return (
                        <div className="form-group">
                            Type 3
                        </div>
                    );
                default:
                    return (
                        <span>Error when rendering custom data section</span>
                    );
            }
        }
        else {
            return (
                <span>Custom Data Setting is not yet set for custom data with key "{customData.cdKey}"</span>
            );
        }
    }

    render() {
        const { data } = this.state;

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
                        return (
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{customGroup.cdGroupName}</h5>
                                        <span>{customGroup.cdGroupDescription}</span>
                                    </div>
                                    <div className="card-body datatable-react">
                                        <div className="row">
                                            <div className="col-12">
                                                <form id={formName} name={formName}>
                                                    {(customGroup.customDataList && customGroup.customDataList.length > 0) ?
                                                        <Fragment>
                                                            {customGroup.customDataList.map(customData => {
                                                                return this.renderInputSectionBasedOnType(customData);
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
                </Fragment>
            );
        }
    }
};

export default withRouter(PageSettingUserEdit);