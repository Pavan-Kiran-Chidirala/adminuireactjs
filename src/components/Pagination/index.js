import { Component } from "react"

import {AiOutlineLeft,AiOutlineDoubleLeft,AiOutlineRight,AiOutlineDoubleRight} from 'react-icons/ai'

import {PaginationContainer,PaginationItem,PaginationButtons,BackButton} from './styledComponents'

class Pagination extends Component{
    render(){
        const {membersPerPage,totalMembers,paginate,currentPage,paginateSpecial}= this.props
        const pageNumbers= []
        for (let i=1; i<=Math.ceil(totalMembers/membersPerPage); i++){
            pageNumbers.push(i)
        }
        return(
            <PaginationContainer data-testid='paginationlist'>
                <PaginationItem key='back-first'>
                <BackButton type="button"  condition={currentPage<2} onClick={() => paginateSpecial('back-first')}>
                        <AiOutlineDoubleLeft />
                </BackButton>
                </PaginationItem>
                <PaginationItem key='back'>
                <BackButton type="button" condition={currentPage<2} onClick={() => paginateSpecial('back')}>
                        <AiOutlineLeft />
                    </BackButton>
                </PaginationItem>
                {pageNumbers.map(eachValue => 
                <PaginationItem key={eachValue}>
                    <PaginationButtons type="button" onClick={() => paginate(eachValue)} condition={parseInt(currentPage) === parseInt(eachValue)? true:false}>
                        {eachValue}
                    </PaginationButtons>
                </PaginationItem>
                )
                }
                <PaginationItem key='front'>
                <BackButton type="button" condition={currentPage>(Math.ceil(totalMembers/membersPerPage)-1)} onClick={() => paginateSpecial('front')}>
                        <AiOutlineRight />
                    </BackButton>
                </PaginationItem>
                <PaginationItem key='front-last'>
                <BackButton type="button"  condition={currentPage>(Math.ceil(totalMembers/membersPerPage)-1)} onClick={() => paginateSpecial('front-last')}>
                        <AiOutlineDoubleRight />
                    </BackButton>
                </PaginationItem>
            </PaginationContainer>
        )
    }
}

export default Pagination