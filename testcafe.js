const { Selector, Role } = require('testcafe');

fixture`HomePage`.page`https://www.readeo.com/`;

test('Home page', async t => {
    // Test code

    await t.expect(Selector('h1').innerText).eql('Storytime is a video chat away');

    await t.expect(Selector('nav > a:nth-child(6) div').innerText).eql('log in')
});

fixture`Main App`.page`https://localhost:3000`;


const regularAccUser = Role('https://localhost:3000/login', async t => {
    await t
        .typeText('input[name="email"]', 'EMAIL')
        .typeText('input[name="password"]', 'PASSWORD')
        .click('button[type="submit"]')
        .click('button[aria-label="Close"]')
        .wait(1000)

});



test('Navigation', async t => {
    // Test code
    await t
        .useRole(regularAccUser)
        .expect(Selector('div[data-testid="NAV_MENU_DESKTOP"] > a:first-child > div').innerText).eql('LIBRARY')
        .expect(Selector('div[data-testid="NAV_MENU_DESKTOP"] > a:nth-child(2) > div').innerText).eql('BOOKSHELVES')

    //for mobile
    // .click('img[alt="book burger"]')
    // .expect(Selector('div[data-testid="NAV_MENU_MOBILE"] > a:first-child > div').innerText).eql('LIBRARY');
});

test('Dynamic Banner', async t => {
    await t
        .useRole(regularAccUser)
        .expect(Selector('#dynamicBanner > div > p').innerText).eql('Summertime Storytime')
        .expect(Selector('.mover-1').getStyleProperty('animation-play-state')).eql('running');
})
