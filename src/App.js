import Counter from './Components/Counter';
import './App.css';

function App() {
  return (
    <div className='conteudo'>
      <h3>Bem-vindo(a) ao CLICKTEST!</h3>
      <p>Site criado por <a href='https://www.lorranrocha.com/' target="_blank">Lorran Rocha</a> com o intuito de ver, quantos cliques você consegue dar, até se cansar!</p>
      <p>Quando estiver pronto(a), é só começar a clicar no quadrado marrom, logo abaixo! Boa sorte!</p>

      <Counter />
    </div>
  );
}

export default App;
