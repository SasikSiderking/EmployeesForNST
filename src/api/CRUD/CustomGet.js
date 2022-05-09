import api from '../v1';
import ReqErrorCatcher from '../../ErrorCatching/ReqErrorCatcher';

const CustomGet = async (req, id) => {
  let data = [];

  try {
    const response = await api.get(req ? `${req}/${id}` : req);
    if (response && response.data) {
      data = response.data;
      // ReqNotification(status);
    }
  } catch (err) {
    ReqErrorCatcher(err);
  }

  return (data);
};

export default CustomGet;
