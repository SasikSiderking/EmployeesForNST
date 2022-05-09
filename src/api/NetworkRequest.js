import CustomGet from './CRUD/CustomGet';
import CustomPost from './CRUD/CustomPost';
import CustomDelete from './CRUD/CustomDelete';
import CustomPut from './CRUD/CustomPut';
import {
  deleteReq, getReq, postReq, putReq,
} from './v1';

const NetworkRequest = (request, Person, id) => {
  switch (request) {
    case 'get':
      return (CustomGet(getReq, Person ? Person.id : null));
    case 'post':
      return (CustomPost(postReq, Person));
    case 'delete':
      return (CustomDelete(deleteReq, Person.id));
    case 'put':
      return (CustomPut(putReq, Person, id));
    default: {
      return 0;
    }
  }
};
export default NetworkRequest;
