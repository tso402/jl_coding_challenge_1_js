'use-strict';
describe ('FormatTime', function() {
  it("returns 'None' when time given is 0", function(){
    expect(FormatTime(0)).toEqual('None')
  })

  it("returns '1 second' when time given is 1", function(){
    expect(FormatTime(1)).toEqual('1 second')
  })

  it("returns '10 seconds' when time given is 10", function(){
    expect(FormatTime(10)).toEqual('10 seconds')
  })

  it("returns '1 minute' when time given 60", function(){
    expect(FormatTime(60)).toEqual('1 minute')
  })

  it("returns '1 minute and 2 seconds' when time given 62", function(){
    expect(FormatTime(62)).toEqual('1 minute and 2 seconds')
  })

  it("returns '1 hour' when time given 3600", function(){
    expect(FormatTime(3600)).toEqual('1 hour')
  })

  it("returns '1 hour and 2 seconds' when time given 3602", function(){
    expect(FormatTime(3602)).toEqual('1 hour and 2 seconds')
  })

  it("returns '1 hour, 5 minutes and 2 seconds' when time given 3902", function(){
    expect(FormatTime(3902)).toEqual('1 hour , 5 minutes and 2 seconds')
  })

  it("returns '1 day' when time given 86400", function(){
    expect(FormatTime(86400)).toEqual('1 day')
  })

  it("returns '1 day and 3 seconds' when time given 86403", function(){
    expect(FormatTime(86403)).toEqual('1 day and 3 seconds')
  })

  it("returns '1 day, 3 hours and 3 seconds' when time given 97203", function(){
    expect(FormatTime(97203)).toEqual('1 day , 3 hours and 3 seconds')
  })

  it("returns '1 year' when time given is 31536000", function(){
    expect(FormatTime(31536000)).toEqual('1 year')
  })

  it("returns '1 year' when time given is 63418090", function(){
    expect(FormatTime(63418090)).toEqual('2 years , 4 days , 8 minutes and 10 seconds')
  })
})
