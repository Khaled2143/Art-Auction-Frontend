import axios from "axios";

const apiurl = process.env.REACT_APP_API_URL;

function Post(url, values) {
    return axios.post(`${apiurl}${url}`, values)
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