import styled from 'styled-components';

interface buttonProps{
    color:string,
    bgColor:string
}

export const CustomButton=styled.button<buttonProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    border-radius:1rem;
    background:${props=>props.bgColor};
    color:${props=>props.color};
    padding:1rem 2rem;
    margin:0.2rem 0;
    cursor:pointer;
    width:18rem;
`;