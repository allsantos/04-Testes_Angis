class pagePrimeirosPassos {
    clickProsseguir() {
        cy.get('.MuiButton-label').click()
    }
     clickVoltarPage() {
        cy.get('').click()
    }
    clickN51And200() {
        cy.get('[color="primary"] > .MuiButtonBase-root > .MuiIconButton-label > .jss336').click()//.should('be.checked')
    }
    clickN201And500(){
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss336').click()//.should('be.checked')
    }
    clickN501And1000(){
        cy.get(':nth-child(4)> .MuiButtonBase-root > .MuiIconButton-label > .jss336').click()//.should('be.checked')
    }
    clickN1001And5000(){
        cy.get(':nth-child(5) > .MuiButtonBase-root > .MuiIconButton-label > .jss336').click()//.should('be.checked')
    }
    clickMais5000(){
        cy.get(':nth-child(6) > .MuiButtonBase-root > .MuiIconButton-label > .jss336').click()//.should('be.checked')
    }
    clickProsCtes() {
        cy.get('.MuiButton-label').click()
    }
    clickProsPag02() {
        cy.get('.MuiButton-label').click({force: true})
    }
    clickVoltarPage02 () {
        cy.get().click()
    }
    clickNenhum(){
        cy.get('[role] .MuiFormControlLabel-root:nth-of-type(1) [name]').click()//.should('be.checked')
    }
    clickN1A3(){
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss336').click()//.should('be.checked')
    }
    clickN4A10(){
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .jss861').click()//.should('be.checked')
    }
    clickN11A20(){
        cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .jss945').click()//.should('be.checked')
    }
    clickN21A51(){
        cy.get(':nth-child(5) > .MuiButtonBase-root > .MuiIconButton-label > .jss1029').click()//.should('be.checked')
    }
    clickMais50(){
        cy.get(':nth-child(6) > .MuiButtonBase-root > .MuiIconButton-label > .jss1113').click()//.should('be.checked')
    }
    clickIniciarApp() {
        cy.get('.MuiButton-label').click()
    }
}
export default new pagePrimeirosPassos