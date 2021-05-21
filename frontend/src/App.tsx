import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import { Header } from './components/header'

const App: React.FC = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}


export default App;
