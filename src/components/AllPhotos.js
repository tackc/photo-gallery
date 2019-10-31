import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Photo from './OnePhoto';
import arrayMove from 'array-move';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { photos } from './photos';

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
    <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

function AllPhotos() {
    const [items, setItems] = useState(photos)

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex))
    }

    return(
        <div>
            <h3>Drag photos to rearrange</h3>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
    )
}

export default AllPhotos;