import React, { Component } from 'react';
import SearchSub from './SearchSub';
import emitter from '../untils/Myevent';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:"默认值"
        }
    }
    changeFn = (msg)=>{
        this.setState({
            msg:msg
        })
    }
    fn(){
        emitter.emit("Mychange","我是来自search组件的值");
    }
    render() {
        return (
            <div>
                <h4>我是search的父组件</h4>
                <p>{this.state.msg}</p>
                <button onClick = {()=>this.fn()}>使用eventEmitter传值</button>
                <SearchSub name="我是来自父组件的值" onMyClick = {this.changeFn} />
            </div>
        );
    }
}

export default Search;