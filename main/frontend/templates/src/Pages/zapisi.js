import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React, {useEffect, useState} from 'react';

import {Image, Row} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import {request} from "../Components/api";

export default function Zapisi() {
    useEffect(() => {
        addsh()
    }, [])

    const addsh = () => {
        request('view_records/', "POST", {id: 1})
            .then(result =>setitems(result))
            .catch(error => console.error('Error fetching data:', error));
    }
    const [items, setitems] = useState([]);


    return (
        <div className={'zapisi-page'}>
            <h1>Записи к врачам</h1>
            <hr/>
            <div className={'zapisi-list'}>
                <Row>
                    {items.map(item => (
                        <div key={item.id} className={'zapisi-item'}>
                            <div className={'zapisi-about'}>
                                <Image src={item.img}
                                       alt="doctor"
                                       className={'zapisi-img'}/>
                                <div className={'zapisi-name'}>
                                    <h3>{item.name_doctor}</h3>
                                    <hr/>
                                    <p>{item.prod}</p>
                                </div>

                            </div>
                            <p style={{
                                margin: '0.5em',
                            }}>Дата записи</p>
                            <div className={'zapisi-date'}>
                                <h5>{item.date}</h5>
                                <h5>{item.time}</h5>
                            </div>
                        </div>
                    ))}

                </Row>
            </div>

        </div>
    )
}