import styled from "styled-components"

export const PagesContainer= styled.div`
    width: 100%;
    min-height: 100vh;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    padding: 20px;
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
`
export const MembersListItem= styled.li`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    background-color: ${props => (props.condition ? '#acacac': 'transparent')};
    padding-botton: 15px;
    padding-top: 15px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: lightgrey;
`
export const ListItemMember= styled.p`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: black;
    font-size: 12px;
`
export const CheckBox= styled.input`
    width: 15px;
    height: 15px;
    outline: none;
`
export const SpanHighlight= styled.span`
    font-weight: bold;
`
export const HorizontalLine= styled.hr`
    width: 100%;
    height: 1px;
    background-color: lightgrey;
    border-style: none;
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
    `
export const ListItemInput= styled.input`
    width: 20%;
    height: 100%;
    color: black;
    font-size: 12px;
    border-style: none;
    outline: none;
`