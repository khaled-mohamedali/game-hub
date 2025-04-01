import axios from "axios";



export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'b1b07c3106ff40cb8823b2e946018566',
    }
})
