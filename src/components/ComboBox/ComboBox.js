import './ComboBox.css';

export const ComboBox = (props) => {
    return(
        <div className='combo-box'>
            
            <label>{props.label}</label>
            <select 
                required={props.obrigatorio} 
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)}   
            >
                <option disabled={false} value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
            
        </div>
    );
}