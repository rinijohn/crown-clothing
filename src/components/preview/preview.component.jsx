import React from 'react';
import PreviewItem from '../preview-item/preview-item-component'

import './preview.styles.scss';

const PreviewCollection = ({title, items}) => {
    return (
        <div className="preview-collection">
            <h1 className="title">{title.toUpperCase()}</h1>
                <div className="preview-items">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <PreviewItem key={item.id} item={item}/>
                    ))
                }
                </div>
        </div>
    )
}

export default PreviewCollection;