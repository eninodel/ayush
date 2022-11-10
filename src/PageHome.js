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
`

const HiddenText = styled.div`
    color: white;
    position: absolute;
    height: 50px;
    top: 0;
`

export const PageHome = () => {
    const navigate = useNavigate()
    return (
        <PageHomeContainer>
            <HiddenText>Find me here: (47.66348578783742, -122.2998381483232)</HiddenText>
            <ContentContainer>
                <TextArea>Welcome, Ayush. This is easy, right?</TextArea>
                <TextArea>I hope you're ready for a challenge</TextArea>
                <div>
                    <StyledButton onClick={() => navigate('/first')}>Start</StyledButton>
                </div>
            </ContentContainer>
        </PageHomeContainer>
    )
}