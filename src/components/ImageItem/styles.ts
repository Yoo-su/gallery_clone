import styled, { keyframes, css } from 'styled-components'

interface wrapperProps {
    imageUrl: string
}

interface contentProps {
    hovered: boolean,
    checked: boolean,
    multipleChecked:boolean
}

interface ulProps {
    open: boolean
}

const fadein = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const animationCss = css`
    animation:${fadein} 1s;
`;

export const Wrapper = styled.div<wrapperProps>`
    display:flex;
    width:21.5rem;
    height:15rem;
    background-size : cover;
    margin:0.55rem 0.55rem;
    border-radius:0.2rem;
    color:white;
    cursor:pointer;
    box-shadow:0 3px 5px rgba(0,0,0,0.3);
    z-index:2;

    :hover{
        background:rgba(0,0,0,0.8);

        & img{
            opacity:0.5;
            transition:opacity 0.5s;
        }
    }

    @media all and (min-width:0px) and (max-width:1260px){
        width:14.5rem;
        height:9.5rem;
    }
`;

export const Content = styled.div<contentProps>`
    position:relative;
    width:100%;

    & .checkBox{
        position:absolute;
        top:20px;
        left:15px;
        width:18px;
        height:18px;
        border:none;
        border-radius:0.1rem;
        color:white;
        z-index:1;
        background:${props => props.checked === true ? '#499DB3' : 'white'};
        visibility:${props => (props.hovered === true || props.checked === true) ? 'visible' : 'hidden'};

        & .checkIcon{
            pointer-events: none;
            visibility:${props => props.checked === true ? 'visible' : 'hidden'};
        }
    }

    & .threeDots{
        position:absolute;
        top:20px;
        right:15px;
        z-index:1;
        visibility:${props => (props.hovered === true && props.multipleChecked===false) ? 'visible' : 'hidden'};
    }

    & label{
        position:absolute;
        bottom:10px;
        right:10px;
        pointer-events: none;
        z-index:1;
    }

    & img{
        width:100%;
        height:100%;
        pointer-events:none;
        object-fit:cover;
        border-radius:0.2rem;
        z-index:0;
    }
`;

export const Ul = styled.ul<ulProps>`
    position:absolute;
    top:30px;
    right:15px;
    z-index:1;
    list-style:none;
    border-radius:0.2rem;
    background:white;
    color:black;
    text-align:center;
    letter-spacing:1px;
    padding:0.1rem 0;
    visibility:${props => props.open === true ? 'visible' : 'hidden'};
    ${props => props.open === true && animationCss};
`;

export const Li = styled.li`
    list-style:none;
    padding:0.2rem 0.8rem;
    font-size:14px;

    :hover{
        background:#6DB2C5;
        color:white;
    }
`;