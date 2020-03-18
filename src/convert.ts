/**
 * @author WMXPY
 * @namespace Shiny
 * @description Convert
 */

export const convertHexToRGB = (hex: string): string => {
    // tslint:disable: no-magic-numbers

    if (hex.length === 7 && hex[0] === '#') {
        return convertHexToRGB(hex.substring(1));
    }

    if (hex.length === 6) {
        const red: number = parseInt(hex.substring(0, 2), 16);
        const green: number = parseInt(hex.substring(2, 4), 16);
        const blue: number = parseInt(hex.substring(4, 6), 16);

        return `rgb(${red}, ${green}, ${blue})`;
    }

    return '';
    // tslint:enable: no-magic-numbers
};

export const convertHexToRGBA = (hex: string, alpha: number): string => {
    // tslint:disable: no-magic-numbers

    if (hex.length === 7 && hex[0] === '#') {
        return convertHexToRGB(hex.substring(1));
    }

    if (hex.length === 6) {
        const red: number = parseInt(hex.substring(0, 2), 16);
        const green: number = parseInt(hex.substring(2, 4), 16);
        const blue: number = parseInt(hex.substring(4, 6), 16);

        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }

    return '';
    // tslint:enable: no-magic-numbers
};
