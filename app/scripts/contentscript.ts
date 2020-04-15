import { makeAvatarGen2 } from './trainer';
import { makeIconGen2 } from './icon';

let trainerFlag = 0;

const interval = setInterval(function() {
    if (trainerFlag < 10 || trainerFlag % 10 == 0) {
        // トレーナースプライト
        const trainersprite = document.getElementsByClassName('trainersprite');
        makeAvatarGen2(trainersprite);
    }

    // アイコン
    const teamicons = document.getElementsByClassName('teamicons');
    console.log('teamicons: ', teamicons);
    // 0, 1, 3, 4 => 自分1,2 相手1,2行目
    [0, 1, 3, 4].forEach((i) => {
        const row = teamicons[i];
        const icons = row.getElementsByTagName('span');
        icons[0] = makeIconGen2(icons[0]);
        icons[1] = makeIconGen2(icons[1]);
        icons[2] = makeIconGen2(icons[2]);
    });
    trainerFlag++;
}, 1000);
