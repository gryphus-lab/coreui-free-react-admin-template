import { beforeEach, describe, expect, it } from 'vitest'
import { waitFor } from '@testing-library/react'
import Colors from './Colors'
import { renderWithProviders, resetStore } from 'src/test/test-utils'

describe('Colors', () => {
  beforeEach(() => {
    resetStore()
  })

  it('renders without throwing', async () => {
    const { container } = renderWithProviders(<Colors />)
    await waitFor(() => {
      expect(container.firstChild).toBeTruthy()
    })
  })
})
