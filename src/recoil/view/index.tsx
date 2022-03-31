import { atom, useRecoilState, useRecoilValue } from "recoil";
import testJson from '../../assets/test.json';

//렌더샷 이미지 전역 상태
export const views = atom({
  key: "views",
  default: testJson.renderings
});


//체크된 렌더샷 전역 상태
export const checkedViews = atom<string[]>({
  key: "checked",
  default: []
})
