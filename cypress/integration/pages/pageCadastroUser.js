class pageCadastroUser {
    setCnpjCad (usercnpj) {
        cy.get('').type(usercnpj) // CNPJ
    } 
    setCpfCad (usercpf) {
        cy.get('').type(usercpf) // CPF
    }
    setNomeCad (nameUser) {
        cy.get('').type(nameUser) // Nome
    }
    setEmailCad (useremail) {
        cy.get('').type(useremail) // Email
    }
    setConfirEmailCad (confiremail) {
        cy.get('').type(confiremail) // COnfirmar Email
    }
    clickGravarCad () {
        cy.get('').click() // Gravar
    }
    /*--------------Tela de agradecimentos após cadastro-------------- */
    // Mensagem de Tempo
    // Obrigado por escolher o ANGIS!
    // Mensagem de Email de confirmação
    clickInicio() {
        cy.get('').click() // Inicio
    }
}
export default new pageCadastroUser