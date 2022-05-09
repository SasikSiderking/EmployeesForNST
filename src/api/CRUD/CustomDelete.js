import api from '../v1';
import ReqNotification from '../../ErrorCatching/ReqNotification';
import ReqErrorCatcher from '../../ErrorCatching/ReqErrorCatcher';

const CustomDelete = async (req, id) => {
  let responseData;
  let status;
  try {
    const response = await api.delete(`${req}/${id}`);
    status = response.status;
    ReqNotification(status);
    responseData = response.data;
  } catch (err) {
    ReqErrorCatcher(err, status);
  }

  return (responseData);
};
export default CustomDelete;
