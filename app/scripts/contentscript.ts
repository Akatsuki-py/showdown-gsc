import { makeAvatarGen2 } from './trainer';
import { makeIconsGen2 } from './icon';
import { makeBackgroundGen2 } from './background';
import { injectNewGraphicsJS, injectLoadScript } from './bgm';

// const extensionID = chrome.i18n.getMessage('@@extension_id');

const interval = setInterval(function() {
    // トレーナースプライト
    const trainersprite = document.getElementsByClassName('trainersprite');
    makeAvatarGen2(trainersprite);

    // アイコン
    const teamicons = document.getElementsByClassName('teamicons');
    makeIconsGen2(teamicons);
}, 100);

// Background
const backdrop = document.getElementsByClassName('backdrop');
const leftbar = document.getElementsByClassName('leftbar');
const rightbar = document.getElementsByClassName('rightbar');
makeBackgroundGen2(backdrop, leftbar, rightbar);

// BGM
injectNewGraphicsJS();
injectLoadScript();
