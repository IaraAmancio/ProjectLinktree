import { Link } from "react-router-dom"


export function NotFound(){
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold mb-2">404</h1>
            <h1 className="md:text-4xl text-3xl mb-4 font-bold">Página não encontrada</h1>
            <p className="italic text-1xl mb-4">Você caiu em uma página que não existe!</p>
            <Link to="/" className="bg-gray-50/20 text-white px-4 py-1 rounded-md cursor-pointer">
                    Voltar para home
            </Link>

        </div>
    )
}