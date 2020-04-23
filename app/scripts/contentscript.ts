import { makeTeamiconsGen2, makeSwitchIconGen2 } from './icon';
import { injectSEDir, injectMusicDir, injectIntroDir, injectEmbed, injectSelectSE } from './inject';

// const extensionID = chrome.i18n.getMessage('@@extension_id');
const switchmenu = document.getElementsByClassName('switchmenu');
makeSwitchIconGen2(switchmenu);

const interval = setInterval(function() {
    const teamicons = document.getElementsByClassName('teamicons');
    makeTeamiconsGen2(teamicons);
}, 100);

// SE
injectSEDir();
injectMusicDir();
injectIntroDir();
injectEmbed();
injectSelectSE();
