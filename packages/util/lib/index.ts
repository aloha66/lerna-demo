import dayjs from 'dayjs'

export const getDate = () => dayjs().format('YYYY-MM-DD')

export const add = (...rest: number[]) => rest.reduce((a, b) => a + b)