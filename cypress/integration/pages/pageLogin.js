class pageLogin { 
    setUsuario (anguser){
        cy.get('.jss129 > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(anguser,{delay:0})//.should('have.value', 'allan.santos@signa.net.br')  // Usuario 
    }
    setSenha (angpass){
        cy.get('.jss192 > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(angpass,{delay:0})//.should('have.value', '123456789') // Login
    }
    setUsuario1 (anguser){
        cy.get('.jss129 > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(anguser)
    }   
    setSenha1 (angpass){
        cy.get('.jss192 > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(angpass)
    }         
    clickEsqueciSenha () {
        cy.get('.MuiLink-root.MuiTypography-colorPrimary.MuiTypography-root').click() // Esqueci minha senha
    }
    clickCadastrarUser () {
        cy.get('.MuiButton-text').click() // Cadastrar Empresa
    }
    clickEntrar (){
        cy.get('.MuiButton-contained > .MuiButton-label').click() // Entrar   
    }

    clickEntrarDash (){
        for(let n = 0; n < 100; n ++){
        cy.get('.MuiButton-contained > .MuiButton-label').click({ multiple: true }) // Entrar  
        }
    }
    clickEntrarDash2 (){
        for(let n = 0; n < 100; n ++){
        cy.get('.MuiButton-contained > .MuiButton-label').click({ multiple: true }); // Entrar  
        }
    }
}
export default new pageLogin

