import contatct from './Contact.module.css';
import facebook from '../img/facebook_52px.png';
import github from '../img/github_24px.png';
import Telemovel from '../img/phone_26px.png';
import whatsap from '../img/whatsapp_64px.png';
import linkedim from '../img/linkedin_26px.png';
import fixo from '../img/Rotary Dial Telephone_24px.png';
import Service from './Service';


function Contact() {

    return (
        <div className={contatct.contactContainer}>
            <h1> Contact </h1>
            <div className={contatct.TypeContact}>
                <div id={contatct.cards}>
                    <p> Redes Socicais</p>
                    <a href='#'><img src={facebook} /></a>
                    <a href='#'><img src={whatsap} /></a>
                    <a href='#'><img src={linkedim} /></a>

                </div>
                <div id={contatct.cards}>
                    <p> Telemóvel e E-mail</p>
                    <a href='#'><img src={Telemovel} /></a>
                    <a href='#'> <img src={fixo} />  </a>
                </div>

                <div id={contatct.cards}>
                    <p> Repositório</p>
                    <a href='#'><img src={github} /> </a>
                </div>
            </div>
        </div>

    )

}
export default Contact;