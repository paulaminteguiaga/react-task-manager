import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {

    return (
        <button 
            style={{ backgroundColor: color }} 
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Default title'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
