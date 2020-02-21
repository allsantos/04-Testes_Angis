class pagePrimeirosPassos {
    // -----------CT-Es-----------
    clickProsseguir() {
        cy.get('').click()
    }
     clickVoltarPage() {
        cy.get('').click()
    }
    clickN51And200() {
        cy.get('').click().should('be.checked')
    }
    clickN201And500(){
        cy.get('').click().should('be.checked')
    }
    clickN501And1000(){
        cy.get('').click().should('be.checked')
    }
    clickN1001And5000(){
        cy.get('').click().should('be.checked')
    }
    clickMais5000(){
        cy.get('').click().should('be.checked')
    }
    clickProsCtes() {
        cy.get('').click()
    }
    //-----------VeiculosProprios-----------
    clickProsPag02() {
        cy.get('').click()
    }
    clickVoltarPage02 () {
        cy.get().click()
    }
    clickNenhum(){
        cy.get('').click().should('be.checked')
    }
    clickN1A3(){
        cy.get('').click().should('be.checked')
    }
    clickN4A10(){
        cy.get('').click().should('be.checked')
    }
    clickN11A20(){
        cy.get('').click().should('be.checked')
    }
    clickN21A51(){
        cy.get('').click().should('be.checked')
    }
    clickMais50(){
        cy.get('').click().should('be.checked')
    }
    clickIniciarApp() {
        cy.get().click()
    }
}
export default new pagePrimeirosPassos