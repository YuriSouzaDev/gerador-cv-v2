import Curriculum from './components/Curriculum/Curriculum';
import Sidenav from './components/Sidenav/Sidenav';
import { ContextProvider } from './components/useContent/Context';

function App() {
  return (
    <ContextProvider>
      <div className="container-lg">
        <Sidenav />
        <Curriculum />
      </div>
    </ContextProvider>
  );
}

export default App;
