import ReqNotification from "./ReqNotification";


const ErrorCatcher = (err,status) => {
    if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        ReqNotification(err.response.status)
    }
    else{
        ReqNotification(status);
        console.log("Error: "+err)
    }
}
export default ErrorCatcher