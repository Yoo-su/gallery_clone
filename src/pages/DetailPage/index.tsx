import { Wrapper, Header, Content } from "./styles";
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCloseSharp, IoDownloadOutline, IoTrashOutline, IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { views } from '../../recoil/view';
import { useRecoilValue } from 'recoil';
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

//렌더샷 디테일 페이지 컴포넌트
export default function DetailPage() {
    const location = useLocation() as unknown as LocationProps;
    const [curImageUrl, setCurImageUrl] = useState(location.state.url);
    const [curIdx, setCurIdx] = useState(location.state.idx);
    const curViews = useRecoilValue(views);
    const [modalOn, setModalOn] = useState(false);
    const curDate = getDate();
    const navigate = useNavigate();

    return (
        <Wrapper>

            {/* 렌더샷 이미지 삭제 경고 모달 */}
            <WarningModal open={modalOn} setOpen={setModalOn} items={curImageUrl} />

            {/* 헤더 */}
            <Header>

                {/* 헤더 좌측 파트 */}
                <div className="detail_header_left">

                    {/* 디테일 페이지 닫기 버튼 */}
                    <div className="detail_closeBtn" onClick={() => {
                        navigate('/');
                    }}>
                        <IoCloseSharp className="closeIcon" />
                    </div>

                    {/* 날짜, 해상도 정보 파트 */}
                    <div className="detail_simpleInfo">
                        <label>{curDate}</label>
                        <b>해상도: 3840x2160</b>
                    </div>
                </div>

                {/* 헤더 우측 파트 */}
                <div className="detail_header_right">

                    {/* 렌더샷 이미지 다운로드 버튼 */}
                    <div className="detail_downloadBtn" onClick={() => {
                        saveAs(curImageUrl, curImageUrl);
                    }}>
                        <IoDownloadOutline className="downloadIcon" />
                        다운로드
                    </div>

                    {/* 렌더샷 이미지 삭제 버튼 */}
                    <div className="detail_trashBtn" onClick={() => {

                    }}>
                        <IoTrashOutline className="trashIcon" onClick={() => {
                            setModalOn(true);
                        }} />
                    </div>
                </div>
            </Header>

            {/* 콘텐츠 */}
            <Content>

                {/* 이전 이미지 이동 버튼 */}
                {curIdx !== 0 && (<IoArrowBack className="backIcon" onClick={() => {
                    setCurImageUrl(curViews[curIdx - 1]._id);
                    setCurIdx(curIdx - 1);
                }} />)}

                {/* 렌더샷 이미지 */}
                <img src={curImageUrl} />

                {/* 다음 이미지 이동 버튼 */}
                {curIdx !== curViews.length-1 && (<IoArrowForward className="forwardIcon" onClick={() => {
                    setCurImageUrl(curViews[curIdx + 1]._id);
                    setCurIdx(curIdx + 1)
                }} />)}
            </Content>
        </Wrapper>
    );
}