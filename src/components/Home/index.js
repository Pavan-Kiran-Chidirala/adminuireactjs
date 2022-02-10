import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Pages from '../Pages'

import Pagination from '../Pagination'

import {MainHomeContainer,HomeLoaderContainer,HomeSuccessContainer,DeleteCheckBox,BottomContainer,} from './styledComponents.js'

const appConstants= {
    initial: 'INITIAL',
    progress: 'PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}


// This is the list which is displayed in the app
let newList= []

class Home extends Component{
    state={
        appStatus: appConstants.initial,
        membersList: [], // main list from the API call
        currentPage: 1,  
        membersPerPage: 10,
        checkBoxIdList: [], // A list to store selected checkboxes
        editId: '',  // key to store the id of the member to be edited
        searchValue: '', // key to store value entered in the searchbar
        sourceCheckBox: false, // key to handle top left checkbox behaviour
    }

    componentDidMount(){
        this.setState({appStatus: appConstants.progress},this.getMemberDetails)
    }

    // class method to get data from the API

    getMemberDetails= async() => {
        const response= await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
        const data= await response.json()
        if(response.ok){
            console.log(data)
            this.setState({appStatus: appConstants.success,membersList: data,})
        }
    }

    // class methods which are passed to pagination component
    // start

    //class method to set the current page value on numbered button click

    paginateFunction= (value) => (
        this.setState({currentPage: value})
    )

     //class method to set the current page value on icon button click

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
        else if(value === 'front-last' && currentPage !== (Math.ceil(newList.length/membersPerPage))){
            this.setState({currentPage: Math.ceil(newList.length/membersPerPage)})
        }
    }

    //end

    // class methods which are passed to pages component
    // start

    // class method to change input field values on edit

    changeValueFunction= (nameValue,emailValue,roleValue,id) => {
        const {membersList}= this.state
            const newList= membersList.map(eachValue => {
                if(id === eachValue.id){
                    return({
                        name: nameValue === ''?eachValue.name: nameValue,
                        id: eachValue.id,
                        email: emailValue === ''? eachValue.email: emailValue,
                        role: roleValue === ''? eachValue.role: roleValue,
                    })
                }
                return eachValue
            })
            this.setState({membersList: newList,editId: ''})
    }

    // class method to save edited values on blur event 

    blurChange= (nameValue,emailValue,roleValue,id) =>  {
        const {membersList}= this.state
            if(nameValue !== '' && emailValue !== '' && roleValue !== ''){
                const newList= membersList.map(eachValue => {
                    if(id === eachValue.id){
                        return({
                            name: nameValue === ''?eachValue.name: nameValue,
                            id: eachValue.id,
                            email: emailValue === ''? eachValue.email: emailValue,
                            role: roleValue === ''? eachValue.role: roleValue,
                        })
                    }
                    return eachValue
                })
                this.setState({membersList: newList,editId: ''})
            }
    }

    //class method to update search value

    searchList= (e) => (
        this.setState({searchValue: e.target.value,currentPage: 1})
    )

    //class method to delete a specific member

    deleteItem= (value) => {
        const {membersList}= this.state
        const newList= membersList.filter(eachValue => eachValue.id !== value)
        this.setState({membersList: newList})
    }

    // class method to delete the group of selected members in a page

    deleteSelected= () => {
        const {checkBoxIdList,membersList,currentPage,membersPerPage}= this.state
        const newList= membersList.filter(eachValue => !checkBoxIdList.includes(eachValue.id))
        const newCheckBoxIdList= checkBoxIdList.filter(eachValue => eachValue !== `0${currentPage}`)
        console.log(currentPage)
        let newCurrentPage= currentPage
        if(currentPage === (Math.ceil(newList.length/membersPerPage)+1)){
            newCurrentPage= currentPage-1
        }
        this.setState({membersList: newList,sourceCheckBox: true,checkBoxIdList: newCheckBoxIdList,currentPage: newCurrentPage})
    }

    // class method to add checkbox id/id's of selected member/members to the checkbox list

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

    // class method to remove checkbox id/id's of selected member/members from the checkbox list

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

    // class method to add the specific member id to be edited to the edit list

    editIdFunction =(value) => (
        this.setState({editId: value})
    )

    // end

    // home class methods
    // start

    // class method to show the loader when dealing with the asynchronus API call

    homeLoaderContainer =() => (
        <HomeLoaderContainer>
        <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
        </HomeLoaderContainer>
    )

    // class method to display the response on successful API call

    homeSuccessContainer= () => {
        const {membersList,currentPage,membersPerPage,checkBoxIdList,editId,searchValue,sourceCheckBox}= this.state
        newList= membersList.filter(eachValue => (eachValue.name.toLowerCase().includes(searchValue.toLowerCase()) || eachValue.email.toLowerCase().includes(searchValue.toLowerCase()) || eachValue.role.toLowerCase().includes(searchValue.toLowerCase())))
        const indexOfLastMember= currentPage * membersPerPage
        const indexOfFirstMember= indexOfLastMember - membersPerPage
        const currentPageMembers= newList.slice(indexOfFirstMember,indexOfLastMember)
        return (
            <HomeSuccessContainer>

                <Pages blurChange={this.blurChange} changeValueFunction={this.changeValueFunction} sourceCheckBox={sourceCheckBox} searchValue={searchValue} searchList={this.searchList} 
                changeListOnSearch={this.changeListOnSearch} editIdFunction={this.editIdFunction}  editId={editId} deleteItemFunction={this.deleteItem}
                currentPageMembers={currentPageMembers} currentPage={currentPage} checkBoxIdList={checkBoxIdList}
                checkBoxIdAddFunction={this.checkBoxIdAdd} checkBoxIdRemoveFunction={this.checkBoxIdRemove}/>

                <BottomContainer>
                <DeleteCheckBox type="button" onClick={this.deleteSelected} >Delete Selected</DeleteCheckBox>

                <Pagination paginateSpecial={this.paginateSpecialFunction} membersPerPage={membersPerPage} totalMembers={newList.length} 
                paginate={this.paginateFunction} currentPage={currentPage} />
                </BottomContainer>

            </HomeSuccessContainer>
        )
    } 

    // class method to check the app status

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

    // end
}

export default Home