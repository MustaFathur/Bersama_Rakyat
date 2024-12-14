

const Navbar = () => {
    return (
        <div className="navbar bg-red-800 p-2">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-white text-xl">Bersama Rakyat</a>
            </div>
            <div className="flex-none text-white">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/beranda">Beranda</a></li>
                    <li><a href="/program">Program Pemerintah</a></li>
                    <li><a href="/forum">Forum</a></li>
                    <li>
                        <details>
                            <summary>Berita</summary>
                            <ul className="bg-base-100 text-black rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;
