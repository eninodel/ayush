import React, { useState } from 'react'
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
const list_of_bigs = [
    "Ashley",
    "Audrey",
    "Bekah",
    "Edwin",
    "Gautam",
    "Hari",
    "Iris",
    "Jordan",
    "Justin",
    "Kris",
    "Kristie",
    "Linz",
    "Mark",
    "Patrick",
    "Uzair",
    "William"
]

const Bigs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    height: 100%;
    font-size: 15px;
`

const CheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`


export const PageThird = () => {
    const navigate = useNavigate()
    const [selectedBigs, setSelectedBigs] = useState([])
    const [showContinue, setShowContinue] = useState(false)
    return (
        <PageHomeContainer>
            <ContentContainer>
                <TextArea>Ok, guess your Big</TextArea>
                <Bigs>
                    {list_of_bigs.map((big) => {
                        return (
                            <CheckBox key={big}>
                                <input type="radio" id={big} name="big" value={big} onChange={() => {
                                    if (!selectedBigs.includes(big)) {
                                        setSelectedBigs([...selectedBigs, big])
                                    }
                                }} />
                                <label htmlFor={big}>{big}</label>
                            </CheckBox>
                        )
                    })}
                </Bigs>
                <StyledButton onClick={() => {
                    if (selectedBigs.length === list_of_bigs.length) {
                        
                        setShowContinue(true)
                    } else {
                        alert("Wrong, guess again")
                    }
                }}>Submit</StyledButton>
                {showContinue && 
                    <>
                        <TextArea>Hmmm, you didn't seem</TextArea>
                        <TextArea>to guess right...</TextArea>
                        <StyledButton onClick={() => navigate('/fourth')}>I guess you'll never find out who I am...</StyledButton>
                    </>
                }
            </ContentContainer>
        </PageHomeContainer>
    )
}