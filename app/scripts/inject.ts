const extensionID = chrome.i18n.getMessage('@@extension_id');

const SelectSE = new Audio(`chrome-extension://${extensionID}/images/se/Select.wav`);

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
