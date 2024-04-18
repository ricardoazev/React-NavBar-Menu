import { Link, useMatch, useResolvedPath } from "react-router-dom";


const NavBar = () => {

  return (
    <nav className='nav'>
        <Link to="/" className='site-title'>
            SiteName
        </Link>

        <ul>
            <CustomLink to="/cadastrar">Cadastrar</CustomLink>
            <CustomLink to="/entrar">Entrar</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar
