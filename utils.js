class utils{
    clickElement(locator){
        cy.get(locator).click()
    }

    enterText(locator, text){
        cy.get(locator).type(text)
    }

    isElementVisible(locator){
        cy.get(locator).should('be.visible')
    }
}

export default new utils();