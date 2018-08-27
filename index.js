require('dotenv').config()
const axios = require("axios");

console.log(process.env.INSTAGRAM_ACCESS_TOKEN);

const getPosts = async () => {
    try {
        const response = await axios.get(
            "https://api.instagram.com/v1/users/self/media/recent/?access_token="
            +process.env.INSTAGRAM_ACCESS_TOKEN
            +"&count=33"
        );
        return response;
    } catch (e) {
        console.log(e)
    }
}

getPosts()
    .then(posts => {
        console.log(posts.data.data);
        console.log(posts.data.data.length);
    });
