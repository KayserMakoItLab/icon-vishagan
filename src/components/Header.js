import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div style={{ cursor: 'default' }} className="logo text-white" onClick={() => router.push('/')}>Vertex</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;