import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ItemRoute } from '../API/URLS';
import AssetContainer from '../components/AssetContainer';

const AdminProducts = () =>{
    const [option,setOption] = useState('select');
    const [data,setData] = useState([]);
    const FetchAssets = () =>{
        axios.get(`${ItemRoute}/${option}`).then(resp=>{
            // console.log(resp);
            setData(resp.data.result);
        })
    };
    useEffect(()=>{
        if(option!=='select'){
            FetchAssets();
        }
    },[option]);
    return(
        <div className="col-12">
            <select value={option} onChange={e=>{
                setOption(e.target.value);
            }}>
                <option value="select">select</option>
                <option value="ricemill">Rice Mill Sheds</option>
                <option value="functionhall">Function Hall Sheds</option>
                <option value="container">Container Houses</option>
                <option value="msconstruction">MS Construction Buildings</option>
            </select>
            <div className="row">
                <div className="col-12">
                    {
                        data ? data.map(dta=>{
                            return <AssetContainer image={dta.img} content={dta} key={dta._id} FetchAssets={FetchAssets}/>
                        }) : ''
                    }
                    {
                        data.length === 0 && <h2>No Items Found !</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;