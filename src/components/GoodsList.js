import React, { Component } from 'react';
import '../styles/GoodsList.css';
import List from './List';
class Banner extends Component {
    constructor(props){
        super(props);
        this.state={
            dataList:[
                {
                    id:"01001",
                    name:"铅笔",
                    price:1.5
                },
                {
                    id:"01002",
                    name:"钢笔",
                    price:55
                },
                {
                    id:"01003",
                    name:"毛笔",
                    price:35
                }
            ]
        }

    }

    show(){
        return(
            this.state.dataList.map((val,index)=>(
                <List {...val} key={index} />
            ))
        )
    }

    render() {
        return (
            <div>
                <div className="list-box">
                    <h4>商品列表</h4>
                    <ul>{this.show()}</ul>
                </div>
            </div>
        );
    }
}

export default Banner;