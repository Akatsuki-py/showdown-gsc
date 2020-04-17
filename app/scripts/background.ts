const extensionID = chrome.i18n.getMessage('@@extension_id');

export const makeBackgroundGen2 = (
    backdrop: HTMLCollectionOf<Element>,
    leftbar: HTMLCollectionOf<Element>,
    rightbar: HTMLCollectionOf<Element>,
) => {
    if (backdrop.length > 0) {
        const background = `chrome-extension://${extensionID}/images/others/background.png`;
        const style = `display: block; background-image: url("${background}") !important;`;
        backdrop[0].setAttribute('style', style);
    }

    if (leftbar.length > 0) {
        const style =
            'position:absolute;top:0;left:0;height:450px;width:100px;background-color:#ccc;background-color:rgba(0,0,0,.0);';
        leftbar[0].setAttribute('style', style);
    }

    if (rightbar.length > 0) {
        const style =
            'position:absolute;top:0;right:0;height:450px;width:100px;background-color:#ccc;background-color:rgba(0,0,0,.0);';
        rightbar[0].setAttribute('style', style);
    }

    return;
};
