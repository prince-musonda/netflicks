import './sideBar.styles.css'
import { SideBarContext } from '../../contexts/sidebar/sideBar.context'
import { useContext } from 'react'
import { Link} from 'react-router-dom'

function SideBar(){
    const {setShowSideBar} = useContext(SideBarContext)
    function HideSideBar(){
        setShowSideBar(false)
    }
    console.log('sideBar')

    return(
        <>
              <div className="sidebar-backdrop backdrop" onClick={HideSideBar}></div>
              <aside className="side-bar">
                <p className='logo'>Netflicks</p>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/genre?id1=80'>Crime Movies</Link></li>
                    <li><Link to='/genre?id1=16'>Anime</Link></li>
                    <li><Link to='/genre?id1=18'>Dramas</Link></li>
                    <li><Link to='/genre?id1=53'>Thriller</Link></li>
                    <li><Link to='/genre?id1=35'>Comedy</Link></li>
                    <li><Link to='/genre?id1=27'>Horror Movies</Link></li>
                    <li><Link to='/genre?id1=10751'>Kids and Family Movies</Link></li>
                    <li><Link to='/genre?id1=10749'>Romantic Movies</Link></li>
                    <li><Link to='/genre?id1=36'>History</Link></li>
                    <li><Link to='/genre?id1=10770'>TV Shows</Link></li>
                    <li><Link to='/genre?id1878&id2=14'>Sci-Fi & Fantasy</Link></li>
                    <li><Link to='/genre?id1=10749'>Romantic Movies</Link></li>
                    <li><Link to='/genre?id1=10402'>Music & Musical</Link></li>
                    <li><Link to='/genre?id1=28&id2=12'>Action & Adventure</Link></li>
                    <li><Link to='/genre?id1=99'>Documentaries</Link></li>

                </ul>
              </aside>
        </>
      

    )
}

export default SideBar