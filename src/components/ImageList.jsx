import React from 'react'
import ListItem from "./ListItem"

const ImageList = (props) => {

    const { images } = props;
    if (images === undefined) {
        return (
        <div className="ui relaxed divided selection list">
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
        );
    }
    const rows = images.map(img => {
        return (
        <ListItem key={img.id} img={img} />
        )
    })

    return (
        <div className="ui relaxed divided selection list">
            {rows}
        </div>
    );
}

export default ImageList
