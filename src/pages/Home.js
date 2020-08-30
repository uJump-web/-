import React, { Component } from 'react';
import Search from '../components/Search';
import Banner from '../components/Banner';
import GoodsList from '../components/GoodsList';
import Parent from '../components/Parent';

class Home extends Component {
    render() {
        return (
            <div>
                <Search/>
                <Banner />
                <GoodsList />   
                <Parent/>
            </div>
        );
    }
}

export default Home;