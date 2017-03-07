describe("infoFactory", function() {
    beforeEach(module("lab18Module"));

    var infoFactory;

    beforeEach(inject(function(_infoFactory_) {
        infoFactory = _infoFactory_;
    }));
    it("returns Fizz for 3", function() {
        expect(infoFactory.takeNumber(3)).toBe("Fizz");
    });
    it("returns Buzz for 5", function() {
        expect(infoFactory.takeNumber(5)).toBe("Buzz");
    });
    it("returns FizzBuzz for 15", function() {
        expect(infoFactory.takeNumber(15)).toBe("FizzBuzz");
    });
    it("returns not fizzbuzzable for 11", function() {
        expect(infoFactory.takeNumber(11)).toBe("not fizzbuzzable");
    });
});
