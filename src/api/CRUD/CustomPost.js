import api from '../v1';
import ReqErrorCatcher from '../../ErrorCatching/ReqErrorCatcher';
import ReqNotification from '../../ErrorCatching/ReqNotification';

const CustomPost = async (req, Person) => {
  let status = null;
  try {
    const response = await api.post(req, Person);
    status = response.status;
    ReqNotification(status);
  } catch (err) {
    ReqErrorCatcher(err, status);
  }
  return (status);
};
export default CustomPost;
