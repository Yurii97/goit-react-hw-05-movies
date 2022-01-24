import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('../', { replace: true });        
    },[navigate])
    
    return<h2>Page not found</h2>
}