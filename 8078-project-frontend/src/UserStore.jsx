import {atom, useAtom} from 'jotai';

const jwtAtom=atom(null);


export function useJWT(){
    const [jwt, setJWTatom] = useAtom(jwtAtom);

    const setJWT = (newJWT) =>{
        localStorage.setItem('jwt', newJWT);
        setJWTatom(newJWT)
    };

    const getJWT=()=>{
        const storedJWT = localStorage.getItem('jwt');
        if (storedJWT && !jwt){
            setJWTatom(storedJWT)
        };

        return jwt || storedJWT
    }

    const clearJWT=()=>{
        localStorage.removeItem('jwt');
        setJWTatom(null);
    }

    return {jwt, setJWT, getJWT, clearJWT}

}