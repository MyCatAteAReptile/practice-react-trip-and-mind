import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'lightblue'}}>
      <Header/>
      <h2>Открой для себя Новую Ирландию</h2>
      <p>Авторские туры по экзотическим уголкам от Ивана Иванова</p>
      <button></button>
      <button></button>
      <div>
        <p>Подписывайтесь в соцсетях</p>
        <ul>
          <li>yt</li>
          <li>fb</li>
          <li>X</li>
          <li>vk</li>
        </ul>
      </div>
      <ul>
        <li>Водопады Исландии</li>
        <li>Сказочные Доломиты</li>
        <li>Неизведанная Норвегия</li>
      </ul>
    </div>
  );
}

export default App;
