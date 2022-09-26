export const removePhoneMask = (phone) => {
    return phone
        .replace('(', '')
        .replace(')', '')
        .replace(' ', '')
        .replace('-', '')
}