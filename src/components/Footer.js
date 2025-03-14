import { pageLinks,socialLink } from "../Data"
function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((list)=>{
          const {id, href, text} = list
          return(
            <li key={id}>
          <a href={href} className="footer-link">{text}</a>
        </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLink.map((list)=>{
          const{id, href, icon} = list
          return(
            <li key={id}>
          <a href={href} target="_blank" rel='noreferrer' className="footer-icon"
            ><i className={icon}></i
          ></a>
        </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer