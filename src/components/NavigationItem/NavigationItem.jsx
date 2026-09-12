import { useRef, useState } from 'react'
import { storyblokEditable } from '@storyblok/react'
import styles from './NavigationItem.module.css'

function NavigationItem({
  item,
  controlledOpen,
  onOpen,
  onClose,
}) {
  const [localOpen, setLocalOpen] = useState(false)
  const [openChildId, setOpenChildId] = useState(null)

  const closeTimer = useRef(null)

  const isControlled = typeof controlledOpen === 'boolean'
  const isOpen = isControlled ? controlledOpen : localOpen

  const href = item.link?.url || item.link?.cached_url
  const hasLink = Boolean(href)
  const hasChildren = item.children?.length > 0

  const handlePointerEnter = (event) => {
    if (event.pointerType !== 'mouse') {
      return
    }

    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }

    if (isControlled) {
      onOpen?.()
    } else {
      setLocalOpen(true)
    }
  }

  const handlePointerLeave = (event) => {
    if (event.pointerType !== 'mouse') {
      return
    }

    if (event.currentTarget.contains(event.relatedTarget)) {
      return
    }

    closeTimer.current = setTimeout(() => {
      if (isControlled) {
        onClose?.()
      } else {
        setLocalOpen(false)
      }

      setOpenChildId(null)
    }, 500)
  }

  const handleToggle = () => {
    if (!hasChildren) {
      return
    }

    if (isControlled) {
      if (isOpen) {
        onClose?.()
      } else {
        onOpen?.()
      }
    } else {
      setLocalOpen((open) => !open)
    }
  }

  return (
    <li
      className={styles.item}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...storyblokEditable(item)}
    >
      {hasLink ? (
        <a
          className={styles.link}
          href={href}
          target={item.link?.target === '_blank' ? '_blank' : undefined}
          rel={
            item.link?.target === '_blank'
              ? 'noopener noreferrer'
              : undefined
          }
        >
          {item.label}
        </a>
      ) : (
        <button
          type="button"
          className={styles.label}
          onClick={handleToggle}
          aria-expanded={hasChildren ? isOpen : undefined}
        >
          {item.label}
        </button>
      )}

      {hasChildren && (
        <ul
          className={`${styles.submenu} ${
            isOpen ? styles.submenuOpen : ''
          }`}
        >
          {item.children.map((child) => (
            <NavigationItem
              key={child._uid}
              item={child}
              controlledOpen={openChildId === child._uid}
              onOpen={() => setOpenChildId(child._uid)}
              onClose={() =>
                setOpenChildId((currentId) =>
                  currentId === child._uid ? null : currentId
                )
              }
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavigationItem