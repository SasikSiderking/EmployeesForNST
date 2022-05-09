import api from '../v1';
import ReqErrorCatcher from '../../ErrorCatching/ReqErrorCatcher';
import ReqNotification from '../../ErrorCatching/ReqNotification';

const CustomPut = async (req, updatedPerson, id) => {
  let responseData;
  let status;
  try {
    const response = await api.put(`${req}/${id}`, updatedPerson);
    status = response.status;
    ReqNotification(status);
    responseData = response.data;
  } catch (err) {
    ReqErrorCatcher(err, status);
  }
  return (responseData);
};
export default CustomPut;
