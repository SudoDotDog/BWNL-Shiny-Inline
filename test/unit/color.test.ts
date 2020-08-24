/**
 * @author WMXPY
 * @namespace Shiny
 * @description Color
 * @override Unit Test
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { LIME } from '../../src/color';

describe('Given [Color] Statics', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('shiny-color');

    it('should be all string', (): void => {

        expect(typeof LIME).to.be.equal('string');
    });
});
