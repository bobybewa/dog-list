import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyled = styled.button`
background-color : gray;
border: none;
position: relative;
top: 1em;
left: 1em;
font-size: 1em;
padding: 1em;
border-radius: 3em;
font-weight: bold;
text-transform:capitalize
`
const BackButton = () => {
    const h = useHistory()
    return <ButtonStyled onClick={() => h.push('/')}>Back To List Dog</ButtonStyled>
}

export default BackButton