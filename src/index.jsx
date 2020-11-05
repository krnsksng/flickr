import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import ImageDetail from "./components/ImageDetail"

import {executeSearchService} from "./services/flickr";


const App = () => {

    const [data, setData] = useState ([]);
    const [selectedImage, setSelectedImage] = useState ({});
    const loaded = useRef(false);

    useEffect(() => {

        const fetchData = async () =>
        {
            const {data: dataApi} = await executeSearchService("dog")
            setData(dataApi?.photos?.photo);
            setSelectedImage(dataApi?.photos?.photo[0]);
            loaded.current = true;
        }

        fetchData();

    }, [loaded])

    const setCurrentImage = async (img) => {

    };

    const searchImage = async (searchText) => {

    };

    return (
        <>
        <div className="ui grid">
            <div className="row">
                <div className="wide column">
                    <SearchBar />
                </div>
            </div>
            <div className="row">
                <div className="nine wide column">
                    <center>
                        <ImageDetail img={selectedImage}/>
                    </center>
                </div>
                <div className="seven wide column">
                    <ImageList images={data} />
                </div>
            </div>
        </div>
        </>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));