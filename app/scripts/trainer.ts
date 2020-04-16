import { URLExists } from './util';

// background-image: url(https://p…sprites/trainers/brycenman.png); => https://p…sprites/trainers/brycenman.png
const getAvatarURL = (style: string): string => {
    const result = style.match(/https:\/\/play.pokemonshowdown.com\/sprites\/trainers\/[a-z.]*/gi);
    if (result && result.length > 0) {
        return result[0];
    } else {
        return style;
    }
};

const isDone = (trainersprite: HTMLCollectionOf<Element>): boolean => {
    if (trainersprite.length == 2) {
        const trainer = trainersprite[0];
        const done = trainer.getAttribute('done') || '';

        const opponent = trainersprite[1];
        const odone = opponent.getAttribute('done') || '';
        if (done == 'ok' && odone == 'ok') {
            return true;
        }
        return false;
    } else {
        return true;
    }
};

const setDone = (trainersprite: HTMLCollectionOf<Element>) => {
    if (trainersprite.length == 2) {
        const trainer = trainersprite[0];
        trainer.setAttribute('done', 'ok');
        const opponent = trainersprite[1];
        opponent.setAttribute('done', 'ok');
    }
};

// brycenman.png => Does brycenman-gen2.png exists?
const getGen2 = (URL: string): string => {
    const URLgen2 = URL.replace('-gen4', '').replace('.png', '') + '-gen2.png';
    if (URLExists(URLgen2)) {
        return URLgen2;
    }
    return URL;
};

const getTrainerspriteStyle = (trainersprite: HTMLCollectionOf<Element>): string[] => {
    if (trainersprite.length == 2) {
        const trainer = trainersprite[0];
        const trainerStyle = trainer.getAttribute('style')?.replace(' ', '') || '';
        const opponent = trainersprite[1];
        const opponentStyle = opponent.getAttribute('style')?.replace('\n\t ', '') || '';
        return [trainerStyle, opponentStyle];
    } else {
        return [];
    }
};

// replace avatar style
const setTrainerspriteStyle = (trainersprite: HTMLCollectionOf<Element>, styles: string[]) => {
    if (trainersprite.length == 2) {
        const trainer = trainersprite[0];
        const opponent = trainersprite[1];
        trainer.setAttribute('style', styles[0]);
        opponent.setAttribute('style', styles[1]);
    }
};

const URLToStyle = (URL: string) => {
    return `background-image:url(${URL});`;
};

export const makeAvatarGen2 = (trainersprite: HTMLCollectionOf<Element>) => {
    if (isDone(trainersprite)) {
        return;
    }

    const styles = getTrainerspriteStyle(trainersprite);
    const [trainerStyle, opponentStyle] = styles;

    const trainerURL = getAvatarURL(trainerStyle);
    const opponentURL = getAvatarURL(opponentStyle);

    const trainerURLGen2 = getGen2(trainerURL);
    const opponentURLGen2 = getGen2(opponentURL);

    const trainerStyleGen2 = URLToStyle(trainerURLGen2);
    const opponentStyleGen2 = URLToStyle(opponentURLGen2);
    setTrainerspriteStyle(trainersprite, [trainerStyleGen2, opponentStyleGen2]);
    setDone(trainersprite);
};
