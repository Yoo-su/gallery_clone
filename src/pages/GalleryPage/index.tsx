import {useState} from 'react';
import { Wrapper, Header, ItemContainer, CheckBox } from './styles';
import { views, checkedViews } from "../../recoil/view";
import { useRecoilState, useRecoilValue } from 'recoil';
import { BsCheck, BsTrash2, BsDownload } from 'react-icons/bs';
import ImageItem from '../../components/ImageItem';
import WarningModal from '../../components/WarningModal';

//갤러리 페이지 컴포넌트
export default function GalleryPage() {
    const curViews = useRecoilValue(views);
    const [curCheckedViews, setCurCheckedViews] = useRecoilState(checkedViews);
    const checked=curViews.length===curCheckedViews.length;
    const [modalOn, setModalOn]=useState(false);

    return (
        <Wrapper>
            <WarningModal open={modalOn} setOpen={setModalOn} items={curCheckedViews} />
            <Header>
                <div className="headerLeft">

                    {/* 선택된 렌더샷 개수에 따라 헤더 좌측 내용 변경 */}
                    {curCheckedViews.length > 0 ? (
                        <div className="checked_left">
                            {curCheckedViews.length}개의 렌더 이미지 선택됨
                            <div className="whole_check">
                                <CheckBox className="whole_check_checkBox" checked={checked} onClick={() => {
                                   if (checked===false){
                                        setCurCheckedViews(Array.from(curViews,x=>x._id));
                                   }
                                   else{
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

                {/* 선택된 렌더샷 개수에 따라 헤더 우측 내용 변경 */}
                <div className='headerRight'>
                    {curCheckedViews.length>0?(
                        <div className="checked_right">
                            <BsDownload className="downIcon" onClick={()=>{
                                
                            }} />

                            <BsTrash2 className="trashIcon" onClick={()=>{
                                setModalOn(true);
                            }}/>

                            <label onClick={()=>{
                                setCurCheckedViews([]);
                            }}>선택취소</label>

                        </div>
                    ):(
                        <div className="normal_right">
                            지원자: 유수현
                        </div>
                    )}
                </div>

            </Header>
            <ItemContainer>
                {curViews.map((view, idx) => (
                    <ImageItem url={view._id} key={view._id} idx={idx} />
                ))}
            </ItemContainer>
        </Wrapper>
    );
}