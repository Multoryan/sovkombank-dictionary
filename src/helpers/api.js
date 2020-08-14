import axios from 'axios';

export default axios.create({
    headers: {
        app_id: process.env.VUE_APP_ID,
        app_key: process.env.VUE_APP_KEY,
    },
});
