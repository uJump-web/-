import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:"我是子组件的值"
        }
    }

    setFn(){
        this.props.onMyClick(this.state.msg);
    }
    render() {
        return (
            <div>
                <p>我是search的子组件</p>
                <button onClick={()=>this.setFn()} > 传值 </button>
            </div>
        );
    }
}

export default Search;