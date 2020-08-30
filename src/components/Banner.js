import React, { Component } from 'react';
import BannerSub from './BannerSub';
import '../styles/Banner.css';
import emitter from '../untils/Myevent';

class Banner extends Component {
    constructor(props){
        super(props);
        this.chidl = null;
        this.state={
            msg:''
        }

    }
    textRef = (ref)=>{
        this.child = ref;
        //将子组件直接传给child属性
        console.log(this.child.state);
    }
    fn = (str)=>{
        this.setState({
            msg:str
        });
    }
    componentDidMount(){
        emitter.on("Mychange",(str)=>{
            fn(str);
        });
    }

    render() {
        return (
            <div>
                <h1>我是bannner</h1>
                <p>{this.state.msg}</p>
                <BannerSub name="我是来自父组件的值" onRef = {this.textRef}/>
                {/* <BannerSub name="我是来自父组件的值" /> */}
            </div>
        );
    }
}

export default Banner;