const searchResults = "[id='rso']";

class ResultsPage {
    verifyFirstResult(searchKeyword) {
        return cy.get(searchResults).children().first().text().then(result => {
            cy.log("Text is: ", result);
            expect(result).to.include(searchKeyword);
        })
    }
}

export default ResultsPage;