import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React, {useEffect, useState} from 'react';

import {Image, Row} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";
import {request} from "../Components/api";

export default function Add_zapisi() {
    const [doctor, setDoctor] = useState([]);

    const specialty = () => {
        request('view_cats/', "POST").then(result => setDoctor(result));
    }

    useEffect(() => {
        specialty()
    }, [])


    return (
        <div className={'chats_page'} style={{margin: '1em'}}>
            <h1>Специализации</h1>

            <hr/>
            <div className={'chats_list'}>
                <Row>
                    {doctor.map(item => (
                        <Link to={`/spec/${item.id}`}
                              key={item.id}>
                            <div className={'chat_item'}
                                 style={{
                                     display: 'flex',
                                     marginBottom: '1em'
                                 }}>
                                <Image
                                    src={item.img ? item.img : 'https://ratakan.com/uploads/images/profiles/no-person.jpg'}
                                    alt={item.name}
                                    className={'chat_item_img'}
                                    style={{
                                        borderRadius: "50%",
                                        width: '20%',
                                        marginRight: '1em',
                                        objectFit: 'cover'
                                    }}/>
                                <div className={'chat_item_info'}
                                     style={{
                                         color: 'black',
                                         marginBottom: 'auto',
                                         marginTop: 'auto'
                                     }}>
                                    <h4>{item.name.length > 11 ? item.name.substring(0, 11) + '..' : item.name}</h4>
                                    {item.active === true ? <p>Запись доступна</p> :
                                        <p style={{color: 'darkred'}}>Вы уже записались</p>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Row>
            </div>


        </div>
    )
}
