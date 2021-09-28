import './header.css'
import imgHeader from '../img/img_header_blog.jpg'
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
            <span className="headerTitleLg">O Calçadão</span>
                <span className="headerTitleSm">React & Node</span>
                
            </div>
            <img className="headerImg" src={imgHeader} alt="" />           
        </div>
    )
}
