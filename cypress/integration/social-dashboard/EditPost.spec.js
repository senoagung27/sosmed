describe('Users can edit some post', function() {
    it('has to open dialog and type new atribut and update the post', function () {
        cy.visit('/user/6/posts')

        const title = 'Cypress edit testing ' + new Date().toISOString()
        const body = 'this post edit by cypress ' + new Date().toISOString()
        cy.get('[ data-test="user-post-edit-button" ]').eq(0).click()

        cy.get('[ data-test="posteditor-dialog" ]').should('have.length',1)
        cy.get('[ data-test="posteditor-title-textinput" ] input').last().clear().type(title)
        cy.get('[ data-test="posteditor-body-textinput" ] textarea').last().clear().type(body)
        cy.get('[ data-test="posteditor-save-button" ]').eq(0).click()
        
        cy.server()
        cy.route('posts?userId=*').as('getPosts')
        cy.wait('@getPosts')
        
        cy.get('[ data-test="user-post-card-title" ]').first().should('have.text',title)
        cy.get('[ data-test="user-post-card-body" ]').first().should('have.text',body)
    })
})