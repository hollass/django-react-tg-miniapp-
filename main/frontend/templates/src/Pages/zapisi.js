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
            <div className={'zapisi-list'}>
                <Row>
                    {items.map(item => (
                        <div key={item.id} className={'zapisi-item'}>
                            <div className={'zapisi-about'}>
                                <Image src={item.img}
                                       alt="doctor"
                                       className={'zapisi-img'}/>
                                <div className={'zapisi-name'}>
                                    <h2>{item.name_doctor}</h2>
                                    <h5>{item.prod}</h5>
                                </div>

                            </div>
                            <hr/>
                            <h3 style={{
                                marginBottom: '1em',
                                marginTop: '0.5em',
                            }}>Дата записи</h3>
                            <div className={'zapisi-date'}>
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                            </div>
                        </div>
                    ))}

                </Row>
            </div>

        </div>
    )
}