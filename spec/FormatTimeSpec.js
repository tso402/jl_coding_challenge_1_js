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
  it("returns '1 minute and 2 seconds' when time given 62", function(){
    expect(FormatTime(62)).toEqual('1 minute and 2 seconds')
  })

  it("returns '1 hour and 2 seconds' when time given 3602", function(){
    expect(FormatTime(3602)).toEqual('1 hour and 2 seconds')
  })

  it("returns '1 hour, 5 minutes and 2 seconds' when time given 3902", function(){
    expect(FormatTime(3902)).toEqual('1 hour, 5 minutes and 2 seconds')
  })
})
