import styled from 'styled-components'

export const MainHomeContainer= styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: white;
    font-size: 40px;
    font-family: 'Roboto';
    padding-bottom: 20px;
`
export const HomeLoaderContainer= styled.div`
    width: 100v%;
    height: 100vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HomeSuccessContainer= styled(HomeLoaderContainer)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const DeleteCheckBox= styled.button`
    padding: 8px;
    background-color: #DC143C;
    color: white;
    font-size; 12px;
    border-radius: 5px;
    border-style: none;
    outline: none;
    margin: 20px;
`