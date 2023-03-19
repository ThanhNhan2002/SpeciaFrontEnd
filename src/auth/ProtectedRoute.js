import React from "react";
import { 
    useEffect, 
    useState,
} from "react";
import { 
    useNavigate, 
    // useSearchParams,
} from "react-router-dom";
import Cookies from 'js-cookie';

export default function ProtectedRoute(props) {
    const navigate = useNavigate();
    const [
        isLoggedIn, 
        setIsLoggedIn,
    ] = useState(false);
    const checkUserToken = () => {
        // const userToken = localStorage.getItem('user-token');
        // let params = Object.fromEntries([...searchParams])
        let token = Cookies.get('IdToken')

        if (token){
            console.log('found token')
        }else{
            setIsLoggedIn(false);
            console.log('naviagte')
            return navigate('/auth/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(
        checkUserToken,
        [
            isLoggedIn,
            navigate,
        ],
    );
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}