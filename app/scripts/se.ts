import { injectScript } from './util';

const extensionID = chrome.i18n.getMessage('@@extension_id');
const seDir = `chrome-extension://${extensionID}/images/se/`;

export const injectNewBattleJS = () => {
    injectScript(`chrome-extension://${extensionID}/images/others/battle.js`, 'html');
};

export const injectSEDir = () => {
    const th = document.getElementsByTagName('body')[0];
    const s = document.createElement('script');
    s.textContent = `const seDir = "${seDir}"`;
    return th.appendChild(s);
};
