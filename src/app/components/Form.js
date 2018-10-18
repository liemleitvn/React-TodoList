import React from "react"

export default class Form extends React.Component{

    constructor() {
        super();
        this.state = {
            task: "",
            level: 0
        }
    }

    onHandleChangeTask(e) {
        this.setState({
           task: e.target.value
        });
    }

    onHandleChangeLevel(e){
        this.setState({
            level: e.target.value
        });
    }

    onClickCancel() {

    }

    onClickSubmit() {

    }

    shouldComponentUpdate() {
        if(this.state.task ==="") {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action = "" method="post" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="add">label</label>
                            <input
                                onChange={(event)=>this.onHandleChangeTask(event)}
                                style={{width: 190}}
                                id="add"
                                type="text"
                                className="form-control"
                                placeholder="Task Name"
                            />
                        </div>
                        <div id="level" className="form-group">
                            <label className="sr-only" htmlFor="inputDs">label</label>
                            <select onChange={(event)=>this.onHandleChangeLevel(event)} name="ds" id="inputDs" className="form-control" required>
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}