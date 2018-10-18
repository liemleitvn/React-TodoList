import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {selectTask}  from '../../actions/clickTask'

class TrItem extends React.Component{

    setLevel(level) {

        let elmLevel = <span className="label label-default">Small</span>

        if(level === 1) {
            elmLevel = <span className="label label-warning">Medium</span>;
        } else if(level === 2) {
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }

    handleClickDetail(item) {
        this.props.selectTask(item)
    }

    createTask() {

        let listTask = this.props.tasks.map((item, index) => {
            return (
                <tr key={index} >
                    <td className="text-center">{index + 1}</td>
                    <td>{item.task}</td>
                    <td className="text-center">{this.setLevel(item.level)}</td>
                    <td>
                        <button type="button" className="btn btn-info" onClick={()=>this.handleClickDetail(item)}>Detail</button>
                        <button type="button" className="btn btn-warning"> Edit </button>
                        <button type="button" className="btn btn-danger"> Delete </button>
                    </td>
                </tr>
            );
        });
        return listTask;
    }

    render() {
        return (this.createTask())
    }

}
//chuyen du lieu tu action thanh props
const mapDispatchToProps = dispatch=> {
    return bindActionCreators({selectTask: selectTask}, dispatch)
}

//mapStateToProps tra ve du lieu trong reducer va chuyen du lieu tu state thanh props
const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

//chuyen du lieu kieu props vao class TrItem de render
let TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TrItem);

export default TaskContainer;