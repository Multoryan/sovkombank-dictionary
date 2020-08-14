import axios from 'axios';

export default axios.create({
    // baseURL: process.env.VUE_APP_URL,
    headers: {
        app_id: process.env.VUE_APP_ID,
        app_key: process.env.VUE_APP_KEY,
    },
    // proxy: {
    //     host: '127.0.0.1',
    //     port: 3000,
    // },
});
