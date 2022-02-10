import styled from "styled-components"

export const PagesContainer= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 10px;
    @media screen and (max-width: 576px) {
        padding: 8px;
    }
    
`
export const TopSearchbar= styled.input`
    width: 100%;
    height: 30px;
    padding: 6px;
    color: grey;
    font-size: 12px;
    border-style: solid;
    border-color: lightgrey;
    border-radius: 5px;
    outline: none;
`
export const MembersList= styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    list-style-type: none;
    margin-bottom: 0px;
    @media screen and (max-width: 576px) {
        margin-top: 10px;
    }
`
export const MembersListItem= styled.li`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => (props.condition ? '#acacac': 'transparent')};
    padding: 15px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: lightgrey;
    @media screen and (max-width: 576px) {
       padding: 8px;
       padding-bottom: 0px;
       padding-top: 0px;
    }
`
export const ListItemMemberLg= styled.p`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: black;
    font-size: 12px;
    @media screen and (max-width: 576px) {
        width: 30%;
        font-size: 8px;
        align-items: center;
    }
`
export const ListItemMemberSm= styled.p`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: black;
    font-size: 12px;
    @media screen and (max-width: 576px) {
        width: 13%;
        font-size: 8px;
        align-items: center;
    }
`
export const CheckBox= styled.input`
    width: 15px;
    height: 15px;
    outline: none;
    @media screen and (max-width: 576px) {
        width: 10px;
        height: 10px;
    }
`
export const SpanHighlight= styled.span`
    font-weight: bold;
`
export const ListButton= styled.button`
    width: 22px;
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-contant: center;
    align-items: flex-start;
    background-color: transparent;
    border-style: none;
    outline: none;
    margin-top: 0px;
    padding: 0px;
    font-size: 15px;
    @media screen and (max-width: 576px) {
        width: 10px;
        height: 10px;
        font-size: 8px;
    }
    `
export const ListItemInputLg= styled.input`
    width: 20%;
    height: 100%;
    color: black;
    font-size: 12px;
    border-style: none;
    outline: none;
    @media screen and (max-width: 576px) {
        width: 30%;
        font-size: 8px;
        align-items: center;
    }
`
export const ListItemInputSm= styled.input`
    width: 20%;
    height: 100%;
    color: black;
    font-size: 12px;
    border-style: none;
    outline: none;
    @media screen and (max-width: 576px) {
        width: 13%;
        font-size: 8px;
        align-items: center;
    }
`