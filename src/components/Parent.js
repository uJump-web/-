import React, { Component } from 'react';
import First from './First';
import GlobalContext from '../untils/MyContext'
// 定义安装提供者和消费者

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "我是祖宗",
            age: 16
        }
    }
    render() {
        return (
            <div>
                <GlobalContext.Provider value={this.state} > 
                    <First />
                </GlobalContext.Provider>
            </div>
        );
    }
}

export default Parent;