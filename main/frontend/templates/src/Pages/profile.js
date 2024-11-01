import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from 'react';

import {Button, Row, Col} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";

export default function Profile() {
    const human = {
        name: 'John',
        phone: '+7 (999) 999-99-99',
        gender: 'Мужской',
        age: 25,
        email: 'john@gmail.com',
        lastName: 'Wood',
        type: 0
    }
    return (
        <div className="profile_page">
            <h1>Личный кабинет</h1>
            <div className="profile_name">
                <h2>{human.name} {human.lastName}</h2>
                <div className="profile_content">
                    <div className="profile_info">
                        <Row>
                            <Col>
                                <p>Пол</p>
                                <div className="profile_info_item">
                                    <h5>{human.gender}</h5>
                                </div>

                                <p>Телефон</p>
                                <div className="profile_info_item">
                                    <h6>{human.phone}</h6>
                                </div>

                            </Col>
                            <Col>
                                <p>Возраст</p>
                                <div className="profile_info_item">
                                    <h5>{human.age}</h5>
                                </div>

                                <p>Email</p>
                                <div className="profile_info_item">
                                    <h6>{human.email}</h6>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="profile_navig">
                <Link to={'/myhistory'}>
                    <Button variant="outline-primary">
                        История посещений
                    </Button>
                </Link>
                <Link to={'/mydocs'}>
                    <Button variant="outline-primary">
                        Документы
                    </Button>
                </Link>
                <Button variant="outline-primary">
                    Вызвать врача на дом
                </Button>

            </div>
        </div>
    )
}

