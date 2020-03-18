class pageCadastroUser {
    setCnpjCad (usercnpj) {
        cy.get('[class] .MuiFormControl-fullWidth:nth-child(2) > div:nth-of-type(2) .MuiInputBase-input').focus().type(usercnpj).blur()//.should('have.value', '61.082.004/0001-50') // CNPJ
    } 
    setCpfCad (usercpf) {
        cy.get('.jss227 > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').focus().clear().type(usercpf).blur()//.should('have.value', '447.902.938-90') // CPF
    }
    setNomeCad (nameUser) {
        cy.get('.jss228 > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').focus().type(nameUser).blur().should('have.value', nameUser) // Nome
    }
    setEmailCad (useremail) {
        cy.get("div:nth-of-type(6) > .MuiGrid-align-items-xs-flex-end.MuiGrid-container.MuiGrid-root > .MuiGrid-grid-xs-true.MuiGrid-item.MuiGrid-root > .MuiFormControl-fullWidth.MuiFormControl-root.MuiTextField-root > .MuiInput-formControl.MuiInput-fullWidth.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInputBase-fullWidth.MuiInputBase-root > .MuiInput-input.MuiInputBase-input").focus().clear().type(useremail).blur()//.should('have.value', '') // Email
    }
    setConfirEmailCad (confiremail) {
        cy.get("div:nth-of-type(7) > .MuiGrid-align-items-xs-flex-end.MuiGrid-container.MuiGrid-root > .MuiGrid-grid-xs-true.MuiGrid-item.MuiGrid-root > .MuiFormControl-fullWidth.MuiFormControl-root.MuiTextField-root > .MuiInput-formControl.MuiInput-fullWidth.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInputBase-fullWidth.MuiInputBase-root > .MuiInput-input.MuiInputBase-input").focus().clear().type(confiremail).blur()//.should('have.value', '') // COnfirmar Email
    }
    setDigitaSenha(passuser) {
        cy.get("input#password").focus().clear().type(passuser).blur()//.should('have.value', '') // Verifica caracteres da senha
    }
    setConfirmSenha(conpass) {
        cy.get("input#confirmPassword").focus().clear().type(conpass).blur()//.should('have.value', '') // Verifica caracteres da senha
    }
    clickGravarCad () {
        cy.get("[class] .MuiFormControl-fullWidth:nth-child(2) > [tabindex]").click() // Gravar
    }
    clickVoltarCad() {
        cy.get('.MuiButtonBase-root').click()
    }
    clickInicio() {
        cy.get('').click() // Inicio
    }
    setValidaALert(alert) {
        cy.get('.MuiAlert-message').then(($el) => {
            expect($el.text()).be.eq(alert)
        })
    }
    
}
export default new pageCadastroUser