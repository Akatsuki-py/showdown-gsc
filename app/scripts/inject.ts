const extensionID = chrome.i18n.getMessage('@@extension_id');
const seDir = `chrome-extension://${extensionID}/images/se/`;
const musicDir = `chrome-extension://${extensionID}/images/music/`;
const introDir = `chrome-extension://${extensionID}/images/intro/`;

const SelectSE = new Audio(`chrome-extension://${extensionID}/images/se/Select.wav`);

export const injectSEDir = () => {
    const th = document.getElementsByTagName('body')[0];
    const s = document.createElement('script');
    s.textContent = `const seDir = "${seDir}"`;
    return th.appendChild(s);
};

export const injectMusicDir = () => {
    const th = document.getElementsByTagName('body')[0];
    const s = document.createElement('script');
    s.textContent = `const musicDir = "${musicDir}"`;
    return th.appendChild(s);
};

export const injectIntroDir = () => {
    const th = document.getElementsByTagName('body')[0];
    const s = document.createElement('script');
    s.textContent = `const introDir = "${introDir}"`;
    return th.appendChild(s);
};

export const injectSelectSE = () => {
    const moves = document.getElementsByName('chooseMove');
    for (let i = 0; i < 4; i++) {
        const move = moves[i];
        move.onmousedown = function() {
            SelectSE.play();
        };
    }

    const switchmenu = document.getElementsByClassName('switchmenu');
    const btns = switchmenu[0].getElementsByTagName('button');

    for (let i = 0; i < 6; i++) {
        const btn = btns[i];
        btn.onmousedown = function() {
            SelectSE.play();
        };
    }
};
