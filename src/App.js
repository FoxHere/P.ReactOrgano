import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Rodape from './components/Rodape';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
      
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE0F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    },
  ])

  const inicial =[
    {
      id: uuidv4(),
      nome: 'Vitor Florêncio',
      cargo: 'Desenvolvedor',
      imagem: 'https://github.com/foxhere.png',
      time: times[0].nome
    }
  ];

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador ])
  }

  function deletarColaborador() {
    console.log("Colaborador deletado");

  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map( time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <section className="times">
        <h1>Minha organização</h1>
          {times.map((time, indice) => 
          <Time 
            mudarCor={mudarCorDoTime}
            key={indice} 
            id={time.id}
            nome={time.nome}
            cor={time.cor} 
            aoDeletar={deletarColaborador}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            
          />)}
      </section>
      
      <Rodape/>
      
    </div>
  );
}

export default App;
