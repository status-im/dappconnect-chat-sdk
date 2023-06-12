import { Breadcrumbs } from '@/components/breadcrumbs'
import { EpicOverview } from '@/components/epic-overview'
import { TableIssues } from '@/components/table-issues'
import { InsightsLayout } from '@/layouts/insights-layout'

import { epics } from '.'

import type { BreadcrumbsProps } from '@/components/breadcrumbs'
import type { GetStaticPaths, GetStaticProps, Page } from 'next'

type Params = { epic: string }

type Epic = (typeof epics)[number]

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = epics.map(epic => ({
    params: { epic: epic.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const epic = epics.find(epic => epic.id === context.params!.epic)!

  if (!epic) {
    return {
      // notFound: true,
      redirect: { destination: '/insights/epics', permanent: false },
    }
  }

  return {
    props: {
      epic,
      breadcrumbs: [
        {
          label: 'Epics',
          href: '/insights/epics',
        },
        {
          label: epic.title,
          href: `/insights/epics/${epic.id}`,
        },
      ],
    },
  }
}

type Props = {
  epic: Epic
  breadcrumbs: BreadcrumbsProps['items']
}

const EpicsDetailPage: Page<Props> = props => {
  const { epic, breadcrumbs } = props

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <div className="px-10 py-6">
        <EpicOverview
          title={epic.title}
          description={epic.description}
          fullscreen
        />

        <div role="separator" className="bg-neutral-10 -mx-6 my-6 h-px" />

        <TableIssues />
      </div>
    </div>
  )
}

EpicsDetailPage.getLayout = InsightsLayout

export default EpicsDetailPage
