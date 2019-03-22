'use-strict';
describe ('formatTime', function() {
  it("returns 'None' when time given is 0", function(){
    expect(formatTime(0)).toEqual('None')
  })

  it("returns '1 second' when time given is 1", function(){
    expect(formatTime(1)).toEqual('1 second')
  })

  it("returns '10 seconds' when time given is 10", function(){
    expect(formatTime(10)).toEqual('10 seconds')
  })

  it("returns '1 minute' when time given 60", function(){
    expect(formatTime(60)).toEqual('1 minute')
  })

  it("returns '1 minute and 2 seconds' when time given 62", function(){
    expect(formatTime(62)).toEqual('1 minute and 2 seconds')
  })

  it("returns '1 hour' when time given 3600", function(){
    expect(formatTime(3600)).toEqual('1 hour')
  })

  it("returns '1 hour and 2 seconds' when time given 3602", function(){
    expect(formatTime(3602)).toEqual('1 hour and 2 seconds')
  })

  it("returns '1 hour, 5 minutes and 2 seconds' when time given 3902", function(){
    expect(formatTime(3902)).toEqual('1 hour, 5 minutes and 2 seconds')
  })

  it("returns '1 day' when time given 86400", function(){
    expect(formatTime(86400)).toEqual('1 day')
  })

  it("returns '1 day and 3 seconds' when time given 86403", function(){
    expect(formatTime(86403)).toEqual('1 day and 3 seconds')
  })

  it("returns '1 day, 3 hours and 3 seconds' when time given 97203", function(){
    expect(formatTime(97203)).toEqual('1 day, 3 hours and 3 seconds')
  })

  it("returns '1 year' when time given is 31536000", function(){
    expect(formatTime(31536000)).toEqual('1 year')
  })

  it("returns '2 years, 4 days, 8 minutes and 10 seconds' when time given is 63418090", function(){
    expect(formatTime(63418090)).toEqual('2 years, 4 days, 8 minutes and 10 seconds')
  })
})
