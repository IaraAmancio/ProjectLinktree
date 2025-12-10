import { useEffect, useState, type FormEvent } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { LuLink2 } from "react-icons/lu";
import { getDoc, setDoc, doc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseconfig";
import { onSnapshot } from "firebase/firestore";

interface PropsSociais{
    facebook: string,
    instagram: string,
    youtube: string
}

function Network(){
    const [urlFacebook, setUrlFacebook] = useState("");
    const [urlInstagram, setUrlInstagram] = useState("");
    const [urlYoutube, setUrlYoutube] = useState("");
    const [links, setLinks] = useState<PropsSociais[]>([]);

    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, "sociais", "links"),{
            facebook: urlFacebook,
            instagram: urlInstagram,
            youtube: urlYoutube
        }).then(()=>{
            console.log("Dados cadastrados com sucesso!");
        }).catch((error)=>{
            console.log("ERRO ao cadastrar as redes: " + error);
        })     
    };

    useEffect((()=>{
        const docsRef = doc(db, "sociais", "links");
        getDoc(docsRef).then((snapshot)=>{
            if(snapshot !== undefined){
                setUrlFacebook(snapshot.data()?.facebook)
                setUrlInstagram(snapshot.data()?.instagram)   
                setUrlYoutube(snapshot.data()?.youtube)
            }
            console.log(snapshot.data());
        }

        ).catch((error)=>{
            console.log("Erro ao cadastrar as redes sociais: "+error);
        })
    

    }),[]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center pb-7 px-2">
            <Header/>
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Suas redes sociais</h1>

            <form onSubmit={handleRegister} className="w-full max-w-xl flex flex-col">
                <label className="text-white font-medium mt-2 mb-2">Link facebook</label>
                <Input 
                    value={urlFacebook}
                    onChange={(e)=>setUrlFacebook(e.target.value)}
                    type="url" 
                    placeholder="Digite a url... "
                />
                <label className="text-white font-medium mt-2 mb-2">Link Instagram</label>
                <Input 
                    value={urlInstagram}
                    onChange={(e)=>setUrlInstagram(e.target.value)}
                    type="url" 
                    placeholder="Digite a url... "
                />
                <label className="text-white font-medium">Link Youtube</label>
                <Input 
                    value={urlYoutube}
                    onChange={(e)=>setUrlYoutube(e.target.value)}
                    type="url" 
                    placeholder="Digite a url... "
                />

                <button type="submit" className="w-full flex gap-2 items-center justify-center text-white bg-blue-600 h-9 rounded-md font-medium mt-2 mb-7 cursor-pointer">
                    Salvar links
                    <LuLink2 size={20}/>
                </button>
            </form>
        </div>
    )
}

export default Network;