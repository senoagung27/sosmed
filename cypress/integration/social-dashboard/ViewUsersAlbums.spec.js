describe('View albums of users', function () {
    it('has to open albums tab on user profile screen', function () {
        cy.visit('/user/7')

        cy.get('[ data-test="albums-tab" ]').eq(0).click()
        cy.url().should('include','/user/7/albums')

        cy.visit('/user/9')

        cy.get('[ data-test="albums-tab" ]').eq(0).click()
        cy.url().should('include','/user/9/albums')
    })

    it('has to render 10 user album card', function() {
        cy.visit('/user/7/albums')

        cy.get('[data-test="album-card"]').should('have.length',10)
        cy.get('[data-test="album-card-button"]').should('have.length',10)

        cy.visit('/user/9/albums')

        cy.get('[data-test="album-card"]').should('have.length',10)
        cy.get('[data-test="album-card-button"]').should('have.length',10)
    })

    it('can to back to UserList screen', function() {
        cy.visit('/user/7/posts')

        cy.get('[data-test="userslist-header-button"]').eq(0).click()
        cy.url().should('include','/users')

        cy.visit('/user/9/posts')

        cy.get('[data-test="userslist-header-button"]').eq(0).click()
        cy.url().should('include','/users')
    })
})