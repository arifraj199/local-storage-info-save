import React from 'react';
import './Info.css'

const Info = (props) => {
    const {name,age,id} = props.info;
    return (
        <div className='info'>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <p>Id: {id}</p>
            <button onClick={() => props.handleId(id)}>Add Id</button>
            <button onClick={() => props.removeId(id)}>Remove</button>
        </div>
    );
};

export default Info;