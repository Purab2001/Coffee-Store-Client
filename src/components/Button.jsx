import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, className, icon, children }) => {
    return (
        <button
            onClick={onClick}
            className={`relative inline-block text-lg group cursor-pointer ${className}`}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
            <span className="relative z-10 inline-flex items-center gap-2 px-5 py-3 overflow-hidden font-medium leading-tight text-[#331A15] transition-colors duration-300 ease-out border-2 border-[#331A15] rounded-lg rancho text-xl">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#C19A6B]"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#D2B48C] group-hover:-rotate-180 ease"></span>
                <span className="relative">{text || children || 'Button Text'}</span>
                {icon && <span className="relative">{icon}</span>}
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#331A15] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node,
};

Button.defaultProps = {
    text: '',
    onClick: undefined,
    className: '',
    icon: null,
    children: null,
};

export default Button;