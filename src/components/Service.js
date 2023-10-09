import service from './Service.module.css';
import imagem from '../img/fundoimg.WEBP';

function Service() {
    return (
        <div className={service.serviceContainer}>
            <h1> Service </h1>
            <div className={service.serviceCard}>
                <div className={service.card}>
                    <img src={imagem} />
                    <div>
                        <h3>Desenvolvimento Web</h3>
                        <p> ReactJs, HTML5, CSS3,JS</p>
                    </div>

                </div>
                <div className={service.card}>
                    <img src={imagem} />

                    <div>
                        <h3>Desenvolvimento Web</h3>
                        <p> ReactJs, HTML5, CSS3,JS</p>
                    </div>

                </div>
                <div className={service.card}>
                    <img src={imagem} />

                    <div>
                        <h3>Desenvolvimento Web</h3>
                        <p> ReactJs, HTML5, CSS3,JS</p>
                    </div>

                </div>
                <div className={service.card}>
                    <img src={imagem} />
                    <div>
                        <h3>Desenvolvimento Web</h3>
                        <p> ReactJs, HTML5, CSS3,JS</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Service;