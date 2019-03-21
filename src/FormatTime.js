function FormatTime(input){
  if (input === 0) {
    return 'None'
  } else if (input === 1) {
    return '1 second'
  } else if(input > 3600){

    hours = Math.floor(input /3600)
    seconds = input % 3600
    return `${hours} hour and ${seconds} seconds` 

  } else if (input > 60){
      response = Minutes(input);

    return `${response.minutes} minute and ${response.remainder} seconds`
  }
    else if (input > 1) {
    return input + " seconds"
  }
}

function Minutes(seconds){
  return { minutes: Math.floor(seconds / 60),
           remainder: seconds % 60

  }
}
