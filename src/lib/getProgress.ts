import getDigits from '$lib/getDigits'

type progress = 'hours12' | 'hours' | 'minutes' | 'seconds' | 'period' | 'day'

const getProgress : (time : Date) => Record<progress, number> = time => {
   const {hour, minute, second } = getDigits(time);
   return {
      hours12: (hour % 12) / 12,
      hours: hour / 24,
      minutes: minute / 60,
      seconds: second / 60,
      period: ( ( hour % 12 ) * 60 + minute ) / 720,
      day: ( ( hour ) * 60 + minute ) / 1440,
   }
}

export default getProgress