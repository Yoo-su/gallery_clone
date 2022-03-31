//금일 날짜 정보 문자열 리턴 함수
export const getDate = () => {
    const date = new Date();
    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDay()];

    let refinedDate = year.toString() + '. ' + month.toString() + '. ' + day.toString() + '.';

    return refinedDate;
}