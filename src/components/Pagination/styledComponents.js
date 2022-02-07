import styled from "styled-components"

export const PaginationContainer= styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    pading: 0px;
`
export const PaginationItem= styled.li`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    margin-right: 20px;
`
export const PaginationButtons= styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.condition ? 'transparent': '#0070ff')};
    border-style: ${props => (props.condition ? 'solid': 'none')};
    border-color: ${props => (props.condition ? '#0070ff': 'transparent')};
    outline: none;
    border-radius: 25px;
    color: ${props => (props.condition ? '#0070ff': 'white')};
    font-size: 12px;
`
export const BackButton= styled(PaginationButtons)`
    background-color: ${props => (props.condition ? '#e5edf1': '#0070ff')};
    border-style: ${props => (props.condition ? 'solid': 'none')};
    border-color: ${props => (props.condition ? 'silver': 'transparent')};
    color: ${props => (props.condition ? 'grey': 'white')};
    `