/**
 * @author WMXPY
 * @namespace Shiny
 * @description Convert
 */

export const createRGB = (red: number | string, green: number | string, blue: number | string, space: boolean = false): string => {

    if (space) {
        return `rgb(${red}, ${green}, ${blue})`;
    }
    return `rgb(${red},${green},${blue})`;
};

export const createRGBA = (red: number | string, green: number | string, blue: number | string, alpha: number | string, space: boolean = false): string => {

    if (space) {
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    return `rgba(${red},${green},${blue},${alpha})`;
};

export const convertHexToRGB = (hex: string, space: boolean = false): string => {
    // tslint:disable: no-magic-numbers

    if (hex.length === 7 && hex[0] === '#') {
        return convertHexToRGB(hex.substring(1), space);
    }

    if (hex.length === 6) {
        const red: number = parseInt(hex.substring(0, 2), 16);
        const green: number = parseInt(hex.substring(2, 4), 16);
        const blue: number = parseInt(hex.substring(4, 6), 16);

        return createRGB(red, green, blue, space);
    }

    return '';
    // tslint:enable: no-magic-numbers
};

export const convertHexToRGBA = (hex: string, alpha: string | number, space: boolean = false): string => {
    // tslint:disable: no-magic-numbers

    if (hex.length === 7 && hex[0] === '#') {
        return convertHexToRGBA(hex.substring(1), alpha, space);
    }

    if (hex.length === 6) {
        const red: number = parseInt(hex.substring(0, 2), 16);
        const green: number = parseInt(hex.substring(2, 4), 16);
        const blue: number = parseInt(hex.substring(4, 6), 16);

        return createRGBA(red, green, blue, alpha, space);
    }

    return '';
    // tslint:enable: no-magic-numbers
};
