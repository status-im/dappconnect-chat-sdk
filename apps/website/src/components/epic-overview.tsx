import { useEffect, useState } from 'react'

import { Tag, Text } from '@status-im/components'
import { OpenIcon } from '@status-im/icons'

import { Chart } from './chart/chart'

const DATA = [
  {
    date: '2022-01-25',
    open_issues: 100,
    closed_issues: 2,
  },
  {
    date: '2022-01-26',
    open_issues: 100,
    closed_issues: 10,
  },
  {
    date: '2022-01-27',
    open_issues: 100,
    closed_issues: 20,
  },
  {
    date: '2022-01-28',
    open_issues: 90,
    closed_issues: 30,
  },
  {
    date: '2022-01-29',
    open_issues: 80,
    closed_issues: 40,
  },
  {
    date: '2022-01-30',
    open_issues: 40,
    closed_issues: 80,
  },
  {
    date: '2022-01-31',
    open_issues: 30,
    closed_issues: 90,
  },
  {
    date: '2022-02-01',
    open_issues: 25,
    closed_issues: 95,
  },
  {
    date: '2022-02-02',
    open_issues: 20,
    closed_issues: 98,
  },
  {
    date: '2022-02-03',
    open_issues: 10,
    closed_issues: 130,
  },
  {
    date: '2022-02-04',
    open_issues: 10,
    closed_issues: 140,
  },
  {
    date: '2022-02-05',
    open_issues: 10,
    closed_issues: 150,
  },
  {
    date: '2022-02-06',
    open_issues: 10,
    closed_issues: 160,
  },
  {
    date: '2022-02-07',
    open_issues: 10,
    closed_issues: 180,
  },
  {
    date: '2022-02-08',
    open_issues: 10,
    closed_issues: 190,
  },
  {
    date: '2022-02-09',
    open_issues: 10,
    closed_issues: 200,
  },
  {
    date: '2022-02-10',
    open_issues: 0,
    closed_issues: 220,
  },
]

type Props = {
  title: string
  description: string
  fullscreen?: boolean
}

export const EpicOverview = (props: Props) => {
  const { title, description, fullscreen } = props

  // Simulating loading state
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <div className="flex items-center gap-1">
        <Text size={fullscreen ? 27 : 19} weight="semibold">
          {title}
        </Text>
        <OpenIcon size={20} />
      </div>
      <Text size={fullscreen ? 19 : 15} color="$neutral-50">
        {description}
      </Text>
      <div className="flex py-3">
        <Tag size={24} label="E:CommunitiesProtocol" />
      </div>

      <Chart data={DATA} height={300} isLoading={isLoading} />

      <div className="flex justify-between pt-3">
        <div className="flex gap-1">
          <Tag size={24} label="Communities" />
          <Tag size={24} label="Wallet" />
        </div>

        <div className="flex gap-1">
          <Tag size={24} label="M:0.11.0" />
          <Tag size={24} label="M:0.12.0" />
        </div>
      </div>
    </div>
  )
}
