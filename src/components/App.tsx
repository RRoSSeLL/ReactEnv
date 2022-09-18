import GreetUser from './GreetUser/GreetUser';
import './App.css';

export const App = () : JSX.Element => (
  <div className="app-root">
    <GreetUser user="Dev"/>
  </div>
);

export default App;