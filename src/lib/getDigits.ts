type digits = 'hour' | 'minute' | 'second' | 'hour12'

const getDigits : (time : Date) => Record<digits, number> = time => ({
   hour: time.getHours(),
   hour12: time.getHours() % 12,
   minute: time.getMinutes(),
   second: time.getSeconds(),
})

export default getDigits