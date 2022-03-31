import { Wrapper, Header, Content } from "./styles";
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCloseSharp, IoDownloadOutline, IoTrashOutline, IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { views } from '../../recoil/view';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { getDate } from "../../util/getDate";
import { useState } from 'react';
import { saveAs } from 'file-saver'
import WarningModal from '../../components/WarningModal';

type LocationProps = {
    state: {
        url: string,
        idx: number
    };
};

export default function DetailPage() {
    const location = useLocation() as unknown as LocationProps;
    const [curImageUrl, setCurImageUrl] = useState(location.state.url);
    const [curIdx, setCurIdx]=useState(location.state.idx);
    const curViews=useRecoilValue(views);
    const [modalOn,setModalOn]=useState(false);
    const curDate = getDate();
    const navigate=useNavigate();

    return (
        <Wrapper>
            <WarningModal open={modalOn} setOpen={setModalOn} items={curImageUrl} />
            <Header>
                <div className="detail_header_left">
                    <div className="detail_closeBtn" onClick={()=>{
                        navigate('/');
                    }}>
                        <IoCloseSharp className="closeIcon" />
                    </div>

                    <div className="detail_simpleInfo">
                        <label>{curDate}</label>
                        <b>해상도: 3840x2160</b>
                    </div>
                </div>
                <div className="detail_header_right">
                    <div className="detail_downloadBtn" onClick={()=>{
                        saveAs(curImageUrl, curImageUrl);
                    }}>
                        <IoDownloadOutline className="downloadIcon" />
                        다운로드
                    </div>
                    <div className="detail_trashBtn" onClick={()=>{

                    }}>
                        <IoTrashOutline className="trashIcon" onClick={()=>{
                            setModalOn(true);
                            //setCurViews(curViews.filter(view=>view._id!==curImageUrl));
                            //navigate('/');
                        }} />
                    </div>
                </div>
            </Header>

            <Content>
                {curIdx!==0 && (<IoArrowBack className="backIcon" onClick={()=>{
                    setCurImageUrl(curViews[curIdx-1]._id);
                    setCurIdx(curIdx-1);
                }} />)}

                <img src={curImageUrl} />
                
                {curIdx!==curViews.length && (<IoArrowForward className="forwardIcon" onClick={()=>{
                    setCurImageUrl(curViews[curIdx+1]._id);
                    setCurIdx(curIdx+1)
                }}/>)}
            </Content>
        </Wrapper>
    );
}