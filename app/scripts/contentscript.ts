import { makeTeamiconsGen2, makeSwitchIconGen2 } from './icon';
import { injectSelectSE } from './inject';

// const extensionID = chrome.i18n.getMessage('@@extension_id');

const interval = setInterval(function() {
    const teamicons = document.getElementsByClassName('teamicons');
    makeTeamiconsGen2(teamicons);

    try {
        const switchmenu = document.getElementsByClassName('switchmenu');
        makeSwitchIconGen2(switchmenu);
    } catch {
        // ignore
    }
}, 100);

// SE
injectSelectSE();
