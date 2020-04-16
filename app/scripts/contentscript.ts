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
