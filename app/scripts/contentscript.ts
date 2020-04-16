import { makeAvatarGen2 } from './trainer';
import { makeIconsGen2 } from './icon';

const interval = setInterval(function() {
    // トレーナースプライト
    const trainersprite = document.getElementsByClassName('trainersprite');
    makeAvatarGen2(trainersprite);

    // アイコン
    const teamicons = document.getElementsByClassName('teamicons');
    makeIconsGen2(teamicons);
}, 100);

// graphics.jsのスクリプトタグを独自のタグに書き換える
const replaceGraphicsJS = () => {
    const extensionID = chrome.i18n.getMessage('@@extension_id');
    const scriptTags = document.getElementsByTagName('script');
    for (let i = 0; i < scriptTags.length; i++) {
        const scriptTag = scriptTags[i];
        if (scriptTag.src.indexOf('graphics.js') !== -1) {
            scriptTag.setAttribute(
                'src',
                `chrome-extension://${extensionID}/scripts/graphics.js`,
            );
        }
    }
};

replaceGraphicsJS();
