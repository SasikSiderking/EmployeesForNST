import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:9000"//<--host url
});

export const get = "/persons"

export const post = "/persons"

// export const put = ""

// export const delete = ""