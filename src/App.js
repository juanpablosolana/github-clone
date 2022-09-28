import Layout from './components/Layout';
import Profile from './components/Profile';
import Filters from './components/Filters';
import RepoList from './components/Repo-list';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList />
      <Search />
    </Layout>
  );
}

export default App;
