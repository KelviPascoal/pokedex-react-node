import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import { Header } from './components/Header'
import { Global } from './styles/Global';

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;
