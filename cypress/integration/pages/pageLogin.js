class pageLogin {
    setUsuario (){
        cy.get('').type('')  // Usuario
    }
    setSenha (){
        cy.get('').type('') // Login
    }
    clickEntrar (){
        cy.get('').click() // Entrar
    }
    clickEsqueciSenha () {
        cy.get('').click() // Esqueci minha senha
    }
    clickCadastrarUser () {
        cy.get('').click() // Cadastrar Empresa
    }
}
export default new pageLogin