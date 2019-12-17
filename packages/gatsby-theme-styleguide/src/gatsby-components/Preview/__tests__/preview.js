import React from 'react'
const { mount, shallow } = require('enzyme')
import { StaticQuery, query } from 'gatsby'

import Preview from '../Preview'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allPreview: {
        edges: [
          {
            node: {
              id: '3d888a2b-320e-5698-8933-13c3df3b1621',
              path: 'src/docs/Components/Buttons/previews/button-icon-position',
              codes: {
                js: '',
                html:
                  '<div class="example">\n  <a href="#" class="mc-button">\n    <svg class="mc-button__icon  mc-button__icon--m">\n      <use xlink:href="#icon" />\n    </svg>\n    <span class="mc-button__label">\n      Icon on the left\n    </span>\n  </a>\n  <a href="#" class="mc-button">\n    <span class="mc-button__label">\n      Icon on the right\n    </span>\n    <svg class="mc-button__icon  mc-button__icon--m">\n      <use xlink:href="#icon" />\n    </svg>\n  </a>\n</div>\n\n<svg xmlns="http://www.w3.org/2000/svg" style="display: none">\n  <symbol id="icon" viewBox="0 0 24 24">\n    <path\n      d="M17.13 16.57H8a1 1 0 0 1-1-.74L4.39 6H3a1 1 0 0 1 0-2h2.15a1 1 0 0 1 1 .74l.53 2H20A1 1 0 0 1 20.94 8l-2.87 7.87a1 1 0 0 1-.94.7zm-8.34-2h7.64l2.14-5.87H7.2z"\n    />\n    <circle cx="9.46" cy="19.85" r="2.15" />\n    <circle cx="15.69" cy="19.85" r="2.15" />\n  </symbol>\n</svg>\n',
                scss:
                  "@import 'settings-tools/_all-settings';\n\n@include import-font-families();\n\n@import 'components/_c.button';\n\n.example {\n  text-align: center;\n  margin: $mu100 auto;\n}\n",
                css:
                  '/* create columns */\n/* create columns */\n/* create custom named columns with custom content */\n@font-face {\n  font-family: \'LeroyMerlin\';\n  src: url("/fonts/LeroyMerlinSans-Web-Light.woff2") format("woff2"), url("/fonts/LeroyMerlinSans-Web-Light.woff") format("woff");\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \'LeroyMerlin\';\n  src: url("/fonts/LeroyMerlinSans-Web-Regular.woff2") format("woff2"), url("/fonts/LeroyMerlinSans-Web-Regular.woff") format("woff");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \'LeroyMerlin\';\n  src: url("/fonts/LeroyMerlinSans-Web-SemiBold.woff2") format("woff2"), url("/fonts/LeroyMerlinSans-Web-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \'LeroyMerlin\';\n  src: url("/fonts/LeroyMerlinSans-Web-LightItalic.woff2") format("woff2"), url("/fonts/LeroyMerlinSans-Web-LightItalic.woff") format("woff");\n  font-weight: 300;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \'LeroyMerlin\';\n  src: url("/fonts/LeroyMerlinSans-Web-Italic.woff2") format("woff2"), url("/fonts/LeroyMerlinSans-Web-Italic.woff") format("woff");\n  font-weight: 400;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \'LeroyMerlin\';\n  src: url("/fonts/LeroyMerlinSans-Web-SemiBoldItalic.woff2") format("woff2"), url("/fonts/LeroyMerlinSans-Web-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n.mc-button {\n  margin: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  text-decoration: none;\n  outline: none;\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  color: #ffffff;\n  fill: currentColor;\n  background-color: #78be20;\n  font-family: \'LeroyMerlin\', sans-serif;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1;\n  padding: 0.25rem 2rem;\n  min-height: 3rem;\n  min-width: 3rem;\n  /* ie11 hack to center vertically */\n  /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n  height: 0;\n  cursor: pointer;\n  border-radius: 4px;\n  text-align: center;\n  border: 2px solid transparent;\n  -webkit-transition: all ease 200ms;\n  -o-transition: all ease 200ms;\n  transition: all ease 200ms;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.mc-button:hover, .mc-button.is-hover {\n  background-color: #41a017;\n  color: #ffffff;\n}\n\n.mc-button:hover, .mc-button.is-hover {\n  background-color: #41a017;\n  color: #ffffff;\n}\n\n.mc-button:focus, .mc-button.is-focus {\n  border-color: #158110;\n}\n\n.mc-button:active, .mc-button.is-active {\n  background-color: #158110;\n}\n\n.mc-button:disabled, .mc-button.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n.mc-button:focus, .mc-button.is-focus {\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\n.mc-button--s {\n  font-size: 0.875rem;\n  line-height: 1;\n  padding: 0.25rem 1rem;\n  min-height: 2rem;\n  min-width: 2rem;\n  /* ie11 hack to center vertically */\n  /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n  height: 0;\n}\n\n.mc-button--m {\n  font-size: 1rem;\n  line-height: 1;\n  padding: 0.25rem 2rem;\n  min-height: 3rem;\n  min-width: 3rem;\n  /* ie11 hack to center vertically */\n  /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n  height: 0;\n}\n\n.mc-button--l {\n  font-size: 1.125rem;\n  line-height: 1;\n  padding: 0.25rem 2rem;\n  min-height: 3.5rem;\n  min-width: 3.5rem;\n  /* ie11 hack to center vertically */\n  /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n  height: 0;\n}\n\n.mc-button--fit {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.mc-button--full {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.mc-button--square {\n  padding: 0;\n}\n\n.mc-button__icon:last-child {\n  margin-left: 0.5rem;\n  margin-right: -0.25rem;\n}\n\n.mc-button__icon:first-child {\n  margin-right: 0.5rem;\n  margin-left: -0.25rem;\n}\n\n.mc-button__icon:only-child {\n  margin: 0;\n}\n\n.mc-button__icon--s {\n  width: 1rem;\n  height: 1rem;\n}\n\n.mc-button__icon--m {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.mc-button__icon--l {\n  width: 2rem;\n  height: 2rem;\n}\n\n.mc-button__icon--xl {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n\n.mc-button__label {\n  -webkit-transform: translateY(-0.125em);\n      -ms-transform: translateY(-0.125em);\n          transform: translateY(-0.125em);\n}\n\n.mc-button--solid-primary-02 {\n  color: #ffffff;\n  fill: currentColor;\n  background-color: #007574;\n}\n\n.mc-button--solid-primary-02:hover, .mc-button--solid-primary-02.is-hover {\n  background-color: #063a44;\n  color: #ffffff;\n}\n\n.mc-button--solid-primary-02:hover, .mc-button--solid-primary-02.is-hover {\n  background-color: #063a44;\n  color: #ffffff;\n}\n\n.mc-button--solid-primary-02:focus, .mc-button--solid-primary-02.is-focus {\n  border-color: #062b35;\n}\n\n.mc-button--solid-primary-02:active, .mc-button--solid-primary-02.is-active {\n  background-color: #062b35;\n}\n\n.mc-button--solid-primary-02:disabled, .mc-button--solid-primary-02.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n.mc-button--solid-neutral {\n  color: #ffffff;\n  fill: currentColor;\n  background-color: #887f87;\n}\n\n.mc-button--solid-neutral:hover, .mc-button--solid-neutral.is-hover {\n  background-color: #554f52;\n  color: #ffffff;\n}\n\n.mc-button--solid-neutral:hover, .mc-button--solid-neutral.is-hover {\n  background-color: #554f52;\n  color: #ffffff;\n}\n\n.mc-button--solid-neutral:focus, .mc-button--solid-neutral.is-focus {\n  border-color: #222020;\n}\n\n.mc-button--solid-neutral:active, .mc-button--solid-neutral.is-active {\n  background-color: #3c3738;\n}\n\n.mc-button--solid-neutral:disabled, .mc-button--solid-neutral.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n.mc-button--solid-danger {\n  color: #ffffff;\n  fill: currentColor;\n  background-color: #df382b;\n}\n\n.mc-button--solid-danger:hover, .mc-button--solid-danger.is-hover {\n  background-color: #b42a27;\n  color: #ffffff;\n}\n\n.mc-button--solid-danger:hover, .mc-button--solid-danger.is-hover {\n  background-color: #b42a27;\n  color: #ffffff;\n}\n\n.mc-button--solid-danger:focus, .mc-button--solid-danger.is-focus {\n  border-color: #8b2226;\n}\n\n.mc-button--solid-danger:active, .mc-button--solid-danger.is-active {\n  background-color: #8b2226;\n}\n\n.mc-button--solid-danger:disabled, .mc-button--solid-danger.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n.mc-button--bordered {\n  color: #78be20;\n  fill: currentColor;\n  border: 2px solid #78be20;\n  background-color: #ffffff;\n}\n\n.mc-button--bordered:hover, .mc-button--bordered.is-hover {\n  background-color: #eaf3e2;\n  color: #78be20;\n}\n\n.mc-button--bordered:focus, .mc-button--bordered.is-focus {\n  border-color: #158110;\n}\n\n.mc-button--bordered:active, .mc-button--bordered.is-active {\n  background-color: #cbe3b5;\n}\n\n.mc-button--bordered:disabled, .mc-button--bordered.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n.mc-button--bordered-primary-02 {\n  color: #007574;\n  fill: currentColor;\n  border: 2px solid #007574;\n  background-color: #ffffff;\n}\n\n.mc-button--bordered-primary-02:hover, .mc-button--bordered-primary-02.is-hover {\n  background-color: #dbedea;\n  color: #007574;\n}\n\n.mc-button--bordered-primary-02:focus, .mc-button--bordered-primary-02.is-focus {\n  border-color: #062b35;\n}\n\n.mc-button--bordered-primary-02:active, .mc-button--bordered-primary-02.is-active {\n  background-color: #a5d1cb;\n}\n\n.mc-button--bordered-primary-02:disabled, .mc-button--bordered-primary-02.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n.mc-button--bordered-neutral {\n  color: #554f52;\n  fill: currentColor;\n  border: 2px solid #554f52;\n  background-color: #ffffff;\n}\n\n.mc-button--bordered-neutral:hover, .mc-button--bordered-neutral.is-hover {\n  background-color: #eeeef0;\n  color: #554f52;\n}\n\n.mc-button--bordered-neutral:focus, .mc-button--bordered-neutral.is-focus {\n  border-color: #222020;\n}\n\n.mc-button--bordered-neutral:active, .mc-button--bordered-neutral.is-active {\n  background-color: #d3d2d6;\n}\n\n.mc-button--bordered-neutral:disabled, .mc-button--bordered-neutral.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n.mc-button--bordered-danger {\n  color: #df382b;\n  fill: currentColor;\n  border: 2px solid #df382b;\n  background-color: #ffffff;\n}\n\n.mc-button--bordered-danger:hover, .mc-button--bordered-danger.is-hover {\n  background-color: #feedee;\n  color: #df382b;\n}\n\n.mc-button--bordered-danger:focus, .mc-button--bordered-danger.is-focus {\n  border-color: #8b2226;\n}\n\n.mc-button--bordered-danger:active, .mc-button--bordered-danger.is-active {\n  background-color: #fab9bc;\n}\n\n.mc-button--bordered-danger:disabled, .mc-button--bordered-danger.is-disabled {\n  border-color: transparent;\n  background-color: #eeeef0;\n  color: #887f87;\n  cursor: default;\n}\n\n@media screen and (min-width: 680px) {\n  .mc-button--s\\@from-m {\n    font-size: 0.875rem;\n    line-height: 1;\n    padding: 0.25rem 1rem;\n    min-height: 2rem;\n    min-width: 2rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--m\\@from-m {\n    font-size: 1rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3rem;\n    min-width: 3rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--l\\@from-m {\n    font-size: 1.125rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3.5rem;\n    min-width: 3.5rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--fit\\@from-m {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .mc-button--full\\@from-m {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .mc-button--s\\@from-l {\n    font-size: 0.875rem;\n    line-height: 1;\n    padding: 0.25rem 1rem;\n    min-height: 2rem;\n    min-width: 2rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--m\\@from-l {\n    font-size: 1rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3rem;\n    min-width: 3rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--l\\@from-l {\n    font-size: 1.125rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3.5rem;\n    min-width: 3.5rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--fit\\@from-l {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .mc-button--full\\@from-l {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .mc-button--s\\@from-xl {\n    font-size: 0.875rem;\n    line-height: 1;\n    padding: 0.25rem 1rem;\n    min-height: 2rem;\n    min-width: 2rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--m\\@from-xl {\n    font-size: 1rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3rem;\n    min-width: 3rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--l\\@from-xl {\n    font-size: 1.125rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3.5rem;\n    min-width: 3.5rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--fit\\@from-xl {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .mc-button--full\\@from-xl {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 1920px) {\n  .mc-button--s\\@from-xxl {\n    font-size: 0.875rem;\n    line-height: 1;\n    padding: 0.25rem 1rem;\n    min-height: 2rem;\n    min-width: 2rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--m\\@from-xxl {\n    font-size: 1rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3rem;\n    min-width: 3rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--l\\@from-xxl {\n    font-size: 1.125rem;\n    line-height: 1;\n    padding: 0.25rem 2rem;\n    min-height: 3.5rem;\n    min-width: 3.5rem;\n    /* ie11 hack to center vertically */\n    /* see : https://github.com/philipwalton/flexbugs/issues/231 */\n    height: 0;\n  }\n  .mc-button--fit\\@from-xxl {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .mc-button--full\\@from-xxl {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.example {\n  text-align: center;\n  margin: 1rem auto;\n}\n',
              },
            },
          },
        ],
      },
    })
  )
})

describe(`Preview Component`, () => {
  test(`check iframe's src`, () => {
    const location = {
      pathname: 'src/docs/Components/Buttons/previews/button-icon-position',
    }
    const preview = mount(
      <Preview location={location} path={'button-icon-position'} />
    )
    const iframe = preview.find('PreviewComponent')
    expect(
      iframe
        .find('iframe')
        .props()
        .src.split('/')
        .pop()
    ).toBe('button-icon-position.html')
  })
})
