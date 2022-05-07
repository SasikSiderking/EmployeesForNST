import CustomGet from "./CRUD/CustomGet";
import CustomPost from "./CRUD/CustomPost";
import CustomDelete from "./CRUD/CustomDelete";

const NetworkRequest = (request,firstName, lastName,id) => {
    switch (request){
        case "get":
            return(CustomGet("/persons"));
        case "post":
            return(CustomPost("/persons",firstName,lastName));
        case "delete":
            return (CustomDelete("/persons",id))
    }
}
export default NetworkRequest