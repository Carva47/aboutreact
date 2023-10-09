import banner from './banner.module.css';

function Banner() {

    return (<div className={banner.fundo}>
        <div className={banner.tittle}>
        <h2> Olá, bem-vindo ao meu Portfólio!</h2><br/>
        <h3>Eu Sou <span>Nvuala Carvalho.</span></h3>
        <br/>
        <span id={banner.catp}>Desenvolvedor | Técnico de TI | Professor e Fotógrafo</span>
        </div>
        
    </div>);
}
export default Banner;