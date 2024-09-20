import { cloneElement, forwardRef, useId } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  ArrowRightIcon,
  CheckIcon,
  ExternalIcon,
  SearchIcon,
} from '@status-im/icons/20'
import { cva, cx } from 'cva'

import { Checkbox } from '../checkbox'
import { Input } from '../input'

import type { IconElement } from '../types'

type Props = DropdownMenu.DropdownMenuProps & {
  children: [React.ReactElement, React.ReactElement]
}

export const Root = (props: Props) => {
  const { children, ...rootProps } = props

  const [trigger, content] = children

  return (
    <DropdownMenu.Root {...rootProps}>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      {content}
    </DropdownMenu.Root>
  )
}

export const Content = forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  DropdownMenu.DropdownMenuContentProps
>((props, ref) => {
  const {
    align = 'start',
    side = 'bottom',
    sideOffset = 4,
    ...contentProps
  } = props
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        ref={ref}
        align={align}
        side={side}
        sideOffset={sideOffset}
        {...contentProps}
        className={cx(
          'w-64 rounded-12 border border-neutral-10 bg-white-100 p-1 shadow-3',
          'dark:border-neutral-90 dark:bg-neutral-95',
          props.className,
        )}
      />
    </DropdownMenu.Portal>
  )
})

Content.displayName = DropdownMenu.Content.displayName

export const Search = (props: React.ComponentPropsWithoutRef<typeof Input>) => {
  return (
    <div className="mb-1 p-1">
      <Input {...props} size="32" icon={<SearchIcon />} aria-label="Search" />
    </div>
  )
}

const itemStyles = cva({
  base: [
    'flex h-8 cursor-pointer select-none items-center gap-2 rounded-8 px-2 text-15 transition-colors active:bg-neutral-10',
    'outline-none data-[highlighted]:bg-neutral-5',
    'dark:active:bg-customisation-50/10 dark:hover:bg-customisation-50/5',
  ],
})

const iconStyles = cva({
  base: ['size-5 [&>svg]:size-full'],
  variants: {
    danger: {
      false: ['text-neutral-50 dark:text-neutral-40'],
      true: ['text-danger-50'],
    },
  },
  defaultVariants: {
    danger: false,
  },
})

const labelStyles = cva({
  base: ['font-medium'],
  variants: {
    danger: {
      false: ['text-neutral-100 dark:text-white-100'],
      true: ['text-danger-50 dark:text-danger-60'],
    },
  },
  defaultVariants: {
    danger: false,
  },
})

type DropdownMenuItemProps = DropdownMenu.DropdownMenuItemProps & {
  icon?: IconElement
  label: string
  onSelect: () => void
  selected?: boolean
  danger?: boolean
  external?: boolean
}

export const Item = forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  DropdownMenuItemProps
>((props, ref) => {
  const { icon, label, selected, danger, external, ...itemProps } = props

  return (
    <DropdownMenu.Item {...itemProps} ref={ref} className={itemStyles()}>
      {icon && (
        <span className={iconStyles({ danger })}>{cloneElement(icon)}</span>
      )}
      <span className={labelStyles({ danger })}>{label}</span>
      {selected && <CheckIcon className="ml-auto text-customisation-50" />}
      {external && <ExternalIcon className="ml-auto text-neutral-50" />}
    </DropdownMenu.Item>
  )
})

Item.displayName = DropdownMenu.Item.displayName

type CheckboxItemProps = DropdownMenu.DropdownMenuCheckboxItemProps & {
  icon?: IconElement
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  danger?: boolean
}

export const CheckboxItem = forwardRef<
  React.ElementRef<typeof DropdownMenu.CheckboxItem>,
  CheckboxItemProps
>((props, ref) => {
  const { label, icon, danger, ...itemProps } = props

  const id = useId()

  return (
    <DropdownMenu.CheckboxItem
      ref={ref}
      className={itemStyles()}
      {...itemProps}
    >
      {icon && (
        <span className={iconStyles({ danger })}>{cloneElement(icon)}</span>
      )}
      <span className={labelStyles({ danger })}>{label}</span>
      <div className="ml-auto">
        <Checkbox id={id} variant="outline" isSelected={itemProps.checked} />
      </div>
    </DropdownMenu.CheckboxItem>
  )
})

CheckboxItem.displayName = DropdownMenu.CheckboxItem.displayName

export const Separator = () => (
  <DropdownMenu.Separator className="-mx-1 my-1.5 h-px bg-neutral-20 dark:bg-neutral-80" />
)

export const Sub = (props: DropdownMenu.DropdownMenuProps) => {
  return <DropdownMenu.Sub {...props} />
}

type DropdownMenuSubTriggerProps = DropdownMenu.DropdownMenuSubTriggerProps & {
  icon?: IconElement
  label: string
  danger?: boolean
}

export const SubTrigger = (props: DropdownMenuSubTriggerProps) => {
  const { icon, label, danger, ...itemProps } = props

  return (
    <DropdownMenu.SubTrigger {...itemProps} className={itemStyles()}>
      {icon && (
        <span className={iconStyles({ danger })}>{cloneElement(icon)}</span>
      )}
      <span className={labelStyles({ danger })}>{label}</span>
      <ArrowRightIcon className="ml-auto text-neutral-50" />
    </DropdownMenu.SubTrigger>
  )
}

export const SubContent = forwardRef<
  React.ElementRef<typeof DropdownMenu.SubContent>,
  DropdownMenu.DropdownMenuSubContentProps
>((props, ref) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent
        ref={ref}
        className={cx(
          'w-64 rounded-12 border border-neutral-10 bg-white-100 p-1 shadow-3',
          'dark:border-neutral-90 dark:bg-neutral-95',
        )}
        {...props}
      >
        {props.children}
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  )
})

SubContent.displayName = DropdownMenu.SubContent.displayName
