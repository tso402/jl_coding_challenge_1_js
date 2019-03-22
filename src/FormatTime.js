function FormatTime(input){
  if (input === 0) {
    return 'None'
  } else if (input === 1) {
    return '1 second'
  } else if(input > 3600){

    response = Hours(input)
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

  } else if (input > 60){
      response = Minutes(input);

    return `${response.minutes.value} ${response.minutes.unit} and ${response.seconds.value} ${response.seconds.unit}`
  }
    else if (input > 1) {
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
  minutes = {value: minutesValue, unit: minutesUnit}
  seconds = Seconds(seconds % 60)
  secondsValue = seconds % 60
  return { minutes: minutes,
           seconds: seconds

  }
}
function Hours(inputSeconds){
  hoursValue = Math.floor(inputSeconds / 3600)
  if (hoursValue > 1) {hoursUnit = 'hours'
  } else if (hoursValue === 1){hoursUnit = 'hour'
  } else {hoursUnit = 'ignore'}
  hours = {value: hoursValue, unit: hoursUnit}
  minutes = Minutes(inputSeconds % 3600)
  seconds = Seconds(inputSeconds % 60)
  return { hours: hours,
           minutes: minutes.minutes,
           seconds: seconds
         }
}
