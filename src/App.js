import './App.css';
import './styles/btn.css';
import './styles/display.css';
import Btn from './components/Btn.jsx';
import Display from './components/Display.jsx';

function App() {
  return (
    <div className="App">
      <div className='calcilator-main'>
        <div className='cont-display'>
          <Display valueDisplay='0'/>
        </div>
        <div className='cont-btns'>
          <Btn singValue="1" classBtn={false} />
          <Btn singValue="2" classBtn={false} />
          <Btn singValue="3" classBtn={false} />
          <Btn singValue="+" classBtn={true} />
          <Btn singValue="4" classBtn={false} />
          <Btn singValue="5" classBtn={false} />
          <Btn singValue="6" classBtn={false} /> 
          <Btn singValue="-" classBtn={true} />
          <Btn singValue="7" classBtn={false} />
          <Btn singValue="8" classBtn={false} /> 
          <Btn singValue="9" classBtn={false} />
          <Btn singValue="*" classBtn={true} />
          <Btn singValue="=" classBtn={true} />
          <Btn singValue="0" classBtn={false} />
          <Btn singValue="." classBtn={true} />
          <Btn singValue="/" classBtn={true} />
        </div>
        <div className='cont-delete'>
          <Btn singValue="Delete" classBtn={true} btnDelete={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
