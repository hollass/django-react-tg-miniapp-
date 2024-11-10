import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React, {useEffect, useState} from 'react';

import {Image, Row} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import {Link, useParams} from "react-router-dom";
import {request} from "../Components/api";

export default function List_doctors() {
    const params = useParams();
    const doctorId = params.id;
    const [item, setItem] = useState([])
    useEffect(() => {
        specialty()
    }, [])
    const specialty = () => {
        request('view_docs/', "POST",{id: doctorId}).then(result => setItem(result));
    }
    return (
        <div className={'chats_page'} style={{margin: '1em'}}>
            <h1>Врачи</h1>
            <hr/>
            <div className={'chats_list'}>
                <Row>
                    {item.map(item => (
                        <Link to={`/service/${doctorId}/doctor/${item.id}/`}
                        >
                            <div className={'chat_item'}
                                 style={{
                                     display: 'flex',
                                     padding: '1em',
                                 }}>
                                <Image src={item.img}
                                       alt={item.name}
                                       className={'chat_item_img'}
                                       style={{
                                           width: '30%',
                                           marginRight: '1em',
                                           borderRadius: '15px'
                                       }}/>
                                <div className={'chat_item_info'}>
                                    <h4>{item.name}</h4>
                                    {/*<p style={{marginBottom: 0}}>{item.about}</p>*/}
                                    <p>Стаж работы: <h6>{item.score}</h6></p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Row>
            </div>


        </div>
    )
}

export function List_product() {
    const params = useParams();
    const catId = params.id;
    const [item, setItem] = useState([])
    useEffect(() => {
        specialty()
    }, [])
    const specialty = () => {
        request('view_prods/',"POST", {id: catId}).then(result => setItem(result));
    }

    return (
        <div className={'chats_page'}>
            <h1>Услуги</h1>
            <hr/>
            <div className={'chats_list'}>
                <Row>
                    {item.map(item => (
                        <Link to={`/service/${item.id}`}
                        >
                            <div className={'chat_item'}
                                 style={{
                                     display: 'flex',
                                     padding: '1em',
                                 }}>

                                <div className={'chat_item_info'}>
                                    <h3>{item.name}</h3>
                                </div>
                                <hr/>
                            </div>
                        </Link>
                    ))}
                </Row>
            </div>


        </div>
    )
}

