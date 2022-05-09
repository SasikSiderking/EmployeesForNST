import React from 'react';
import { toast } from 'react-hot-toast';

function ReqNotification(status) {
  const notify = () => {
    if (status >= 100 && status < 200) {
      toast('Информационный ответ', {
        duration: 4000,
        position: 'top-right',
      });
    } else
    if (status >= 200 && status < 400) {
      toast('Успешное выполнение запроса', {
        duration: 4000,
        position: 'top-right',
        style: {
          color: 'green',
        },
      });
    } else if ((status >= 400 && status < 404) || (status > 404 && status < 500)) {
      toast('Неверный запрос', {
        duration: 4000,
        position: 'top-right',
        style: {
          color: 'red',
        },
      });
    } else if (status === 404 || status === undefined) {
      toast('Сущность не найдена в системе', {
        duration: 4000,
        position: 'top-right',
        style: {
          color: 'darkred',
        },
      });
    } else if (status >= 500 && status <= 599) {
      toast('Серверная ошибка', {
        duration: 4000,
        position: 'top-right',
        style: {
          color: 'orangered',
        },
      });
    } else {
      toast('Неизвестная ошибка', {
        duration: 4000,
        position: 'top-right',
        style: {
          color: 'indianred',
        },
      });
    }
  };

  return (
    <>
      {notify(status)}
    </>
  );
}

export default ReqNotification;
