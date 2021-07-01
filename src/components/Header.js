import { Link} from "react-router-dom"
function Header() {
    return (
        <header id="header" data-testid="testid">              
                <Link to="/proyecto-anime">
                    <h1>internet anime data base (iad<span>b</span>)</h1>
                </Link>
        </header>
    )
}

export default Header
