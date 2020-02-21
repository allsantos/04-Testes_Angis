class pageLogin {
    setUsuario (anguser){
        cy.get('.MuiFormControl-marginNormal .MuiInputBase-inputAdornedStart').type(anguser,{delay:100}).should('have.value', 'hy54t3wesdfc')  // Usuario 
    }           
    setSenha (angpass){
        cy.get('div.MuiFormControl-root.MuiTextField-root.jss104.jss105 > div > input').type(angpass,{delay:100})//.should('have.value', 'daw1231#$%¨&o○Ü○+') // Login
    }
    clickEntrar (){
        cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.btn-gradient.btn-login').click() // Entrar
    }
    clickEsqueciSenha () {
        cy.get('').click() // Esqueci minha senha
    }
    clickCadastrarUser () {
        cy.get('').click() // Cadastrar Empresa
    }
}
export default new pageLogin