function FormatTime(input){
  if (input === 0) {
    return 'None'
  } else if (input === 1) {
    return '1 second'
  } else if (input >= 60){

    response = {
      days: Days(input),
      hours: Hours(input % 86400),
      minutes: Minutes(input % 3600),
      seconds: Seconds(input % 60)
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
    return responseArray.join(" ")

  } else {
    return input + " seconds"
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
  minutesValue = Math.floor(seconds / 60)
  if (minutesValue > 1) {minutesUnit = 'minutes'
  } else if (minutesValue === 1){minutesUnit = 'minute'
  } else {minutesUnit = 'ignore'}
  return {value: minutesValue, unit: minutesUnit}
}

function Hours(inputSeconds){
  hoursValue = Math.floor(inputSeconds / 3600)
  if (hoursValue > 1) {hoursUnit = 'hours'
  } else if (hoursValue === 1){hoursUnit = 'hour'
  } else {hoursUnit = 'ignore'}
  return {value: hoursValue, unit: hoursUnit}
}

function Days(inputSeconds){
  daysValue = Math.floor(inputSeconds / 86400)
  if (daysValue > 1) {daysUnit = 'days'
  } else if (daysValue === 1){daysUnit = 'day'
  } else {daysUnit = 'ignore'}
  return {value: daysValue, unit: daysUnit}
}
