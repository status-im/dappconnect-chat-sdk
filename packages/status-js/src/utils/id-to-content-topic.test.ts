import { describe, expect, it } from 'vitest'

import { idToContentTopic } from './id-to-content-topic'

describe('idToContentTopic', () => {
  it('should return content topic', () => {
    expect(idToContentTopic).toBeDefined()
  })
})
