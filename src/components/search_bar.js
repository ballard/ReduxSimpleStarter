/**
 * Created by ivanlazarev on 07.10.16.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }

}

export default SearchBar;