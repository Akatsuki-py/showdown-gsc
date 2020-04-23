import { NameToID } from './util';

const extensionID = chrome.i18n.getMessage('@@extension_id');

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

export const makeTeamiconsGen2 = (teamicons: HTMLCollectionOf<Element>) => {
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

export const makeSwitchIconGen2 = (switchmenu: HTMLCollectionOf<Element>) => {
    const btns = switchmenu[0].getElementsByTagName('button');

    for (let i = 0; i < 6; i++) {
        const btn = btns[i];
        const name = btn.textContent || '';
        const ID = NameToID(name);

        const style = `background:transparent url(chrome-extension://${extensionID}/images/minidex/${ID}/0.png) no-repeat scroll 12px 4px;`;
        const picon = btn.getElementsByClassName('picon')[0];
        picon.setAttribute('style', style);

        const hpbars = btn.getElementsByClassName('hpbar');
        if (hpbars.length > 0) {
            const hpbar = hpbars[0];
            const style = hpbar.getElementsByTagName('span')[0].style;
            let width = Number(style.width.replace('px', ''));
            width *= 190 / 92;
            style.width = String(width) + 'px';
        }
    }
};
