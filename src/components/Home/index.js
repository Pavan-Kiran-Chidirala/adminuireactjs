import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Pages from '../Pages'

import Pagination from '../Pagination'

import {MainHomeContainer,HomeLoaderContainer,HomeSuccessContainer,DeleteCheckBox,} from './styledComponents.js'

const appConstants= {
    initial: 'INITIAL',
    progress: 'PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

let newList= []

class Home extends Component{
    state={
        appStatus: appConstants.initial,
        membersList: [],
        currentPage: 1,
        membersPerPage: 10,
        checkBoxIdList: [],
        editId: '',
        searchValue: '',
        sourceCheckBox: false,
    }

    componentDidMount(){
        this.setState({appStatus: appConstants.progress},this.getMemberDetails)
    }

    getMemberDetails= async() => {
        const response= await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
        const data= await response.json()
        if(response.ok){
            console.log(data)
            this.setState({appStatus: appConstants.success,membersList: data,})
        }
    }

    paginateFunction= (value) => (
        this.setState({currentPage: value})
    )

    paginateSpecialFunction= (value) => {
        const {currentPage,membersPerPage}= this.state
        if(value === 'back' && currentPage !== 1){
            this.setState(prevState => ({currentPage: prevState.currentPage-1}))
        }
        else if(value === 'back-first' && currentPage !== 1){
            this.setState({currentPage: 1})
        }
        else if(value === 'front' && currentPage !== (Math.ceil(newList.length/membersPerPage))){
            this.setState(prevState => ({currentPage: prevState.currentPage + 1}))
        }
        else{
            this.setState({currentPage: Math.ceil(newList.length/membersPerPage)})
        }
    }

    nameChange= (e) => {
        const {membersList}= this.state
        console.log(e.key)
        if(e.key === 'Enter'){
            const newList= membersList.map(eachValue => {
                if(e.target.id === eachValue.id && e.target.value !== ''){
                    return({
                        name: e.target.value,
                        id: eachValue.id,
                        email: eachValue.email,
                        role: eachValue.role,
                    })
                }
                return eachValue
            })
            this.setState({membersList: newList,editId: ''})
        }
    }

    emailChange= (e) => {
        const {membersList}= this.state
        if(e.key === 'Enter'){
            const newList= membersList.map(eachValue => {
                if(e.target.id === eachValue.id && e.target.value !== ''){
                    return({
                        name: eachValue.name,
                        id: eachValue.id,
                        email: e.target.value,
                        role: eachValue.role,
                    })
                }
                return eachValue
            })
            this.setState({membersList: newList,editId: ''})
        }
    }

    roleChange= (e) => {
        const {membersList}= this.state
        if(e.key === 'Enter'){
            const newList= membersList.map(eachValue => {
                if(e.target.id === eachValue.id && e.target.value !== ''){
                    return({
                        name: eachValue.name,
                        id: eachValue.id,
                        email: eachValue.email,
                        role: e.target.value,
                    })
                }
                return eachValue
            })
            this.setState({membersList: newList,editId: ''})
        }
    }

    searchList= (e) => (
        this.setState({searchValue: e.target.value,currentPage: 1})
    )

    deleteItem= (value) => {
        const {membersList}= this.state
        const newList= membersList.filter(eachValue => eachValue.id !== value)
        this.setState({membersList: newList})
    }

    checkBoxIdAdd= (value) => {
        const {checkBoxIdList}= this.state
        if(typeof value  !== 'string'){
            const newValues= value.filter(eachValue => !checkBoxIdList.includes(eachValue) )
            this.setState(prevState => ({checkBoxIdList: [...prevState.checkBoxIdList,...newValues],sourceCheckBox: false}))
        }
        else{
            this.setState(prevState => ({checkBoxIdList: [...prevState.checkBoxIdList,value],sourceCheckBox: false}))
        }
    }

    checkBoxIdRemove= (value) => {
        const {checkBoxIdList}= this.state
        if(typeof value  !== 'string'){
            const newValues= checkBoxIdList.filter(eachValue => !value.includes(eachValue) )
            this.setState({checkBoxIdList: [newValues]})
        }
        else{
            const newCheckList= checkBoxIdList.filter(eachValue => eachValue !== value)
            this.setState({checkBoxIdList: newCheckList})
        }
    }

    editIdFunction =(value) => (
        this.setState({editId: value})
    )

    deleteSelected= () => {
        const {checkBoxIdList,membersList,currentPage,membersPerPage}= this.state
        const newList= membersList.filter(eachValue => !checkBoxIdList.includes(eachValue.id))
        const newCheckBoxIdList= checkBoxIdList.filter(eachValue => eachValue !== `0${currentPage}`)
        console.log(currentPage)
        let newCurrentPage= currentPage
        if(currentPage === (Math.ceil(newList.length/membersPerPage)+1)){
            newCurrentPage= currentPage-1
        }
        console.log(Math.ceil(newList.length/membersPerPage))
        this.setState({membersList: newList,searchValue: '',sourceCheckBox: true,checkBoxIdList: newCheckBoxIdList,currentPage: newCurrentPage})
    }


    homeLoaderContainer =() => (
        <HomeLoaderContainer>
        <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
        </HomeLoaderContainer>
    )

    homeSuccessContainer= () => {
        const {membersList,currentPage,membersPerPage,checkBoxIdList,editId,searchValue,sourceCheckBox}= this.state
        newList= membersList.filter(eachValue => (eachValue.name.includes(searchValue) || eachValue.email.includes(searchValue) || eachValue.role.includes(searchValue)))
        const indexOfLastMember= currentPage * membersPerPage
        const indexOfFirstMember= indexOfLastMember - membersPerPage
        const currentPageMembers= newList.slice(indexOfFirstMember,indexOfLastMember)
        return (
            <HomeSuccessContainer>
                <Pages sourceCheckBox={sourceCheckBox} searchValue={searchValue} searchList={this.searchList} changeListOnSearch={this.changeListOnSearch} editIdFunction={this.editIdFunction} nameChange={this.nameChange} emailChange={this.emailChange} roleChange={this.roleChange} editId={editId} deleteItemFunction={this.deleteItem} currentPageMembers={currentPageMembers} currentPage={currentPage} checkBoxIdList={checkBoxIdList} checkBoxIdAddFunction={this.checkBoxIdAdd} checkBoxIdRemoveFunction={this.checkBoxIdRemove}/>
                <DeleteCheckBox type="button" onClick={this.deleteSelected} >Delete Selected</DeleteCheckBox>
                <Pagination paginateSpecial={this.paginateSpecialFunction} membersPerPage={membersPerPage} totalMembers={newList.length} paginate={this.paginateFunction} currentPage={currentPage} />
            </HomeSuccessContainer>
        )
    } 

checkCondition = () => {
    const {appStatus}= this.state
    switch (appStatus) {
        case appConstants.success:
            
            return this.homeSuccessContainer()
        
        default:
            return this.homeLoaderContainer()
    }
}

    render(){
        return(
            <MainHomeContainer>
            {this.checkCondition()}
            </MainHomeContainer>
        )
    }
}

export default Home