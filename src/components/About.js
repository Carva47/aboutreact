import about from './About.module.css';

function About(){
    return (
    <div className={about.aboutMe}>
        <h1> About me</h1>
        <div id={about.textabout}>
    <p> Meu Nome é Nvuala Carvalho, estudante de Engenharia Informática, pelo<a href=''>Instituto Superior Politécnico Intercontinental de Luanda,</a>cursando o 5º e ultimo ano. </p>
        <p>Depios de 3 anos, estou estuando React Js, noavemente e do zero. Este é um portfólio imporovisado onde será feito do que eu for estudando.  Todo conhecimento novo sobre a tecnologia, será implementado aqui como meu teste de conhecimento. Até p momento já pude estudar sobre Instalação de pacotes, sobre os gerenciadores de pactes, como é constituido as app em ReactJS, Componentes e Propriedades bem como conexão com folhas de estilos. </p>
    </div>
        </div>
    
    );
}
export default About;