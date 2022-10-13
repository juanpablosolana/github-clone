import styled from 'styled-components'
import InputText from './Input-text'
import Selector from './Selector'
import Separator from './Separator'

const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }
  .action-list {
    display: flex;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: .5rem;
  }
  .select{
     border: none;
     background: var(--button-bg);
     color: var(--white);
     padding-inline: 1rem;
  }
`

function Filters({ repoList, setSearch, setFilterOption }) {

  const languages = repoList.reduce((acc, item) => {
    if (!acc.includes(item.language)) {
      acc.push(item.language)
    }
    return acc
  }, [])

  function handleChange({ target }) {
    setSearch(target.value)
  }

  function handlerSelectorChange({ target }) {
    setFilterOption(target.value)
  }

  return (
    <FiltersStyled>
      <h2 className="count">
        Repositorios {repoList.length}
      </h2>
      <div className="action-list">
        <InputText
          placeholder="Busca un repositorio"
          type="search"
          onChange={handleChange}
        />
        <div className="select-list">
          <Selector>
            <option value="all" >all</option>
            <option value="forks">forks</option>
          </Selector>
          <select onChange={handlerSelectorChange} className="select">
            <option value="lenguaje" disabled>lenguaje</option>
            {
              languages.map((item) => {
                if (item !== null) {
                  return <option value={item} key={item} onChange={handlerSelectorChange}>{item}</option>
                }
                return null
              })
            }
          </select>
          <Selector>
            <option value="ordenar" disabled>ordenar</option>
            <option value="stars">stars</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  )
}

export default Filters
