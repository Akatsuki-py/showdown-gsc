import { NameToID } from './util';

const trimStatus = (name: string): string => {
    const result = name.match(/\(.*\)/gi) || [''];
    const status = result[0];
    return name.replace(` ${status}`, '');
};

const isDone = (icon: Element): boolean => {
    if (icon) {
        const done = icon.getAttribute('done') || '';
        if (done == 'ok') {
            return true;
        }
        return false;
    } else {
        return true;
    }
};

const setDone = (icon: Element) => {
    if (icon) {
        icon.setAttribute('done', 'ok');
    }
};

const makeIconGen2 = (icon: HTMLSpanElement): HTMLSpanElement => {
    const extensionID = chrome.i18n.getMessage('@@extension_id');
    const ariaLabel = icon.getAttribute('aria-label') || '';
    let style = icon.getAttribute('style') || '';

    if (ariaLabel == 'Not revealed' || ariaLabel == 'Non-statused') {
        style = `background:transparent url(https://play.pokemonshowdown.com/sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll 12px 12px;`;
    } else {
        const name = trimStatus(ariaLabel);
        const ID = NameToID(name);
        style = `background:transparent url(chrome-extension://${extensionID}/images/minidex/${ID}/0.png) no-repeat scroll 12px 12px;`;
    }
    icon.setAttribute('style', style);

    return icon;
};

export const makeIconsGen2 = (teamicons: HTMLCollectionOf<Element>) => {
    const trainer = teamicons[0];
    if (!isDone(trainer)) {
        // 0, 1 => 自分1,2行目
        [0, 1].forEach((i) => {
            const row = teamicons[i];
            const icons = row.getElementsByTagName('span');
            icons[0] = makeIconGen2(icons[0]);
            icons[1] = makeIconGen2(icons[1]);
            icons[2] = makeIconGen2(icons[2]);
        });

        setDone(trainer);
    }

    const opponent = teamicons[3];
    if (!isDone(opponent)) {
        // 3, 4 => 相手1,2行目
        [3, 4].forEach((i) => {
            const row = teamicons[i];
            const icons = row.getElementsByTagName('span');
            icons[0] = makeIconGen2(icons[0]);
            icons[1] = makeIconGen2(icons[1]);
            icons[2] = makeIconGen2(icons[2]);
        });

        setDone(opponent);
    }
};
