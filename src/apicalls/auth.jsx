import axios from 'axios';
const API_URL = 'http://localhost:4000';
export const registerUser = async (user) => {
    try {
        const data = await axios.post(`${API_URL}/api/v1/user/register`, user)
        console.log(data)
        if (data.status === 200) {
            return data.data.data
        }

    } catch (error) {
        console.log(error)
        return await error.response.data.error
    }


};