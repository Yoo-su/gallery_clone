import { memo } from 'react';

interface props {
    src: string
}

//re-render 방지용 커스텀 이미지 컴포넌트
function CustomImage({ src }: props) {
    return (
        <img src={src} loading="lazy" />
    )
}

export default memo(CustomImage);