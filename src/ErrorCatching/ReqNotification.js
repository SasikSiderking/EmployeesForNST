import React from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const ReqNotification = (status) => {
    const notify = (status) => {
        if (status>=200 && status<400){
            toast.success("Успешное выполнение запроса");
        }
        else if((status>=400 && status<404) || (status>404 && status<500)){
            toast.warn("Неверный запрос");
        }
        else if(status===404 || status===undefined){
            toast.warn("Сущность не найдена в системе");
        }
        else if(status>=500){
            toast.error("Серверная ошибка");
        }
        else {
            toast.error("Неизвестная ошибка")
        }
        // switch (status){
        //     case 200:
        //         toast.success("Успешное выполнение запроса");
        //         break;
        //     case 400:
        //         toast.warn("Неверный запрос");
        //         break;
        //     case 404:
        //         toast.warn("Сущность не найдена в системе");
        //         break;
        //     case 500:
        //         toast.error("Серверная ошибка");
        //         break;
        //     default:
        //         toast.error("Неизвестная ошибка")
        // }
    }

    return(
        <>
            {notify(status)}
    </>
    )
}

export default ReqNotification;