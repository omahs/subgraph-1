// common utilities and helper functions

import { BigDecimal, BigInt, log } from '@graphprotocol/graph-ts';


export let ZERO_BIG_DECIMAL = BigDecimal.fromString('0');
export let ZERO_BIG_INT = BigInt.fromI32(0);

export function tokensToDecimal(value: BigInt, decimals: BigInt = BigInt.fromI32(18)): BigDecimal {
    let denom = BigInt.fromI32(10).pow(decimals.toI32() as u8);
    return value.toBigDecimal().div(denom.toBigDecimal());
}