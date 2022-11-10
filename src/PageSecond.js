import React from 'react'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'

const PageHomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentContainer = styled.div`
    width: max-content;
    height: 100px;
    text-align: center;
    font-size: 40px;
`

const TextArea = styled.div`

`

const StyledButton = styled.button`
    height: 30px;
    width: 100%;
`

export const PageSecond = () => {
    const navigate = useNavigate()
    return (
        <PageHomeContainer>
            <ContentContainer>
                <TextArea>Fine, I'll give you the answer</TextArea>
                <TextArea></TextArea>
                <div style={{width: '100%', display: 'flex', justifyContent: "space-between"}}>
                    <StyledButton onClick={() => navigate('/')}>Answer</StyledButton>
                </div>
            </ContentContainer>
        </PageHomeContainer>
    )
}