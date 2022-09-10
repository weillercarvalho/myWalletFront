import React from "react";
import axios from "axios";

const BASE_URL = `http://localhost:5000`;

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('wallet'));
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    }
    return config;
}

function singin(body) {
    const promisse = axios.post(`${BASE_URL}/singin`, body);
    return promisse;
}

function singup(body) {
    const promisse = axios.post(`${BASE_URL}/singup`, body);
    return promisse;
}

function addvalue(body) {
    const promisse = axios.post(`${BASE_URL}/addvalue`, body);
    return promisse;
}

function removevalue(body) {
    const promisse = axios.post(`${BASE_URL}/removevalue`, body);
    return promisse;
}

function result(body) {
    const header = createHeaders();
    const promisse = axios.get(`${BASE_URL}/result`, body, header);
    return promisse;
}

export {singin, singup, addvalue, removevalue, result}