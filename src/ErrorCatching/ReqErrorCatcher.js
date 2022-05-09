import ReqNotification from './ReqNotification';

const ReqErrorCatcher = (err) => {
  if (err.response) {
    // console.log(err.response.data);
    // console.log(err.response.status);
    // console.log(err.response.headers);
    ReqNotification(err.response.status);
  } else {
    ReqNotification(404);
    //   console.log(`Error: ${err}`);
  }
};
export default ReqErrorCatcher;
