import { parse, format } from 'date-fns';

export function parseDate(dateStr) {
    return parse(dateStr, 'yyyyMMdd', new Date())
}

// const sortDates = (dates) => {
//     return dates.sort((a, b) => b - a)
// }

export function formatDate(dateTime) {
    return format(dateTime, 'MMMM d, yyyy')
}

export function sortAndFormatDates(dates) {
    const parsed = dates.map((dateObj) => ({
        ...dateObj,
        parsedDate: parse(dateObj.published, 'yyyyMMdd', new Date()),
    }))
    const sorted = parsed.sort((a, b) => b.parsedDate - a.parsedDate)
    // const formatted = sorted.forEach((dateObj) => console.log(dateObj))
    const formatted = sorted.map((dateObj) => ({
        key: dateObj.key,
        title: dateObj.title,
        body: dateObj.body,
        published: format(dateObj.parsedDate, 'MMMM d, yyyy')
    }))
    return formatted
}