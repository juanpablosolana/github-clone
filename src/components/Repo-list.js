import styled from 'styled-components'
import RepoItem from './Repo-item'

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

function RepoList({ repoList, search, filterOption }) {
  let list = repoList

  if (filterOption !== '') {
    list = list.filter((item) => {
      return item.language === filterOption
    })
  }

  if (search !== '') {
    list = list.filter((item) => {
      return item.name.search(search) >= 0
    })
  }
  return (
    <RepoListStyled>
      {
        list.map((item) => {
          return <RepoItem {...item} key={item.id} />
        })
      }
    </RepoListStyled>
  )
}

export default RepoList

