import styled from 'styled-components'

const NoReposStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--headline2-semi-bold);
  color: var(--white);
`

function NoRepos() {
  return (
    <NoReposStyled>
      <span>
        No hay repositorios
      </span>
    </NoReposStyled>
  )
}

export default NoRepos
