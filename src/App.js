import Layout from './components/Layout';
import Profile from './components/Profile';
import Filters from './components/Filters';
import RepoList from './components/RepoList';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <Layout>
      <div><Profile /></div>
      <div><Filters /></div>
      <div><RepoList /></div>
      <div><Search /></div>
    </Layout>
  );
}

export default App;
