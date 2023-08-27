import axios from "axios";

const apiurl = process.env.REACT_APP_API_URL;

function Post(url, values) {
    const formData = new FormData();

    for (const key in values) {
        formData.append(key, values[key]);
    }

    return axios.post(`${apiurl}${url}`, formData, {
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data',
            }})
        .then(res => {
            console.log(res);
            console.log(res.data);
            return res;
        })
        .catch(err => {
            console.log(err, "error from api");
            console.log(err.response, "error response from api");
            throw err;
        });
}

function Get(url) {
    return axios.get(`${apiurl}${url}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
}

export {Post};
export {Get};