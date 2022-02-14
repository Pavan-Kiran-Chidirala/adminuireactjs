import styled from 'styled-components'

export const MainHomeContainer= styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: white;
    font-size: 40px;
    font-family: 'Roboto';
`
export const HomeLoaderContainer= styled.div`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HomeSuccessContainer= styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 0px;
`
export const BottomContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    @media screen and (max-width: 576px) {
       margin-top: 0px;
       margin-bottom: 10px; 
    }
`
export const DeleteCheckBox= styled.button`
    padding: 8px;
    background-color: #DC143C;
    color: white;
    font-size: 12px;
    border-radius: 5px;
    border-style: none;
    outline: none;
    margin: 20px;
    margin-top: 10px;
    margin-botton: 0px;
    @media screen and (max-width: 576px) {
        border-radius: 4px;
        font-size: 8px;
        padding: 5px;
        margin: 4px;
        width: 75px;
    }
`
export const HomeFailureContainer= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HomeFailureHeading= styled.h1`
    font-size: 25px;
`
export const RetryButton= styled.button`
    padding: 10px;
    font-size: 12px;
    border-style: none;
    outline: none;
    border-radius: 4px;
    background-color: royalblue;
    color: white;
`