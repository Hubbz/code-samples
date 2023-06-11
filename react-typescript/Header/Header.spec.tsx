import React from 'react';
import Header from './Header';
import MockRouter from '~/helpers/MockRouter/MockRouter';
import { mountWithTheme } from '~/helpers/cypressThemeHelper';

describe('Header Component', () => {
  it('renders Header', () => {
    mountWithTheme(
      <MockRouter>
        <Header />
      </MockRouter>,
    );

    cy.get('.comp-header');
    cy.get('.comp-header-toolbar__top');
    cy.get('.comp-header-toolbar__main');
    cy.get('.comp-header-toolbar__bottom');
    cy.get('.header-logo');
  });

  it('renders with a custom class name', () => {
    mountWithTheme(
      <MockRouter>
        <Header className="test" />
      </MockRouter>,
    );

    cy.get('.comp-header.test');
  });

  it('search and menu drawers work at tablet/mobile', () => {
    mountWithTheme(
      <MockRouter>
        <Header />
      </MockRouter>,
    );

    cy.viewport('ipad-2');
    cy.get('.header-drawer--search').should('not.be.visible');
    cy.get('.header-drawer--mobile-menu').should('not.be.visible');
    cy.get('.comp-header-toolbar__main-mobile [aria-label="open site search"]').click();
    cy.get('.header-drawer--search').should('be.visible');
    cy.get('.comp-header-toolbar__main-mobile [aria-label="close site search"]').click();
    cy.get('.header-drawer--search').should('not.be.visible');
    cy.get('.comp-header-toolbar__main-mobile [aria-label="open site menu"]').click();
    cy.get('.header-drawer--mobile-menu').should('be.visible');
    cy.get('.comp-header-toolbar__main-mobile [aria-label="close site menu"]').click();
    cy.get('.header-drawer--mobile-menu').should('not.be.visible');
  });
});
