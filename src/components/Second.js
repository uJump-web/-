import React, { Component } from 'react';
import GlobalContext from '../untils/MyContext';

class Second extends Component {
    render() {
        return (
            <div>
                <GlobalContext.Consumer>
                    我是第二个组件<hr/>
                    {
                        (val)=> <div>名字：{val.name}，年龄：{val.age}</div>
                    }
                </GlobalContext.Consumer>
            </div>
        );
    }
}

export default Second;