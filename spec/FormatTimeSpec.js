'use-strict';
describe ('FormatTime', function() {
  it("returns 'None' when time given is 0", function(){
    expect(FormatTime(0)).toEqual('None')
  })
})