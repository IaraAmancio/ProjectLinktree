import { useState } from "react";
import { IconNetwork } from "../../components/social";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";


const Home = () => {
    //const [links, setLinks] = useState<PropsDataUSer[]>([]);
    return (
        <div className="w-full flex flex-col items-center justify-center py-4">
           <h1 className="md:text-4xl text-3xl text-white font-bold mt-20">Sujeito Programador</h1>
           <span className="mb-5 mt-3 text-gray-50">Veja meus links 👇</span>

           <main className="flex flex-col w-11/12 max-w-xl text-center">
           {
                /*<article 
                    key={valor.id} className="w-11/12 max-w-xl flex flex-row px-2 py-2 mb-2 rounded-md items-center justify-between select-none"
                    style={{backgroundColor: valor.bg, color: valor.color}}
                    >
                        <p className="text-white font-medium">{valor.name}</p>
                        <div>
                            <button onClick={() =>  handleDelete(valor.id)} type="submit" className="bg-neutral-900 p-1 rounded border-white border-dashed border">
                                <FiTrash size={18} color="white"/>
                            </button>
                        </div>
                </article>*/
           }
                
                <section className="w-full bg-white rounded-lg py-2 mb-4 select-none transition-transform 
                       hover:scale-105 delay-150 cursor-pointer">
                    <a>
                        <p className="text-base md:text-lg">
                            Canal no YouTube
                        </p>
                    </a>
                </section>
                

                <footer className="flex justify-center gap-3 my-4">
                    <IconNetwork url="https://www.facebook.com/people/Iara-Maya/pfbid0ceh3tiaxGWgRwtK3etU8p4v3PYRoXLQcTzkwpUCpDxFugZKWdAojy2WtEmcV21L1l"><FaFacebook color="white" size={35}></FaFacebook></IconNetwork>
                    <IconNetwork url="https://www.facebook.com/people/Iara-Maya/pfbid0ceh3tiaxGWgRwtK3etU8p4v3PYRoXLQcTzkwpUCpDxFugZKWdAojy2WtEmcV21L1l"><FaYoutube color="white" size={35}></FaYoutube></IconNetwork>
                    <IconNetwork url="https://www.facebook.com/people/Iara-Maya/pfbid0ceh3tiaxGWgRwtK3etU8p4v3PYRoXLQcTzkwpUCpDxFugZKWdAojy2WtEmcV21L1l"><FaInstagram color="white" size={35}></FaInstagram></IconNetwork>
                </footer>
           </main>
        </div>
    )
} 

export default Home;