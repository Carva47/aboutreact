import header from './Header.module.css';

function Header() {
    return (
        <header className={header.headerContainer}>
                 
                 <div className={header.logo}>
                    <h1><a href='#'>NC</a></h1>
                    </div> 
                  <div className={header.menuList}>
                       <ul>  
                        <li><a href=""> Home </a></li>
                        <li><a href=""> About-me</a></li>
                        <li><a href=""> Service</a></li>
                        <li><a href=""> Contact</a></li>
                    </ul>
               
          </div>
          
        </header>
  
    );
}
export default Header;
