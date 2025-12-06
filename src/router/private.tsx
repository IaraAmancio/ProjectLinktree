import type { ReactNode } from "react"
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../services/firebaseconfig"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PrivateProps {
    children: ReactNode;
};

export function Private ({children}: PrivateProps): any {

    const [loading, setLoading] = useState(true);
    const [signed, setSigned ] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{

        const unsub = onAuthStateChanged(auth, (user)=>{

            if(user){
                console.log("usuario logado!")
                const userLog = {
                    userId: user?.uid,
                    userEmail: user?.email,
                }

                 // salvar os dados no navegador
                localStorage.setItem("@reactlinks", JSON.stringify(userLog))
                setSigned(true);
                setLoading(false);
               
            } else{
                console.log("usuario não logado!")
                setSigned(false);
                setLoading(false);
            }            
        });

            // fechar o user pois é um olheiro
            return () => {
                unsub();
            }
    }
    ,[]);

    if (loading){
        return (<div></div>)
    }
    if (!signed){
        return (navigate("/login"))
    } 

    return (
        <>{children}</>
    )
   
}
