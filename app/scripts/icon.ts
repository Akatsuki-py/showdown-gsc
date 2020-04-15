import { NameToID } from './util';

const trimStatus = (name: string): string => {
    const result = name.match(/\(.*\)/gi) || [''];
    const status = result[0];
    return name.replace(` ${status}`, '');
};

export const makeIconGen2 = (icon: HTMLSpanElement): HTMLSpanElement => {
    const extensionID = chrome.i18n.getMessage('@@extension_id');
    const ariaLabel = icon.getAttribute('aria-label') || '';
    let style = icon.getAttribute('style') || '';

    if (ariaLabel == 'Not revealed' || ariaLabel == 'Non-statused') {
        style = `background:transparent url(chrome-extension://${extensionID}/images/others/pokeball.png) no-repeat scroll 12px 12px;`;
    } else {
        const name = trimStatus(ariaLabel);
        const ID = NameToID(name);
        style = `background:transparent url(chrome-extension://${extensionID}/images/minidex/${ID}/0.png) no-repeat scroll 12px 12px;`;
    }
    icon.setAttribute('style', style);

    return icon;
};
