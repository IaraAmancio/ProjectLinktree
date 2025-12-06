import {CiLogout} from "react-icons/ci"
import {Link} from "react-router-dom"
import {auth} from "../../services/firebaseconfig"


export function Header ( ){

    async function handleLogOut () {
        await auth.signOut();
    }

    return (
        <header className="w-full px-1 max-w-2xl mt-4">
            <nav className=" w-full flex flex-row  bg-white h-12 px-3 items-center justify-between rounded-md">
                <div className="flex gap-4 font-medium">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/admin">
                        Links
                    </Link>
                    <Link to="/admin/sociais">
                        Redes sociais
                    </Link>
                </div>
                <button onClick={handleLogOut}>
                    <CiLogout color= "#ad0000" size={28}></CiLogout>
                </button>

            </nav>
        </header>
    )
}