describe("Expander", function() {
  it("should initialize", function() {
    loadFixtures('expander/basic.html');

    expect($('#test')).toHaveText(/text/);
  });
});
