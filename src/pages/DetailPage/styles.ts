import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Header = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    padding:0.6rem 0;
    box-shadow:0 1px 2px rgba(0,0,0,0.3);

    & .detail_header_left{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right:auto;
        padding-left:2.5rem;

        & .detail_closeBtn{
            display:flex;
            justify-content:center;
            align-items:center;
            background:#F3F4F4;
            padding:0.3rem 0.5rem;
            border-radius:0.5rem;
            margin-right:0.5rem;
        
            :hover{
                background:#BEBEBE;
                transition:background 0.2s linear;
            }
        }

        & .closeIcon{
            width:1.5rem;
            height:1.5rem;
        }

        & .detail_simpleInfo{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:start;
            font-size:12px;
        }
    }

    & .detail_header_right{
        display:flex;
        align-items:center;
        margin-left:auto;
        padding-right:2.5rem;
        text-align:right;

        & .detail_downloadBtn{
            display:flex;
            align-items:center;
            padding:0.2rem 0.4rem;
            background:#F3F4F4;
            border-radius:0.2rem;
            cursor:pointer;
            letter-spacing:0.6px;
            margin-right:0.5rem;
            height:1.8rem;

            & .downloadIcon{
                margin-right:0.5rem;
                width:1.2rem;
                height:1.2rem;
            }
        }

        & .detail_trashBtn{
            display:flex;
            align-items:center;
            padding:0.2rem 0.4rem;
            background:#F3F4F4;
            border-radius:0.2rem;
            cursor:pointer;
            height:1.8rem;

            & .trashIcon{
                width:1.2rem;
                height:1.2rem;
            }
        }
    }
    
`;

export const Content = styled.div`
    display:flex;
    position:relative;
    justify-content:center;
    align-items:center;
    width:100%;

    & .backIcon, .forwardIcon{
        position:absolute;
        top:45%;
        background:#F3F4F4;
        padding:0.3rem 0.5rem;
        width:1.5rem;
        height:1.5rem;
        border-radius:0.4rem;
        cursor:pointer;

        :hover{
            background:#EBEBEB;
            transition:background 0.2s linear;
        }
    }

    & .backIcon{
        left:1rem;
    }

    & .forwardIcon{
        right:1rem;
    }

    & img{
        width:81%;
        max-height:698px;
        object-fit:cover;

        @media all and (min-width:0px) and (max-width:1260px){
            width:100%;
            margin-top:3rem;
        }
    }
    `;