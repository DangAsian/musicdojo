import styled, {css} from 'styled-components'

export const Badge = styled.span`
    padding: 5px 10px;
    border: 1px solid #333;
    background-color: #ccc;
    font: #333;
    ${({isActive}) => isActive && css`
        border: 1px solid #ccc;
        background-color: #333;
        color: #ccc;
    `}
`