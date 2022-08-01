export const getFormattedDate = (date: string, time: string) => {  
  const dateString = `${date}T${time}`;
  const localeDate = new Date(dateString);

  const formatNumber = (number: number) => {
    return number.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping:false})
  }

  const formattedDate = `${formatNumber(localeDate.getDate())}/${formatNumber(localeDate.getMonth() + 1)}`
  const formattedTime = `${formatNumber(localeDate.getHours())}:${formatNumber(localeDate.getMinutes())}`

  return {
    formattedDate,
    formattedTime,
  }
}


export const getFormattedWeekendDates = (gpData: any) => {
  const { formattedDate: fpOneDate } = getFormattedDate(gpData.FirstPractice.date, gpData.FirstPractice.time);
  const { formattedDate: fpTwoDate } = getFormattedDate(gpData.SecondPractice.date, gpData.SecondPractice.time);
  const { formattedDate: fpThreeDate } = getFormattedDate(gpData.ThirdPractice.date, gpData.ThirdPractice.time);
  const { formattedDate: qualifyingDate } = getFormattedDate(gpData.Qualifying.date, gpData.Qualifying.time);
  const { formattedDate: raceDate } = getFormattedDate(gpData.date, gpData.time);

  const dates = [
    fpOneDate,
    fpTwoDate,
    fpThreeDate,
    qualifyingDate,
    raceDate,
  ]

  const uniqueDates = dates.filter((item, pos) => {
    return dates.indexOf(item) == pos;
  })

  let formattedDateString = "";

  uniqueDates.forEach((date, index) => {
    if (index === 0) {
      formattedDateString = date
      return;
    }
    formattedDateString = formattedDateString + " • " + date 
  })

  return formattedDateString
}