class pageEsqueceuSenha {
    setInfoEmail (informaremail){
        cy.get('.MuiInputBase-input').type(informaremail)
    }
    clickEnviarEmailenviaremail (){
        cy.get('.MuiButton-contained > .MuiButton-label').click()
    }
    clickCancelarEsqSenha () {
        cy.get('.MuiButton-text > .MuiButton-label').click()
    }
    clickVoltaPageLogin () {
        cy.get('.MuiButton-label').click()
    }
} 
export default new pageEsqueceuSenha