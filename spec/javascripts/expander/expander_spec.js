describe("Expander", function() {
  it("should initialize", function() {
    loadFixtures('expander/basic.html');
    var expander = new Expander($('[data-expander]'));

    expect(typeof(expander)).toBe('object');
  });
});
