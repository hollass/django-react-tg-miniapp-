import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React, {useEffect, useState} from 'react';

import {Button, Image} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Swiper from "../Components/swiper";

export default function Specialties() {
    const special = [
        {
            name: "Терапевт", id: 1, score: 2, doctors: [
                {
                    name: "Терапевт 1",
                    id: 1,
                    img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Терапевт 2", id: 2, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Терапевт 3", id: 4, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Терапевт 3", id: 5, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Терапевт 3", id: 6, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Терапевт 3", id: 7, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Терапевт 3", id: 8, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
            ]
        },
        {
            name: "Педиатр", id: 2, score: 5, doctors: [
                {
                    name: "Педиатр 1", id: 9, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Педиатр 2", id: 10, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Педиатр 3", id: 11, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                }
            ]
        },
        {
            name: "Хирург", id: 3, score: 8, doctors: [
                {
                    name: "Хирург 1", id: 12, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Хирург 2", id: 13, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Хирург 3", id: 14, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                }
            ]
        },
        {
            name: "Уролог", id: 4, score: 22, doctors: [
                {
                    name: "Уролог 1", id: 15, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Уролог 2", id: 16, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Уролог 3", id: 17, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                }
            ]
        },
        {
            name: "Офтальмолог", id: 5, score: 1, doctors: [
                {
                    name: "Офтальмолог 1", id: 18, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Офтальмолог 2", id: 19, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Офтальмолог 3", id: 20, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
            ]
        },
        {
            name: "Стоматолог", id: 6, score: 33, doctors: [
                {
                    name: "Стоматолог 1", id: 21, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Стоматолог 2", id: 22, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
                {
                    name: "Стоматолог 3", id: 23, img: 'https://via.placeholder.com/150',
                    about: "Врач, Профессор"
                },
            ]
        },
    ]
    const [itemid, setItem] = useState(1)
    const [allItems, setAll] = useState([])


    useEffect(() => {
        updateItems()
    }, [])

    function updateItems(id = 1) {
        const all = special.filter((item) => item.id === id)[0]
        setItem(id)
        setAll(all.doctors)

    }

    return (
        <div className={'spec-page'}>
            <h1>Специализации врачей</h1>

            <div className={'spec-page-list'}>
                <Swiper score={2} center={true}>
                    {special.map((item) => (
                        <Button type={'submit'}
                                className={'spec-page-item text-decoration-none '}
                                key={item.id}
                                variant={'link'}
                                value={itemid}
                                onClick={() => updateItems(item.id)}>
                            <p>{item.name} </p>
                            <h6> {item.score}</h6>
                        </Button>
                    ))}
                </Swiper>
            </div>
            <div className={'spec-page-doctors'}>
                <h4>Лучшие врачи в специализации</h4>
                <Swiper score={2} center={true}>
                    {allItems.slice(0, 5).map((doctor) => (
                        <div className={'spec-page-doctor'}>
                            <Image width={'150'} src={doctor.img}/>
                            <p>{doctor.name}</p>
                        </div>
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