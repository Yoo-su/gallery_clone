import { memo, useState } from 'react';
import { Wrapper, Content, Ul, Li } from "./styles";
import { BsThreeDots, BsCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { checkedViews } from '../../recoil/view';
import { useRecoilState } from 'recoil';
import { saveAs } from 'file-saver'
import CustomImage from '../CustomImage';
import WarningModal from '../WarningModal';

interface propsType {
    url: string
    idx: any
}

//렌더샷 이미지 컴포넌트
function ImageItem({ url, idx }: propsType) {
    const [hovered, setHovered] = useState(false);
    const [curCheckedViews, setCurCheckedViews] = useRecoilState(checkedViews);
    const checked = curCheckedViews.includes(url);
    const [dropdownOn, setDropdownOn] = useState(false)
    const [modalOn, setModalOn] = useState(false);

    return (
        <Link to={{
            pathname: '/detail',
        }}
            state={{
                url: url,
                idx: idx
            }}
        >
            <Wrapper imageUrl={url}>

                {/* 렌더샷 이미지 삭제 경고 모달 */}
                <WarningModal open={modalOn} setOpen={setModalOn} items={url} />

                {/* 콘텐츠 */}
                <Content
                    onMouseEnter={() => { setHovered(true) }}
                    onMouseLeave={() => {
                        setHovered(false)
                        setDropdownOn(false);
                    }}
                    hovered={hovered}
                    checked={checked}
                    multipleChecked={curCheckedViews.length>0}
                    >

                    {/* 체크박스 */}
                    <div className="checkBox" onClick={(e) => {
                        e.preventDefault();
                        if (checked === true) {
                            setCurCheckedViews(curCheckedViews.filter(viewUrl => viewUrl !== url));
                        }
                        else {
                            setCurCheckedViews([...curCheckedViews, url]);
                        }
                    }}>
                        <BsCheck className="checkIcon" />
                    </div>

                    {/* 드롭다운 메뉴 onOff 버튼 */}
                    <BsThreeDots className="threeDots"  onClick={(e) => {
                        e.preventDefault();
                        if (dropdownOn === true) {
                            setDropdownOn(false);
                        }
                        else {
                            setDropdownOn(true);
                        }
                    }} />

                    {/* 드롭다운 메뉴 */}
                    <Ul open={dropdownOn}>
                        <Li onClick={(e) => {
                            e.preventDefault();
                            saveAs(url, url);
                        }}>다운로드</Li>
                        <Li onClick={(e) => {
                            e.preventDefault();
                            setModalOn(true);
                        }}>삭제</Li>
                    </Ul>

                    <label>일인칭 뷰어</label>
                    <CustomImage src={url} />
                </Content>
            </Wrapper>
        </Link>
    );
}

export default memo(ImageItem);