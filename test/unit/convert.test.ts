/**
 * @author WMXPY
 * @namespace Shiny_Inline
 * @description Convert
 * @override Unit Test
 */

import { expect } from 'chai';
import { convertHexToRGB, convertHexToRGBA } from '../../src/convert';

describe('Given [Convert] helper functions', (): void => {

    it('should be able to convert hex to rgb', (): void => {

        const hex: string = '#1256ab';
        const rgb: string = convertHexToRGB(hex);

        expect(rgb).to.be.equal('rgb(18,86,171)');
    });

    it('should be able to convert hex to rgb with space', (): void => {

        const hex: string = '#1256ab';
        const rgb: string = convertHexToRGB(hex, true);

        expect(rgb).to.be.equal('rgb(18, 86, 171)');
    });

    it('should be able to convert hex to rgba', (): void => {

        const hex: string = '#1256ab';
        const rgba: string = convertHexToRGBA(hex, '.5');

        expect(rgba).to.be.equal('rgba(18,86,171,.5)');
    });

    it('should be able to convert hex to rgba with space', (): void => {

        const hex: string = '#1256ab';
        const rgba: string = convertHexToRGBA(hex, '.5', true);

        expect(rgba).to.be.equal('rgba(18, 86, 171, .5)');
    });
});
