export const dateStringToDate = (dateString: string): Date => {
    // 28/10/2018
    const datePars = dateString
    .split('/')
    .map((item: string) => {
        return parseInt(item);
    });
    return new Date(datePars[2], datePars[1]-1, datePars[0]);    
}