import Colaborador from '../Colaborador'
import './Time.css';
import hexToRgba from 'hex-to-rgba';

export const Time = (props) => {
    
    const css = {backgroundColor: hexToRgba(props.cor, '0.6'), backgroundImage: 'url(/images/fundo.png)'}

    return(
        props.colaboradores.length > 0 && <section className="time" style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className="input-cor" />

            <h3 style={{borderColor: props.cor}} >{props.nome}</h3>
            
            <div className='colaboradores' >
                {props.colaboradores.map((colaborador, indice) => {

                    return (<Colaborador
                        key={indice} 
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.cor}
                        aoDeletar={props.aoDeletar}
                    />);
                })} 
            </div>
        </section>
    )
}