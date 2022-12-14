import Layout from './components/Layout';
import Profile from './components/Profile';
import Filters from './components/Filters';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users'
import { useParams } from 'react-router-dom'
import Modal from './modal'

function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'juanpablosolana'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [filterOption, setFilterOption] = useState('')

  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })

    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado los repos de este crack')
        return
      }
      setRepos(data)
    })
    setFilterOption('')
  }, [username])

  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters setSearch={setSearch} repoList={repos} setFilterOption={setFilterOption} />
      <RepoList search={search} repoList={repos} filterOption={filterOption} />
      <Search setModal={setModal} />
    </Layout>
  )

}

export default App;