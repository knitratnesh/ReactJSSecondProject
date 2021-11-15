import logo from './logo.svg';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:'black'}}>
      <img className="App-logo" src={logo} style={{height:'100px'}} alt="Image"/>
      </div>
      <UserList />
    </div>
  );
}

export default App;
