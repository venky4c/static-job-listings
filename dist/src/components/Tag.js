import React from 'react';

const Tag = (props) => (
    <div>
        <span class="tag is-primary is-medium">
            {props.name}
            <button class="delete is-small" onClick={() => {}}></button> 
        </span>
    </div>
)

export default Tag;