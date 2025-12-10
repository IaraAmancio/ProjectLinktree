import { useEffect, useState, type FormEvent } from "react"
import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { LuLink2 } from "react-icons/lu"
import { FiTrash } from "react-icons/fi"
import { addDoc, 
         collection,
         onSnapshot,
         query,
         orderBy,
         doc,
         deleteDoc, 
         } from "firebase/firestore"
import { db } from "../../services/firebaseconfig"

interface PropsDataUSer {
        id: string,
        name: string,
        url: string,
        bg: string,
        color: string,
}

function Admin (){

    const [nomeInput, setNomeInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [fundoLinkInput, setFundoLinkInput] = useState("#FFFFFF");
    const [corLinkInput, setCorLinkInput] = useState("#000000");

    const[links, setLinks] = useState<PropsDataUSer[]>([]);

    function handleRegister(e: FormEvent){
        e.preventDefault();

        if (nomeInput.trim() === '' || urlInput.trim() === ''){
            alert("Preencha todos os campos!");
            return;
        }

        addDoc(collection(db, 'links'), {
            name: nomeInput,
            url: urlInput,
            bg: fundoLinkInput,
            color: corLinkInput,
            created: new Date()
        }).then(()=>{
            console.log("Link cadastrado com sucesso!");
            setNomeInput("");
            setUrlInput("");
        }).catch((error)=>{
            console.log("Erro ao cadastrar link: " + error);
        });

    }

    async function handleDelete(id: string){
        const docRef = doc(db, "links", id);
        await deleteDoc(docRef);
    }

    useEffect((()=>{
        const docsRef = collection(db, "links");
        const queryRef = query(docsRef, orderBy( "created", "asc"));
        
        const unsub = onSnapshot(queryRef, (snapshot) => {
            const lista = [] as PropsDataUSer[];

            snapshot.forEach((doc)=>{
                lista.push({id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color,
            });
            })
            console.log(lista);
            setLinks(lista);
        });
        
        return (() => {
            unsub();
        }
        )
 
    } ),[])

    return (
        <div className="min-h-screen flex flex-col items-center pb-7 px-2">
            <Header/>

                <form onSubmit={handleRegister} className="w-full max-w-xl flex flex-col mt-8 mb-3">
                        
                    <label className="font-medium text-white mb-2 mt-2">Nome do link</label>
                    <Input
                        type="text"
                        placeholder="Digite o nome do seu link..."
                        value={nomeInput}
                        onChange={(e)=> setNomeInput(e.target.value) }
                    />
                   
                    <label className="font-medium text-white mb-2 mt-2">URL do link</label>
                    <Input
                        type="url"
                        placeholder="digite a url"
                        value={urlInput}
                        onChange={(e)=> setUrlInput(e.target.value) }
                    />                           
                        
                    <section className="flex my-4 gap-5">
                        <div className="flex gap-2">
                            <label className="font-medium text-white mt-2 mb-2">Fundo do link:</label>
                            <input 
                                type="color" 
                                value={fundoLinkInput} 
                                onChange={(e) => setFundoLinkInput(e.target.value)}>
                            </input>   
                        </div>

                        <div className="flex gap-2">
                            <label className="font-medium text-white mt-2 mb-2">Cor do link:</label>
                            <input 
                                type="color" 
                                value={corLinkInput} 
                                onChange={(e) => setCorLinkInput(e.target.value)}>
                            </input>
                        </div>        
                    </section>


                    {
                    (nomeInput.trim() !== '')
                    &&  
                    <div className="flex flex-col items-center justify-start mb-7 p-1 gap-3 border border-gray-100/25 rounded-md">
                        <label className="font-medium text-white mt-2 mb-3">Veja como esta ficando</label>   
                        <article className="flex flex-col items-center justify-between w-11/12 max-w-lg px-1 py-3 rounded-md  bg-zinc-900 "
                        style={{marginBottom: 8, marginTop: 8, backgroundColor: fundoLinkInput, color: corLinkInput}}>
                            <p className="font-medium" style={{'color': corLinkInput}}>{nomeInput}</p>
                        </article> 
                    </div>
                    }

                    <button type="submit" className="flex flex-row gap-4 mb-7 items-center justify-center h-9 rounded-md bg-blue-600 text-white font-medium">
                        Cadastrar
                        <LuLink2 color="white" size={20}/>
                    </button>

                </form>

                <h2 className="font-bold text-white mb-4 text-2xl">
                    Meus links
                </h2>
                
                {
                  links.map((valor)=>{
                    return (
                        <article 
                            key={valor.id} className="w-11/12 max-w-xl flex flex-row px-2 py-2 mb-2 rounded-md items-center justify-between select-none"
                            style={{backgroundColor: valor.bg, color: valor.color}}
                            >
                                <p className="text-white font-medium">{valor.name}</p>
                                <div>
                                    <button onClick={() =>  handleDelete(valor.id)} type="submit" className="bg-neutral-900 p-1 rounded border-white border-dashed border">
                                        <FiTrash size={18} color="white"/>
                                    </button>
                                </div>
                        </article>
                    )
                  })
                }
               
        </div>
    )
}
export default Admin