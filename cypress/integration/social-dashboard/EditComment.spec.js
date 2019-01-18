describe('Users can edit some comment', function() {
    it('has to open dialog and type new atribut and update the comment', function () {
        cy.visit('/user/5/post/50')

        const email = 'email@cypress.io'
        const name = 'Cypress testing add ' + new Date().toISOString()
        const body = 'this body comment add by cypress ' + new Date().toISOString()

        cy.get('[ data-test="comment-card-edit-button" ]').eq(0).click()

        cy.get('[ data-test="comment-editor-dialog" ]').should('have.length',1)
        cy.get('[ data-test="comment-editor-name" ] input').last().clear().type(name)
        cy.get('[ data-test="comment-editor-email" ] input').last().clear().type(email)
        cy.get('[ data-test="comment-editor-body" ] textarea').last().clear().type(body)
        cy.get('[ data-test="comment-editor-save-button" ]').eq(0).click()
        
        cy.server()
        cy.route('comments?postId=*').as('getComments')
        cy.wait('@getComments')
        
        cy.get('[ data-test="comment-card-email" ]').first().should('have.text',email)
        cy.get('[ data-test="comment-card-body" ]').first().should('have.text',body)
        cy.get('[ data-test="comment-card-name" ]').first().should('have.text',`Posted by : ${name}`)
    })
})