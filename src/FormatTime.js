function FormatTime(input){
  if (input === 0) {
    return 'None'
  } else if (input === 1) {
    return '1 second'
  } else if (input > 60){
    return `${Math.floor(input / 60)} minute and ${input % 60} seconds`  
  }
    else if (input > 1) {
    return input + " seconds"
  }
}

