function FormatTime(input){
  if (input === 0) {
    return 'None'
  } else if (input === 1) {
    return '1 second'
  } else if(input > 3600){

    response = Hours(input)

    return `${response.hours} hour and ${response.seconds} seconds`

  } else if (input > 60){
      response = Minutes(input);

    return `${response.minutes} minute and ${response.seconds} seconds`
  }
    else if (input > 1) {
    return input + " seconds"
  }
}

function Minutes(seconds){
  return { minutes: Math.floor(seconds / 60),
           seconds: seconds % 60

  }
}
function Hours(seconds){
  hours = Math.floor(seconds / 3600)
  minutes = Minutes(seconds %3600)
  return { hours: hours,
           minutes: minutes.minutes,
           seconds:minutes.seconds
         }
}
