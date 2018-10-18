import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {searchTask} from '../../actions/searchTask';


export class Search extends React.Component{
    constructor() {
        super()
        this.state = {
            strSearch: ""
        }
    }

    handleChange(event) {
        this.setState({
            strSearch: event.target.value
        });
    }

    handleClickGo() {
        console.log( this.props.searchTask)
        this.props.searchTask(this.state.strSearch)
    }

    handleClickCancel() {
        this.setState({
            strSearch: ""
        });
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input
                        value={this.state.strSearch}
                        onChange={this.handleChange.bind(this)}
                        type="text" className="form-control"
                        placeholder="Seach for..."
                    />
                    <span className="input-group-btn">
                    <button onClick={this.handleClickGo.bind(this)} className="btn btn-info" type="button">Go</button>
                    <button onClick={this.handleClickCancel.bind(this)} className="btn btn-warning" type="button">Clear</button>
                </span>
                </div>
            </div>

        );
    }
}

//chuyen du lieu tu action thanh props
const mapDispatchToProps = dispatch=> {
    return bindActionCreators({searchTask: searchTask}, dispatch)
}

//chuyen du lieu kieu props vao class TrItem de render
let TaskContainer = connect(mapDispatchToProps)(Search);
