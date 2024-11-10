import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React, {useEffect, useState} from 'react';

import {Button, Image} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Swiper from "../Components/swiper";
import {request} from "../Components/api";
import {Link} from "react-router-dom";

export default function Specialties() {
    const [allItems, setAll] = useState([])
    const [cat, setCat] = useState([])
    const [itemid, setItem] = useState()

    const cats = () => {
        request('view_cats/', "POST").then(result => {
            setCat(result)
            setItem(result[0].id)
            updateItems(result[0].id)
        });
    }
    const specialty = (id) => {
        request('view_spec/', "POST", {id: id}).then(result => setAll(result));
    }

    useEffect(() => {
        cats()

    }, [])


    function updateItems(id) {
        setItem(id)
        specialty(id)
    }

    return (
        <div className={'spec-page'}>
            <h1>Специализации врачей</h1>

            <div className={'spec-page-list'}>
                <Swiper score={2} center={true}>
                    {cat.map((item) => (
                        <Button type={'submit'}
                                className={'spec-page-item text-decoration-none '}
                                key={item.id}
                                variant={'link'}
                                value={itemid}
                                onClick={() => updateItems(item.id)}>
                            <h6>{item.name} </h6>
                            <p> {item.num}</p>
                        </Button>
                    ))}
                </Swiper>
            </div>
            <div className={'spec-page-doctors'}>
                <h4>Лучшие врачи в специализации</h4>
                <Swiper score={2} center={true}>
                    {allItems.slice(0, 5).map((doctor) => (
                        <Link to={`/service/all/doctor/${doctor.id}/`}
                              className={'spec-page-doctor text-decoration-none'}>
                            <Image src={doctor.img}/>
                            <h6>{doctor.name}</h6>
                        </Link>
                    ))}
                </Swiper>
            </div>
            <div className={'spec-page-doctors-list'}>
                <h4>Наши врачи</h4>
                {allItems.map((doctor) => (
                    <div className={'spec-page-doctors-list-item'}>
                        <Image width={'80'} src={doctor.img}/>
                        <div className={'name-doctor'}>
                            <h4>{doctor.name}</h4>
                            <p>{doctor.about}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}