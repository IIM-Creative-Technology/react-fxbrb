import React, { Component } from 'react';

import List from './List.jsx';
import data from '../data.json';

class Room extends Component {
    filterData() {
        data.filter();
    }

    render() {
        return (
            <div className="Room">
                <header className="App-header">
                    <List list={data} />
                </header>
            </div>
        );
    }
}

export default Room;