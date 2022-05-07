import CustomGet from "./CRUD/CustomGet";
import CustomPost from "./CRUD/CustomPost";
import CustomDelete from "./CRUD/CustomDelete";
import CustomPut from "./CRUD/CustomPut";

const NetworkRequest = (request,Person) => {
    switch (request){
        case "get":
            return(CustomGet("/persons",Person? Person.id : null));
        case "post":
            return(CustomPost("/persons",Person));
        case "delete":
            return (CustomDelete("/persons",Person.id));
        case "put":
            return (CustomPut("/persons",Person))
    }
}
export default NetworkRequest