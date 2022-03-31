export const getDate = () => {
    const date = new Date();
    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDay()];

    let refinedDate = year.toString() + '. ' + month.toString() + '. ' + day.toString() + '.';
    
    return refinedDate;
}