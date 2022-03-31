import styled, { keyframes } from 'styled-components';

interface checkboxProps {
    checked: boolean
}

const fadein = keyframes`
    from {
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Header = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    padding:1.5rem 0;
    height:1.5rem;
    box-shadow:0 1px 1px rgba(0,0,0,0.2);

    & .headerLeft{
        display:flex;
        align-items:center;
        width:10rem;
        margin-right:auto;
        justify-content:start;
        padding-left:2.5rem;
        white-space: nowrap;
        overflow: visible;
        animation:${fadein} 1s;
 
        & .checked_left{
            display:flex;
            justify-content:start;
            align-items:center;

            & .whole_check{
                display:flex;
                justify-content:start;
                align-items:center;
                margin-left:0.8rem;

                & label{
                    margin-left:0.5rem;
                    font-size:14px;
                }
            }
        }
    }

    & .headerCenter{
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
    }

    & .headerRight{
        display:flex;
        justify-content:end;
        align-items:center;
        width:10rem;
        margin-left:auto;
        padding-right:2.5rem;
        animation:${fadein} 1s;

        & .checked_right{
            display:flex;
            justify-content:space-around;
            align-items:center;

            & .downIcon, .trashIcon, label{
                display:flex;
                align-items:center;
                justify-content:center;
                border:1px solid #CAC7C4;
                border-radius:0.2rem;
                margin:0 0.5rem;
                padding:0.3rem 0.4rem;
                height:1.1rem;
                cursor:pointer;

                :hover{
                    color:#6DB2C2;
                    border:1px solid #6DB2C2;
                }
            }

            & label{
                white-space:nowrap;
                overflow:visible;
                font-size:14px;
            }
        }
    }
`;

export const CheckBox = styled.div<checkboxProps>`
    display:flex;
    width:18px;
    height:18px;
    border:1px solid #BEBEBE;
    border-radius:0.1rem;
    cursor:pointer;
    background:${props => props.checked === true ? '#499DB3' : 'white'};

    & .checkIcon{
        pointer-events: none;
        color:white;
        visibility:${props => props.checked === true ? 'visible' : 'hidden'};
    }

`;

export const ItemContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin:1rem 0;
`;