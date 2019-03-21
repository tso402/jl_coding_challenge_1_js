function FormatTime(input){
  if (input === 0) {
    return 'None'
  } else if (input === 1) {
    return '1 second'
  } else if(input > 3600){

    response = Hours(input)

    return `${response.hours.hoursValue} ${response.hours.hoursUnit} and ${response.seconds.secondsValue} ${response.seconds.secondsUnit}`

  } else if (input > 60){
      response = Minutes(input);

    return `${response.minutes.minutesValue} ${response.minutes.minutesUnit} and ${response.seconds.secondsValue} ${response.seconds.secondsUnit}`
  }
    else if (input > 1) {
    return input + " seconds"
  }
}

function Seconds(inputSeconds){
  secondsValue = inputSeconds
  if (secondsValue > 1) {secondsUnit = 'seconds'
  } else if (secondsValue = 1){secondsUnit = 'second'
  } else {secondsUnit = 'ignore'}
  seconds = {secondsValue: secondsValue, secondsUnit: secondsUnit}
  return seconds
}

function Minutes(seconds){
  minutesValue = Math.floor(seconds / 60)
  if (minutesValue > 1) {minutesUnit = 'minutes'
  } else if (minutesValue = 1){minutesUnit = 'minute'
  } else {minutesUnit = 'ignore'}
  minutes = {minutesValue: minutesValue, minutesUnit: minutesUnit}
  seconds = Seconds(seconds % 60)
  secondsValue = seconds % 60
  return { minutes: minutes,
           seconds: seconds

  }
}
function Hours(inputSeconds){
  hoursValue = Math.floor(inputSeconds / 3600)
  if (hoursValue > 1) {hoursUnit = 'hours'
  } else if (hoursValue = 1){hoursUnit = 'hour'
  } else {hoursUnit = 'ignore'}
  hours = {hoursValue: hoursValue, hoursUnit: hoursUnit}
  minutes = Minutes(inputSeconds % 3600)
  seconds = Seconds(inputSeconds % 60)
  return { hours: hours,
           minutes: minutes,
           seconds: seconds
         }
}
