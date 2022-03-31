import Modal from 'react-modal';
import { checkedViews, views } from '../../recoil/view';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './styles';

interface props{
    open:boolean,
    setOpen:any,
    items:string|string[]
}

//렌더샷 이미지 삭제 경고 모달 컴포넌트
export default function WarningModal({open, setOpen, items}:props){
    const [curCheckedViews, setCurCheckedViews]=useRecoilState(checkedViews);
    const [curViews,setCurViews]=useRecoilState(views);
    const navigate=useNavigate();

    return (
        <Modal isOpen={open} shouldCloseOnEsc onRequestClose={()=>{setOpen(false)}} ariaHideApp={false}
            style={{
                overlay:{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.55)',
                    zIndex:'10'
                },
                content:{
                    left:'0',
                    right:'0',
                    bottom:'0',
                    top:'0',
                    position:'relative',
                    width:'24rem',
                    height:'20rem',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'2rem',
                }
            }}
            >

            {/* 여러 이미지를 선택했는지 아닌지에 따라 다른 문구 출력*/}
            {curCheckedViews.length>0?(
                <div style={{display:'flex', flexDirection:'column','justifyContent':'center',alignItems:'center',margin:'1rem 0'}}>
                    <b>{curCheckedViews.length}개의 이미지가 선택되었습니다</b>
                    <label>정말 이 이미지들을 삭제하시겠습니까?</label>
                </div>
            ):(
                <div style={{display:'flex', flexDirection:'column','justifyContent':'center',alignItems:'center',margin:'1rem 0'}}>
                    <b style={{fontSize:'24px'}}>확인</b>
                    <label>정말 이 이미지를 삭제하시겠습니까?</label>
                </div>
            )}
            <div style={{display:'flex', flexDirection:'column','justifyContent':'center',alignItems:'center'}}>
                <CustomButton bgColor='#6DB2C5' color='#fff' onClick={(e)=>{
                    e.preventDefault()
                    if (typeof(items)==="string"){
                        //단일 이미지 삭제인 경우 삭제 후 갤러리 페이지로 이동
                        setCurViews(curViews.filter(view=>view._id!==items));
                        navigate('/');
                    }
                    else {
                        setCurViews(curViews.filter(view=>!items.includes(view._id)));
                        setCurCheckedViews([]);
                        setOpen(false);
                    }
                }}>삭제</CustomButton>
                <CustomButton bgColor='#f9f9f3' color='#6DB2C5' onClick={(e)=>{
                    e.preventDefault()
                    setOpen(false);
                    }}>돌아가기</CustomButton>
            </div>
        </Modal>
    );
}