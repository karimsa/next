import PropTypes from 'prop-types'
import classNames from 'classnames'

export function Input({
	type = 'text',
	className = '',
	value,
	onChange,
	...props
}) {
	return (
		<input
			{...props}
			className={classNames('rounded border shadow px-3 py-2', className)}
			type={type}
			value={value}
			onChange={(evt) => onChange(evt.target.value)}
		/>
	)
}
Input.propTypes = {
	type: PropTypes.string,
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
}
