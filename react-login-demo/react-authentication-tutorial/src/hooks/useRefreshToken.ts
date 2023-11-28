import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const context = useAuth();
    const setAuth = context?.setAuth;

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });

        if (setAuth)
            setAuth(prev => {
                console.log(JSON.stringify(prev));
                console.log(response.data.accessToken);
                return {...prev, accessToken: response.data.accessToken}

        });
        return response.data.accessToken;
    }

    return refresh;


}

export default useRefreshToken;