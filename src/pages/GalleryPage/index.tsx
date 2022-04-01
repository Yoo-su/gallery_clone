import { useState } from 'react';
import { Wrapper, Header, ItemContainer, CheckBox } from './styles';
import { views, checkedViews } from "../../recoil/view";
import { useRecoilState, useRecoilValue } from 'recoil';
import { BsCheck, BsTrash2, BsDownload } from 'react-icons/bs';
import ImageItem from '../../components/ImageItem';
import WarningModal from '../../components/WarningModal';
import { saveAs } from 'file-saver';

//갤러리 페이지 컴포넌트
export default function GalleryPage() {
    const curViews = useRecoilValue(views);
    const [curCheckedViews, setCurCheckedViews] = useRecoilState(checkedViews);
    const checked = curViews.length === curCheckedViews.length;
    const [modalOn, setModalOn] = useState(false);

    return (
        <Wrapper>
            {/* 렌더샷 이미지 삭제 경고 모달 */}
            <WarningModal open={modalOn} setOpen={setModalOn} items={curCheckedViews.length>1?curCheckedViews:curCheckedViews[0] } />

            {/* 헤더 */}
            <Header>
                {/* 헤더 좌측 파트 */}
                <div className="headerLeft">

                    {/* 선택된 렌더샷 유무에 따라 헤더 좌측 내용 변경 */}
                    {curCheckedViews.length > 0 ? (
                        <div className="checked_left">
                            {curCheckedViews.length}개의 렌더 이미지 선택됨
                            <div className="whole_check">
                                <CheckBox className="whole_check_checkBox" checked={checked} onClick={() => {
                                    if (checked === false) {
                                        setCurCheckedViews(Array.from(curViews, x => x._id));
                                    }
                                    else {
                                        setCurCheckedViews([]);
                                    }

                                }}>
                                    <BsCheck className="checkIcon" />
                                </CheckBox>
                                <label>모두선택</label>
                            </div>
                        </div>
                    ) : (
                        <div className="normal_left">{curViews.length} 개의 렌더샷</div>
                    )}
                </div>

                {/* 헤더 중앙 */}
                <div className='headerCenter'>
                    <b>갤러리</b>
                </div>

                {/* 헤더 우측 */}
                <div className='headerRight'>

                    {/* 선택된 렌더샷 유무에 따라 헤더 우측 내용 변경 */}
                    {curCheckedViews.length > 0 ? (
                        <div className="checked_right">
                            <BsDownload className="downIcon" onClick={() => {
                               curCheckedViews.forEach(view=>{
                                   saveAs(view,view);
                               })
                            }} />

                            <BsTrash2 className="trashIcon" onClick={() => {
                                setModalOn(true);
                            }} />

                            <label onClick={() => {
                                setCurCheckedViews([]);
                            }}>선택취소</label>

                        </div>
                    ) : (
                        <div className="normal_right">
                            지원자: 유수현
                        </div>
                    )}
                </div>

            </Header>

            {/* 렌더샷 이미지 컴포넌트 컨테이너 */}
            <ItemContainer>
                {curViews.map((view, idx) => (
                    <ImageItem url={view._id} key={view._id} idx={idx} />
                ))}
            </ItemContainer>
        </Wrapper>
    );
}