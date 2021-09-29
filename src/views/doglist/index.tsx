import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { setFetchDog } from '../../store/reducer/creator'
import styled from 'styled-components'
import Card from '../../components/card/card'
import SearchBox from '../../components/input';
const Button = styled.button`
border:none;
padding:1em;
position: relative;
left:1em;
font-weight:bold;
background-color:gray;
// color:white;
font-size:1em;
border-radius:4em
`

// const Grid = styled.div`
// display:grid;
// grid-template-columns: auto auto;
// grid-template-rows: auto auto;
// grid-gap: 10px;
// `

function ListDog() {
  const listDog = useSelector((state: any) => state.listDog)
  const h = useHistory()
  const isLoading = useSelector((state: any) => state.isLoading)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setFetchDog())
  }, [dispatch])
  if (isLoading) return <h1>loading...</h1>
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>List Dog</h1>
      {/* <Grid> */}

        <Button onClick={() => h.push('/dog-pictures')}>Dogs Gallery</Button>
        <SearchBox />
      {/* </Grid> */}
      <Card data={listDog} type="listDog" />
    </div>
  );
}

export default ListDog;
