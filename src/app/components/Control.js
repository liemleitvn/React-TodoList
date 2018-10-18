import React from "react"

import {Search} from './Controls/Search'
import {Sort} from './Controls/Sort'
import {Add} from './Controls/Add'

export class Control extends React.Component{

    onHandleClickTaskAdd() {
        this.props.onClickTaskAdd();
    }

    render() {

        return (
            <div className="row">

                {/*Search start*/}
                <Search/>
                {/*End search*/}

                {/*Sort start*/}
                <Sort/>
                {/*End Sort*/}

                {/*Add start*/}
                <Add onClickTaskAdd = {this.onHandleClickTaskAdd.bind(this)}/>
                {/*End add*/}

            </div>
        );
    }
}