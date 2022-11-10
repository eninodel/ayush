import React, {useEffect} from 'react'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router'

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

const HiddenText = styled.div`
    color: white;
    position: absolute;
    height: 50px;
    top: 0;
`

export const PageFourth = () => {
    const navigate = useNavigate()

    useEffect(() => {
        console.log("Good job, let's see how far you can take this")
    },[])

    return (
        <PageHomeContainer>
            <HiddenText>This might be useful....</HiddenText>
            <ContentContainer>
                <TextArea>inspect</TextArea>
                <StyledButton onClick={() => navigate('/')}>Give me the answer now!</StyledButton>
            </ContentContainer>
        </PageHomeContainer>
    )
}