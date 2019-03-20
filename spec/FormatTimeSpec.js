'use-strict';
describe ('FormatTime', function() {
  it("returns 'None' when time given is 0", function(){
    expect(FormatTime(0)).toEqual('None')
  })
  it("returns '1 second' when time given is 1", function(){
    expect(FormatTime(1)).toEqual('1 second')
  })
})