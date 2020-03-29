import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { withRouter } from "react-router-dom";

export class Datatable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            myData: this.props.myData
        }
    }

    componentDidUpdate(prevProps) {
        //Force update my data when the parent state got updated
        if (prevProps.myData !== this.props.myData) {
            this.setState({ myData: this.props.myData });
        }
    }

    selectRow = (e, i) => {
        if (!e.target.checked) {
            this.setState({
                checkedValues: this.state.checkedValues.filter((item, j) => i !== item)
            });
        } else {
            this.state.checkedValues.push(i);
            this.setState({
                checkedValues: this.state.checkedValues
            })
        }
    }

    handleRemoveRow = () => {
        const selectedValues = this.state.checkedValues;
        const updatedData = this.state.myData.filter(function (el) {
            return selectedValues.indexOf(el.id) < 0;
        });
        this.setState({
            myData: updatedData
        })
        toast.success("Successfully Deleted !")
    };

    renderEditable = (cellInfo) => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.myData];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ myData: data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.myData[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    redirectToChild = (row) => {
        // save current selected row data to browser local storage
        localStorage.setItem("requestParam", JSON.stringify(row));
        this.props.history.push(this.props.childUrl) //use here
        // window.location.href = this.props.childUrl;
        // console.log(this.props)
    }

    editTrigger = (row) => {
        localStorage.setItem("editParam", JSON.stringify(row));
        this.props.onEditClicked();
    }

    deleteTrigger = (row) => {
        localStorage.setItem("deleteParam", JSON.stringify(row));
        this.props.onDeleteTriggered();
    }

    render() {
        const { pageSize, myClass, multiSelectOption, pagination, columnsToShow, excludeDelete, excludeEdit } = this.props;
        const { myData } = this.state;

        let dataToRender = [];
        // console.log(columnsToShow, myData);
        if (columnsToShow && columnsToShow.length > 0) {
            myData.forEach((thisData) => {
                let tempData = {}
                columnsToShow.forEach((thisColumn) => {
                    tempData[thisColumn] = thisData[thisColumn];
                });
                dataToRender.push(tempData);
            });
        }
        else {
            dataToRender = myData;
        }

        const columns = [];
        for (var key in dataToRender[0]) {

            let editable = this.renderEditable
            if (key === "image") {
                editable = null;
            }
            if (key === "status") {
                editable = null;
            }
            if (key === "avtar") {
                editable = null;
            }
            if (key === "vendor") {
                editable = null;
            }
            if (key === "skill") {
                editable = null;
            }
            if (key === "user") {
                editable = null;
            }

            columns.push(
                {
                    Header: <b>{this.Capitalize(key.toString())}</b>,
                    accessor: key,
                    Cell: editable,
                    style: {
                        textAlign: 'center'
                    }
                });
        }

        if (multiSelectOption === true) {
            columns.push(
                {
                    Header: <button className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
                        onClick={
                            (e) => {
                                if (window.confirm('Are you sure you wish to delete this item?'))
                                    this.handleRemoveRow()
                            }}>Delete</button>,
                    id: 'delete',
                    accessor: str => "delete",
                    sortable: false,
                    style: {
                        textAlign: 'center'
                    },
                    Cell: (row) => (
                        <div>
                            <span >
                                <input type="checkbox" name={row.original.id} defaultChecked={this.state.checkedValues.includes(row.original.id)}
                                    onChange={e => this.selectRow(e, row.original.id)} />
                            </span>
                        </div>
                    ),
                    accessor: key,
                    style: {
                        textAlign: 'center'
                    }
                }
            )
        } else {
            columns.push(
                {
                    Header: <b>Action</b>,
                    id: 'delete',
                    accessor: str => "delete",
                    Cell: (row) => (
                        <div>
                            {!excludeDelete ? <span onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this item?')) {
                                    // let data = myData;
                                    // data.splice(row.index, 1);
                                    // this.setState({ myData: data });
                                    this.deleteTrigger(row.original);
                                }
                                // toast.success("Successfully Deleted !")

                            }}>
                                <i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}
                                ></i>
                            </span> : ""}

                            {/* edit data */}
                            {!excludeEdit ? <span onClick={() => { this.editTrigger(row.original) }}>
                                <i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i>
                            </span> : ""}
                            
                            {/* redirect to child */}
                            <span onClick={() => { this.redirectToChild(row.original) }}>
                                <i className="fa fa-share" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i>
                            </span>
                        </div>
                    ),
                    style: {
                        textAlign: 'center'
                    },
                    sortable: false
                }
            )
        }

        return (
            <Fragment>
                <ReactTable
                    data={myData}
                    columns={columns}
                    pageSize={pageSize}
                    className={myClass}
                    showPagination={pagination}
                />
            </Fragment>
        )
    }
}

export default withRouter(Datatable);