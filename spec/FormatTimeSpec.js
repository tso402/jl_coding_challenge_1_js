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
})