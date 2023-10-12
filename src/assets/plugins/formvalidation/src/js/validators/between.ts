/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
  Localization,
  ValidateInput,
  ValidateOptions,
  ValidateResult,
} from '../core/Core';
import format from '../utils/format';

export interface BetweenOptions extends ValidateOptions {
    // Default is true
    inclusive: boolean;
    max?: number;
    min?: number;
}
export interface BetweenLocalization extends Localization {
    between: {
        default: string,
        notInclusive: string,
    };
}

export default function between() {
    const formatValue = (value: number) => {
        return parseFloat(`${value}`.replace(',', '.'));
    };

    return {
        validate(input: ValidateInput<BetweenOptions, BetweenLocalization>): ValidateResult {
            const value = input.value;
            if (value === '') {
                return { valid: true };
            }

            const opts = Object.assign({}, { inclusive: true, message: '' }, input.options);
            const minValue = opts.min ? formatValue(opts.min) : null;
            const maxValue = opts.max ? formatValue(opts.max) : null;
            return opts.inclusive
                ? {
                    message: format(
                        input.l10n ? opts.message || input.l10n.between.default : opts.message,
                        [`${minValue}`, `${maxValue}`],
                    ),
                    valid: (!!minValue && !!maxValue && parseFloat(value) >= minValue && parseFloat(value) <= maxValue)
                            || (!minValue && !!maxValue && parseFloat(value) <= maxValue)
                            || (!!minValue && !maxValue && parseFloat(value) >= minValue)
                            || (!minValue && !maxValue),
                }
                : {
                    message: format(
                        input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message,
                        [`${minValue}`, `${maxValue}`],
                    ),
                    valid: (!!minValue && !!maxValue && parseFloat(value) > minValue && parseFloat(value) < maxValue)
                    || (!minValue && !!maxValue && parseFloat(value) < maxValue)
                    || (!!minValue && !maxValue && parseFloat(value) > minValue)
                    || (!minValue && !maxValue),
                };
        },
    };
}
