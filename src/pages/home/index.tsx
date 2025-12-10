
import { IconNetwork } from "../../components/social";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import { collection, getDocs, getDoc, orderBy } from "firebase/firestore";
import { query } from "firebase/firestore";
import { db } from "../../services/firebaseconfig";
import { useEffect } from "react";
import { useState } from "react";
import { doc } from "firebase/firestore";


interface PropsDataUSer {
        id: string,
        name: string,
        url: string,
        bg: string,
        color: string,
}

interface PropsSociais{
    facebook: string,
    instagram: string,
    youtube: string
}

const Home = () => {
    const [links, setLinks] = useState<PropsDataUSer[]>([]);
    const [sociais, setSociais] = useState<PropsSociais>();

    useEffect((()=>{

        function loadLinks(){
            const docsRef = collection(db, "links");
            const queryRef = query(docsRef, orderBy("created", "asc"));

            getDocs(queryRef).then((snapshot)=>{
                const lista = [] as PropsDataUSer [];
                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        name: doc.data()?.name,
                        url: doc.data()?.url,
                        bg: doc.data()?.bg,
                        color: doc.data()?.color
                    })
                })
                setLinks(lista);
            })
            }
            loadLinks();
    }),[]);

useEffect((()=>{
     function loadSociais(){
        const docRef = doc(db, "sociais", "links");
        getDoc(docRef).then((snapshot)=>{
            if(snapshot.data() !== undefined){
                setSociais({
                    facebook: snapshot.data()?.facebook,
                    instagram: snapshot.data()?.instagram,
                    youtube: snapshot.data()?.youtube
                }
                )
            }
           
        })
            
        }
    loadSociais();
}),[])
    return (
        <div className="w-full flex flex-col items-center justify-center py-4">
           <h1 className="md:text-4xl text-3xl text-white font-bold mt-20">Sujeito Programador</h1>
           <span className="mb-5 mt-3 text-gray-50">Veja meus links 👇</span>

           <main className="flex flex-col w-11/12 max-w-xl text-center">
           { links.map((valor)=>{
            return(
                <article 
                    key={valor.id} className="w-11/12 max-w-xl flex flex-row px-2 py-2 mb-2 rounded-md items-center justify-center select-none transform hover:scale-105"
                    style={{backgroundColor: valor.bg, color: valor.color}}
                    >
                        <a href={valor.url} target="_blank">
                            <p className="text-white font-medium">{valor.name}</p>
                        </a>
                        
                </article>
            )
           })     
       }    

       {
        sociais && Object.keys(sociais).length > 0 && (
                <footer className="flex justify-center gap-3 my-4">
                    <IconNetwork  url={sociais?.facebook}><FaFacebook color="white" size={35}></FaFacebook></IconNetwork>
                    <IconNetwork url={sociais?.youtube}><FaYoutube color="white" size={35}></FaYoutube></IconNetwork>
                    <IconNetwork url={sociais?.instagram}><FaInstagram color="white" size={35}></FaInstagram></IconNetwork>
                </footer>
        )
       }
           </main>
        </div>
    )
} 

export default Home;