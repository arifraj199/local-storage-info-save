import React, { useEffect, useState } from 'react';
import { addToDb, removeToDb } from '../fakedb/fakeDb';
import Info from '../Info/Info';

const Shoes = () => {
    const [infoes,setInfoes] = useState([]);

    useEffect( ()=>{
        fetch('rest-countries.json')
        .then(res=>res.json())
        .then(data=>setInfoes(data));
    },[])

    const handleId = (id) => {
        // console.log('item id',id);
        addToDb(id);
    }

    const removeId = id => {
        removeToDb(id);
    }

    return (
        <div>
            {
              infoes.map(info=><Info
              key={info.id}
              info={info}
              handleId={handleId}
              removeId={removeId}
              ></Info>)
            }
        </div>
    );
};

export default Shoes;