describe("Sample test", () => {
    it("should do some basic math", () => {
        expect(2 + 2).to.equal(4);
    });

    it("should talk to the server", async () => {
        const response = await cy.request('http://server:3000');
        expect(response.body).contains('Henlo');
    });

    it("should render the app", () => {
        cy.visit('http://client:8080');
        cy.contains('Henlo from the client');
        cy.wait(5000);
        cy.contains('Henlo from the server');
    });
});
