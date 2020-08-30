import React, { Component } from 'react';
class BannerSub extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:'banner子组件的值'
        }
    }
    // 组件渲染完毕之后
    componentDidMount(){
        this.props.onRef(this);
    }
    render() {
        return (
            <div>
                <p>{this.state.msg}</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default BannerSub;