import { Link, useNavigate } from "react-router-dom"; 
import { Input } from "../../components/input";
import { useState, type FormEvent } from "react";

import {auth} from "../../services/firebaseconfig"
import { signInWithEmailAndPassword } from "firebase/auth";

function Login () {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();


    function handleLogin (e: FormEvent){
        e.preventDefault();

        if (email === '' || senha === ''){
            alert("Preencha os dados corretamente!")
            return
        }

        signInWithEmailAndPassword(auth, email, senha)
        .then(()=>{
            console.log("Usuário logado!")
            navigate("/admin");
        }).catch((error)=>{
            console.log("ERRO de Autenticação!")
            console.log(error)
        })
        
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Link to="/">
                <h1 className="text-white font-bold text-5xl mb-7 mt-11">Dev
                <span className="bg-linear-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">Link</span></h1>
            </Link>

            <form onSubmit={handleLogin} className="w-full max-w-xl flex flex-col px-2">
                <Input
                    type="email"
                    placeholder="escreva seu e-mail"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="********"
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)}
                />

                <button type="submit" className=" bg-blue-600 text-white border-0 text-lg font-medium rounded h-9 cursor-pointer">
                    Acessar
                </button>
            </form>

        </div>
    )
}

export default Login