function FormatTime(input) {
  SECOND = 1
  MINUTE = 60 * SECOND
  HOUR = 60 * MINUTE
  DAY = 24 * HOUR
  YEAR = 365 * DAY

  if (input === 0) {
    return 'None'
  } else {
    response = {
      years: Years(input),
      days: Days(input % YEAR),
      hours: Hours(input % DAY),
      minutes: Minutes(input % HOUR),
      seconds: Seconds(input % MINUTE)
    }

    responseArray = []
    Object.keys(response).forEach(function (key){
      if (response[key]["value"] != 0){
      responseArray.push(response[key]["value"])
      responseArray.push(response[key]["unit"])
      responseArray.push(",")
      }
    });

    responseArray.pop()
    if (responseArray.length > 3){
      responseArray[responseArray.length-3] = "and"
    }
    return responseArray.join(" ").split(" ,").join(",")

  } 
}

function Seconds(inputSeconds){
  secondsValue = inputSeconds
  if (secondsValue > 1) {secondsUnit = 'seconds'
  } else if (secondsValue === 1){secondsUnit = 'second'
  } else {secondsUnit = 'ignore'}
  seconds = {value: secondsValue, unit: secondsUnit}
  return seconds
}

function Minutes(seconds){
  minutesValue = Math.floor(seconds / MINUTE)
  if (minutesValue > 1) {minutesUnit = 'minutes'
  } else if (minutesValue === 1){minutesUnit = 'minute'
  } else {minutesUnit = 'ignore'}
  return {value: minutesValue, unit: minutesUnit}
}

function Hours(inputSeconds){
  hoursValue = Math.floor(inputSeconds / HOUR)
  if (hoursValue > 1) {hoursUnit = 'hours'
  } else if (hoursValue === 1){hoursUnit = 'hour'
  } else {hoursUnit = 'ignore'}
  return {value: hoursValue, unit: hoursUnit}
}

function Days(inputSeconds){
  daysValue = Math.floor(inputSeconds / DAY)
  if (daysValue > 1) {daysUnit = 'days'
  } else if (daysValue === 1){daysUnit = 'day'
  } else {daysUnit = 'ignore'}
  return {value: daysValue, unit: daysUnit}
}

function Years(inputSeconds){
  yearsValue = Math.floor(inputSeconds / YEAR)
  if (yearsValue > 1) {yearsUnit = 'years'
  } else if (yearsValue === 1){yearsUnit = 'year'
  } else {yearsUnit = 'ignore'}
  return {value: yearsValue, unit: yearsUnit}
}
