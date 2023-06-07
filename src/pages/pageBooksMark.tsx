import React from 'react';
import './settings.css';

const BooksMarkPage = () => {

    return (
        <div>
            <div className='title'>
                <h1>Bookmarks</h1>
            </div>
            <div className="content">
                <div className="categoriesFilter">
                    <label htmlFor="categories">Select category: </label>
                    <select id="categories">
                        <option value="all">All</option>
                        <option value="">General</option>
                    </select>
                    <button>Manage categories</button>
                    <button className="exportButton">Export</button>
                    <button className="importButton">Import</button>
                </div>
                <div className="bookmarkHeader">
                    <div className="name">Name</div>
                    <div className="volume">Volume</div>
                    <div className="price">Price</div>
                    <div className="action">&nbsp;</div>
                </div>
                <div className="bookmarkBody">
                    <h3>List is empty</h3>
                </div>
            </div>
            <input type="file" accept=".json" className="importInput" />
        </div>
    );
};

export default BooksMarkPage;