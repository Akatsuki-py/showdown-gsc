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

export const injectEmbed = () => {
    const th = document.getElementsByTagName('body')[0];
    const style = document.createElement('style');
    style.textContent = `
        embed { display: none; }
        button:active + embed { display: block; }
    `;
    th.appendChild(style);

    const embed = document.createElement('object');
    embed.type = 'audio/wav';
    embed.data = `chrome-extension://${extensionID}/images/se/Select.wav`;
    th.appendChild(embed);
};

export const injectSelectSE = () => {
    const moves = document.getElementsByName('chooseMove');
    for (let i = 0; i < 4; i++) {
        const move = moves[i];
        move.onmousedown = function() {
            SelectSE.play();
        };
    }
};
