import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v9140 from './v9140'

export class IdentityIdentitySetEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'identity.IdentitySet')
  }

  /**
   *  A name was set or reset (which will remove all judgements).
   */
  get isV5(): boolean {
    return this.ctx._chain.getEventHash('identity.IdentitySet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A name was set or reset (which will remove all judgements).
   */
  get asV5(): Uint8Array {
    assert(this.isV5)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get asV9140(): {who: v9140.AccountId32} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {who: v9140.AccountId32} {
    deprecateLatest()
    return this.asV9140
  }
}
