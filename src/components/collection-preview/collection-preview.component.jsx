import React from 'react';
import './collection-preview.style.scss'
import CollectionItem from "../collection-item/collection-item.component";

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                shuffleArray(items).filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>

                ))
            }
        </div>
    </div>
);

export default CollectionPreview;