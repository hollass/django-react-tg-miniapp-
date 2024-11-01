import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React, {useEffect, useState} from 'react';

import {
    Button,
    Image,
    Dropdown,
    Modal
} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Swiper from "../Components/swiper";
import {useParams} from "react-router-dom";
import {request} from "../Components/api";

export default function View_doctor() {
    const params = useParams();
    const doctorId = params.parent;
    const prod = params.id;

    const [itemid, setItem] = useState({})
    const [selectedtime, setSelectedtime] = useState(null);
    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = () => {
        setShowModal(true);
        add_record();
        setTimeout(() => {
            window.location.href = '/'; // перенаправление на главную страницу
        }, 2000); // задержка перед перенаправлением
    };
    const handleBlockTime = (blockId) => {
        setSelectedtime(blockId);
    };

    useEffect(() => {
        whatDoctor()
        addsh()
    }, [])

    const whatDoctor = () => {
        if (prod === 'all') {
            specialty(prod)
            addsh()
        } else {
            specialty(prod)
        }
    }


    const addsh = () => {
        request('view_sched/',"POST", {id: doctorId})
            .then(result => setData(result))
            .catch(error => console.error('Error fetching data:', error));
    }


    const specialty = (type) => {
        request('view_cat/',"POST", {id: doctorId, product: type})
            .then(result => setItem(result));
    }
    const add_record = () => {
        request('add_record/',"POST", {
            user_id: 1,
            doctor_id: doctorId,
            prod: prod,
            date: selectedDate,
            time: selectedtime
        })
            .then(result => console.log(result))
    }

    const price = itemid.price || []
    const handleDateSelect = (date) => {
        setSelectedDate(date);
        const times = data
            .filter(item => item.date === date.split(' ')[0])
            .map(item => item.time);
        setAvailableTimes(times);
    };
    const uniqueDates = [...new Set(data.map(item => `${item.date} ${item.day}`))];

    return (
        <div className={'view_ac'}>
            <h1>Запись</h1>
            <div className={'view_ac-name'}>
                <div className={'view_ac-photo'}>
                    <Image
                        src={itemid.img ? itemid.img : 'https://ratakan.com/uploads/images/profiles/no-person.jpg'}
                        alt={itemid.name}
                        className={'chat_item_img'}
                        style={{
                            width: '100px',
                            borderRadius: "10px",
                            marginRight: '1em',
                            objectFit: 'cover'
                        }}/>
                </div>
                <div className={'view_ac-doctor'}>
                    <h2>{itemid.name}</h2>
                </div>
            </div>
            <div className={'view_ac-about'}>
                <div className={'view_ac-price'}>
                    {price.length === 1 ? (
                        <div>
                            <hr/>
                            <p>Услуга</p>
                            <h5>{price[0].name}</h5>
                            <br/>
                            <p>Стоимость</p>
                            <h5>{price[0].price}₽</h5>
                            <hr/>
                        </div>
                    ) : (
                        <Dropdown>
                            <Dropdown.Toggle className={'price-btn'} variant="success" id="dropdown-basic">
                                Услуги
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {price.map((item) => (
                                    <Dropdown.Item style={{whiteSpace: 'pre-wrap'}} key={item.id}>
                                        <p>{item.name} - {item.price}₽</p>
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
                <div className={'view_ac-date'}>
                    <p>
                        Выберите дату для записи
                    </p>
                    <div className={'date_list'}>
                        <Swiper center={true} score={3}>
                            {uniqueDates.map((item, index) => {
                                const [date, day] = item.split(' ');
                                return (
                                    <div key={item.id}
                                         className={`block ${selectedDate === item ? 'selected' : ''}`}
                                         onClick={() => handleDateSelect(item)}>
                                        <h6>{date} </h6>
                                        <h6>{day}</h6>
                                    </div>)
                            })}
                        </Swiper>
                    </div>
                    <div className={'date_list'}>
                        <p>Выберите время для записи</p>
                        <Swiper score={4}>
                            {availableTimes.map((item, index) => (
                                <div
                                    key={index}
                                    className={`block ${selectedtime === item ? 'selected' : ''}`}
                                    onClick={() => handleBlockTime(item)}
                                >
                                    <h6>{item}</h6>
                                </div>
                            ))}
                        </Swiper>


                    </div>
                </div>
            </div>
            <div className={'view_ac-btn'}>
                {selectedtime ? (

                    <Button variant={'link'} onClick={handleSubmit}>
                        Записаться
                    </Button>
                ) : (
                    <Button variant={'link'} disabled>Записаться</Button>
                )}

            </div>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered // Центрируем модальное окно
                className="custom-modal" // Применяем кастомные стили
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Успех</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">Запись создана!</Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="outline-primary" onClick={() => setShowModal(false)}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}