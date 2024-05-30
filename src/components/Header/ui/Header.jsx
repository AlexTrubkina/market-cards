import iconSrc from '../../../assets/icon.svg'
import './style.scss'

export function Header ({ children }) { 
    return (
        <header className="header">
            <div className="header__contacts">
                <a className="header__logo" href="#">ЛОГО</a>
                <a className="header__phone" href='tel:+78129444490'>
                    +7 (812) <span> 944-4490</span>
                </a>
            </div>
            <div className="header__flag">
                <img src={iconSrc} alt="..." />
            </div>
        </header> 
    )
}