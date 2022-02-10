import {Component} from 'react'

import {FaEdit} from 'react-icons/fa'

import {AiOutlineDelete} from 'react-icons/ai'

import {PagesContainer,TopSearchbar,MembersList,MembersListItem,ListItemMember,CheckBox,SpanHighlight,ListButton,ListItemInput,} from './styledComponents'

class Pages extends Component{

    state={
        currentList: [], // key to store current page members
        name: '', // key to store name value
        email: '', // key to store nemail value
        role: '', // key to store role value
    }

    // class method to update name value

    nameValue= (e) => (
        this.setState({name: e.target.value})
    )

    // class method to update email value

    emailValue= (e) => (
        this.setState({email: e.target.value})
    )

    // class method to update role value

    roleValue= (e) => (
        this.setState({role: e.target.value})
    )

    localEditId= (value) => {
        const {editIdFunction}= this.props
        this.setState({name: '',email: '',role: ''},editIdFunction(value))
    }

    render(){
        const {blurChange,changeValueFunction,checkBoxIdList,currentPage,deleteItemFunction,editId,currentPageMembers,searchList,searchValue}= this.props
        const {name,email,role}= this.state

        // local function to call home checkbox class methods

        const checkBoxChange= (e) => {
            const {checkBoxIdAddFunction,checkBoxIdRemoveFunction,}= this.props
            if(e.target.checked){
                if(e.target.id.startsWith('0')){
                    const newArray= currentPageMembers.map(eachValue => eachValue.id)
                    newArray.push(`0${currentPage}`)
                    checkBoxIdAddFunction(newArray)
                }
                else{
                    checkBoxIdAddFunction(e.target.id)
                }
            }
            else{
                if(e.target.id.startsWith('0')){
                    const newArray= currentPageMembers.map(eachValue => eachValue.id)
                    newArray.push(`0${currentPage}`)
                    checkBoxIdRemoveFunction(newArray)
                }
                else{
                    checkBoxIdRemoveFunction(e.target.id)
                }
            }
        }

        // local function to call home change value function

        const localChangeValueFunction= (e) => {
            if(e.key === 'Enter'){
                changeValueFunction(name,email,role,e.target.id)
            }
        }

        return(
        <PagesContainer>
            <TopSearchbar type="search" value={searchValue} placeholder='Search by name, email or role' onChange={searchList} />
            <MembersList>
            <MembersListItem key='z' condition={false}>
                <ListItemMember>
                    <CheckBox type="checkbox" id={`0${currentPage}`} onChange={checkBoxChange} checked={checkBoxIdList.includes(`0${currentPage}`)} />
                </ListItemMember>
                <ListItemMember >
                    <SpanHighlight>Name</SpanHighlight>
                </ListItemMember>
                <ListItemMember >
                    <SpanHighlight>Email</SpanHighlight>
                </ListItemMember>
                <ListItemMember >
                    <SpanHighlight>Role</SpanHighlight>
                </ListItemMember>
                <ListItemMember >
                    <SpanHighlight>Actions</SpanHighlight>
                </ListItemMember>
            </MembersListItem>
        
                {
                    currentPageMembers.map(eachValue => 
                        <>
                        <MembersListItem key={eachValue.id} condition={checkBoxIdList.includes(eachValue.id)}>
                                <ListItemMember >
                                    <CheckBox id={eachValue.id} type="checkbox" onChange={checkBoxChange} checked={checkBoxIdList.includes(eachValue.id)} />
                                </ListItemMember>
                                {
                                        editId === eachValue.id ?
                                <>
                                <ListItemInput  value={name} onChange={this.nameValue} type="text" id={eachValue.id} placeholder={eachValue.name} onKeyDown={localChangeValueFunction} onBlur={() => blurChange(name,email,role,eachValue.id)}/>
                                <ListItemInput  value={email} onChange={this.emailValue} type="text" id={eachValue.id}  placeholder={eachValue.email} onKeyDown={localChangeValueFunction} onBlur={() => blurChange(name,email,role,eachValue.id)}/>
                                <ListItemInput  value={role} onChange={this.roleValue} type="text" id={eachValue.id} placeholder={eachValue.role} onKeyDown={localChangeValueFunction} onBlur={() => blurChange(name,email,role,eachValue.id)}/>
                                </>
                                :
                                <>
                                <ListItemMember >
                                {eachValue.name}
                                </ListItemMember>
                                <ListItemMember >
                                    {eachValue.email}
                                </ListItemMember>
                                <ListItemMember >
                                    {eachValue.role}
                                </ListItemMember>
                                </>}
                                <ListItemMember >
                                    <ListButton type='button' onClick={() => this.localEditId(eachValue.id)}>
                                    <FaEdit fontSize={15} color={'purple'}/>
                                    </ListButton>
                                    <ListButton type='button' onClick={() => deleteItemFunction(eachValue.id)}>
                                    <AiOutlineDelete fontSize={15} color={'tomato'} />
                                    </ListButton>
                                </ListItemMember>
                        </MembersListItem>              
                        </>
                        )
                }
            </MembersList>
        </PagesContainer>
        )
    }
}

export default Pages 