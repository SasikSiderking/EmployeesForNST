import React from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const ReqNotification = (status) => {
    const notify = (status) => {
        switch (status){
            case 200:
                toast.success("Успешное выполнение запроса");
                break;
            case 400:
                toast.warn("Неверный запрос");
                break;
            case 404:
                toast.warn("Сущность не найдена в системе");
                break;
            case 500:
                toast.error("Серверная ошибка");
                break;
            default:
                toast.error("Неизвестная ошибка")
        }
    }

    return(<>
            {notify(status)}
        <ToastContainer/>
    </>
    )
}

export default ReqNotification;