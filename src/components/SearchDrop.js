import React, { useState } from 'react';
import axios from 'axios';

const SearchDrop = ({ onSearch }) => {
    const [searchWord, setSearchWord] = useState('');
    const [categories, setCategories] = useState('mountain');

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=23b276c6b9015f4c0183c281976aebd1&tags=${categories}&text=${searchWord}&per_page=20&format=json&nojsoncallback=1`
            );

            onSearch(response.data.photos.photo);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    return (
        <div className="searchinput">
            <input
                type="text"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                placeholder="Search by keywords..."
            />
            <select
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
            >
                <option value="mountain">Mountain</option>
                <option value="beach">Beach</option>
                <option value="birds">Birds</option>
                <option value="food">Food</option>
            </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchDrop;
