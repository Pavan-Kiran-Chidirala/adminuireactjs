import styled from "styled-components"

export const PaginationContainer= styled.ul`
    width: 90%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    pading: 0px;
    padding-left: 20%;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-right: 0px;
    @media screen and (max-width: 576px) {
        width: 90%;
        height: 30px;
        padding-left: 5%;
    }
`
export const PaginationItem= styled.li`
    width: 35px;
    height: 35px;
    border-radius: 25px;
    margin-right: 40px;
    @media screen and (max-width: 576px) {
        width: 18px;
        height: 18px;
        border-radius: 25px;
        margin-right: 10px;
    }
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
    @media screen and (max-width: 576px) {
        font-size: 8px;
    }
`
export const BackButton= styled(PaginationButtons)`
    background-color: ${props => (props.condition ? '#e5edf1': '#0070ff')};
    border-style: ${props => (props.condition ? 'solid': 'none')};
    border-color: ${props => (props.condition ? 'silver': 'transparent')};
    color: ${props => (props.condition ? 'grey': 'white')};
    `