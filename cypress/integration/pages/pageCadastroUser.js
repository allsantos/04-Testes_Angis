class pageCadastroUser {
    setCnpjCad (usercnpj) {
        cy.get('').type(usercnpj).should('have.value', '') // CNPJ
    } 
    setCpfCad (usercpf) {
        cy.get('').type(usercpf).should('have.value', '') // CPF
    }
    setNomeCad (nameUser) {
        cy.get('').type(nameUser).should('have.value', '') // Nome
    }
    setEmailCad (useremail) {
        cy.get('').type(useremail).should('have.value', '') // Email
    }
    setConfirEmailCad (confiremail) {
        cy.get('').type(confiremail).should('have.value', '') // COnfirmar Email
    }
    clickGravarCad () {
        cy.get('').click() // Gravar
    }
    clickVoltarCad() {
        cy.get('').click()
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