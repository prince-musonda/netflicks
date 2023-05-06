import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navigation.styles.css'
import { SideBarContext} from '../../contexts/sidebar/sideBar.context'
import menu_icon from '../../assets/menu-icon.svg'
import three_dots_icon from '../../assets/3-dots-icon.svg'
import search_icon from '../../assets/search-icon.svg'

const Navigation = (props)=>{
    const {setShowSideBar} = useContext(SideBarContext)
    function showSideBarFunc(){
        console.log('run')
        setShowSideBar(true)
    }
    return(
        <nav>
            <div className="nav-left">
                <button onClick={showSideBarFunc}>
                    <img src={menu_icon} alt="menu" />
                </button>
                <p>{props.category}</p>
            </div>
            <div className="nav-right">
                <Link to='/search'><img src={search_icon} alt="search" /></Link>
                <button><img src={three_dots_icon} alt="three dots" /></button>

            </div>
        </nav>
    )
}

export default Navigation