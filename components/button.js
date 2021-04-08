import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Spinner } from './spinner'

const color = ([name, depth], delta = 0) => {
	if (!depth) {
		return name
	}
	return `${name}-${depth + delta}`
}

/**
 * Dear Tailwind, please do not purge:
 *
 * bg-indigo-500
 * bg-indigo-600
 * bg-blue-500
 * bg-blue-600
 */

const ButtonSizes = {
	sm: 'px-2 py-1',
	md: 'px-2 py-2',
	lg: 'px-4 py-3',
}

export function Button({
	type = 'button',
	textColor = ['white'],
	bgColor = ['blue', 500],
	size = 'lg',
	href,
	onClick,
	block = false,
	className = '',
	children,
	disabled,
	isLoading,
	icon = null,

	...props
}) {
	disabled = disabled || isLoading
	return (
		<button
			type={type}
			className={classNames(
				`font-bold rounded-2xl bg-${color(bgColor)} text-${color(
					textColor,
				)} items-center`,
				'dark:bg-gray-700 dark:border dark:border-gray-600',
				ButtonSizes[size] || ButtonSizes.lg,
				className,
				{
					'inline-block': !block && !className.match(/flex|block|inline/),
					'block w-full': block && !className.match(/flex|block|inline/),

					'opacity-75 cursor-not-allowed': disabled,
					[`hover:shadow hover:scale-105 transform transition-transform hover:bg-${color(
						bgColor,
						100,
					)}`]: !disabled,
				},
			)}
			onClick={(evt) => {
				evt.preventDefault()
				if (!disabled && onClick) {
					onClick()
				} else if (!disabled && href) {
					if (href[0] === '#') {
						location.href = href
					} else {
						window.open(href, '_blank', 'noreferrer')
					}
				}
			}}
			disabled={disabled}
			{...props}
		>
			{icon && !isLoading && <span className="mr-2">{icon}</span>}
			{isLoading && <Spinner />}
			{children}
		</button>
	)
}
Button.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
	href: PropTypes.string,
	textColor: PropTypes.array,
	bgColor: PropTypes.array,
	onClick: PropTypes.func,
	block: PropTypes.bool,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	icon: PropTypes.any,
}
