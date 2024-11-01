import axios from "axios";

const serverUrl = 'http://localhost:8000/api'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const TG = window.Telegram.WebApp

async function request(endpoint, method = "POST", data?: any) {

    const options: RequestInit = {
        method: method,
        headers: {
            Authorization: TG.initData,
        },
        data: data ? data : undefined,
    };
    try {
        const response = await axios(`${serverUrl}/${endpoint}`, options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export {TG, request}


