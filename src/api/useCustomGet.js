import React, {useEffect, useState} from "react";
import api from "./v1";

function useCustomGet(req) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status,setStatus] = useState(null);

    useEffect(() => {
        setLoading(true);
        api
            .get(req)
            .then((response) => {setData(response.data);setStatus(response.status)
            })
            .catch((err) => setError(err))
            .finally(() => {setLoading(false);});
    }, [req])

    return {data, status, loading, error};
}

export default useCustomGet;