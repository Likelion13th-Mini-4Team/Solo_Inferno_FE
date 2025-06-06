export const BeforeIcon = ({ width = 14, height = 24, color = '#7F57FA' }) => {
    return (
    <svg 
    width={width}
    height={height}
    viewBox="0 0 14 24" 
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M0.821474 13.1783C0.509022 12.8658 0.333496 12.4419 0.333496 12C0.333496 11.5581 0.509022 11.1342 0.821474 10.8217L10.2498 1.39334C10.4036 1.23415 10.5875 1.10718 10.7908 1.01983C10.9941 0.932485 11.2128 0.886507 11.4341 0.884584C11.6554 0.882661 11.8749 0.924831 12.0797 1.00863C12.2846 1.09243 12.4706 1.21619 12.6271 1.37268C12.7836 1.52917 12.9074 1.71525 12.9912 1.92008C13.075 2.12491 13.1171 2.34437 13.1152 2.56567C13.1133 2.78697 13.0673 3.00567 12.98 3.20901C12.8926 3.41235 12.7657 3.59626 12.6065 3.75L4.35647 12L12.6065 20.25C12.9101 20.5643 13.0781 20.9853 13.0743 21.4223C13.0705 21.8593 12.8952 22.2774 12.5862 22.5864C12.2772 22.8954 11.8591 23.0707 11.4221 23.0745C10.9851 23.0783 10.5641 22.9103 10.2498 22.6067L0.821474 13.1783Z" 
    fill={color}/>
    </svg>
    );
  };
  
  export const MenuIcon = ({ width = 16, height = 16, color = '#7F57FA' }) => {
    return (
        <svg 
            width={width} 
            height={height}
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
            d="M0 0V3.2H16V0H0ZM0 6.4V9.6H16V6.4H0ZM0 12.8V16H16V12.8H0Z" 
            fill={color}
            />
        </svg>
    );
  };


