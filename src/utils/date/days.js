export const WEEK_DAYS_NUMBERS = {
    0: 'DOM',
    1: 'SEG',
    2: 'TER',
    3: 'QUA',
    4: 'QUI',
    5: 'SEX',
    6: 'SAB',
}

export const DAYS_OFF_WEEK = [
    'DOM',
    'SEG',
    'TER',
    'QUA',
    'QUI',
    'SEX',
    'SAB',
]

export const WORKING_DAYS = [
    'SEG',
    'TER',
    'QUA',
    'QUI',
    'SEX'
]

export const WEEKEND_DAYS = [
    'SAB',
    'DOM'
]

export const getTodayInitials = () => {
    const todayInNumber = new Date().getDay();

    return WEEK_DAYS_NUMBERS[todayInNumber];
}