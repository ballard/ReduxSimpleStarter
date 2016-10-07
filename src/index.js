/**
 * Created by ivanlazarev on 06.10.16.
 */
// create a new component producing some html
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAInLlLqW1mFGCLlt3olT3ar3Rwi97b0-Y';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

//put generated html on page


ReactDOM.render(<App />, document.querySelector('.container'));