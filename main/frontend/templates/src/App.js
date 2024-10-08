import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";

import axios from "axios";
import Home from "./Pages/main";
import Navig from "./Components/navigation";
import Specialties from "./Pages/specialties";
import View_doctor from "./Pages/view_doctor";
import Zapisi from "./Pages/zapisi";
import Profile from "./Pages/profile";
import Add_zapisi from "./Pages/add_zapisi";
import List_doctors, {List_product} from "./Pages/view_spec";
import {TG} from "./Components/api";

export default function App() {

    useEffect(() => {
        TG.expand()

        let data;
        axios.get('http://127.0.0.1:8000/')
            .then(res => {
                data = res.data;
                this.setState({details: data});

            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <div className="App">
            <div className={'med_app'}>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/zapisi' element={<Zapisi/>}/>
                    <Route path='/add_zapisi' element={<Add_zapisi/>}/>
                    <Route path='/alldoctor' element={<Specialties/>}/>
                    <Route path='/service/:id/doctor/:parent/' element={<View_doctor/>}/>
                    <Route path='/spec/:id/' element={<List_product/>}/>
                    <Route path='/service/:id/' element={<List_doctors/>}/>

                    {/*<Route path='*' element={<Notfound/>}/>*/}

                </Routes>
            </div>

            <Navig/>
            {/*<Footer/>*/}
        </div>
    )

}