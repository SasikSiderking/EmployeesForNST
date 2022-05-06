import CustomGet from "./CustomGet";
import CustomPost from "./CustomPost";

const NetworkRequest = (request,firstName, lastName) => {
    switch (request){
        case "get":
            return(CustomGet("/persons"));
        case "post":
            return(CustomPost("/persons",firstName,lastName));
    }
}
export default NetworkRequest