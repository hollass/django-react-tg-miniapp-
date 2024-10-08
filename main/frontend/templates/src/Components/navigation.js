import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Button, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Navig() {
    return (
        <div className={'navigation'}>
            <ButtonGroup>
                <Link to="/">
                    <Button variant="link">
                        <div className="nav">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                                          stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                                    <path
                                        d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                                        stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                                </g>
                            </svg>
                            <p>Главная</p>
                        </div>
                    </Button>
                </Link>
                <Link to="/add_zapisi" >
                    <Button variant="link">
                        <div className="nav">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M21 11.9998H18.6361C17.9781 11.9998 17.6491 11.9998 17.3578 12.1296C17.0665 12.2593 16.8463 12.504 16.4059 12.9932L15.3767 14.1369C15.0154 14.5382 14.8348 14.7389 14.6057 14.734C14.3766 14.7291 14.2049 14.521 13.8616 14.1048L10.3334 9.82819C10.0133 9.44017 9.85321 9.24615 9.63599 9.23311C9.41877 9.22006 9.23663 9.39352 8.87237 9.74044L7.36897 11.1723C6.93986 11.5809 6.7253 11.7853 6.45709 11.8926C6.18887 11.9998 5.89258 11.9998 5.3 11.9998H3"
                                        stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                                    <path
                                        d="M8.96173 18.9108L9.42605 18.3219L8.96173 18.9108ZM12 5.5006L11.4596 6.0207C11.601 6.1676 11.7961 6.2506 12 6.2506C12.2039 6.2506 12.399 6.1676 12.5404 6.0207L12 5.5006ZM15.0383 18.9109L15.5026 19.4999V19.4999L15.0383 18.9109ZM12 20.4859L12 19.7359L12 20.4859ZM2.65666 13.3964C2.87558 13.748 3.33811 13.8556 3.68974 13.6367C4.04137 13.4178 4.14895 12.9552 3.93003 12.6036L2.65666 13.3964ZM6.52969 15.7718C6.23645 15.4793 5.76158 15.4798 5.46903 15.7731C5.17649 16.0663 5.17706 16.5412 5.47031 16.8337L6.52969 15.7718ZM2.75 9.13707C2.75 6.33419 4.00722 4.59507 5.57921 3.99711C7.15546 3.39753 9.35129 3.8302 11.4596 6.0207L12.5404 4.9805C10.1489 2.49583 7.3447 1.72069 5.04591 2.59512C2.74286 3.47116 1.25 5.88785 1.25 9.13707H2.75ZM15.5026 19.4999C16.9949 18.3234 18.7837 16.7461 20.2061 14.9838C21.6126 13.2412 22.75 11.2089 22.75 9.13703H21.25C21.25 10.688 20.3777 12.3829 19.0389 14.0417C17.716 15.6807 16.0239 17.1788 14.574 18.3219L15.5026 19.4999ZM22.75 9.13703C22.75 5.88784 21.2571 3.47115 18.9541 2.59511C16.6553 1.7207 13.8511 2.49583 11.4596 4.9805L12.5404 6.0207C14.6487 3.8302 16.8445 3.39753 18.4208 3.99711C19.9928 4.59506 21.25 6.33418 21.25 9.13703H22.75ZM8.49742 19.4998C9.77172 20.5044 10.6501 21.2359 12 21.2359L12 19.7359C11.2693 19.7359 10.8157 19.4174 9.42605 18.3219L8.49742 19.4998ZM14.574 18.3219C13.1843 19.4174 12.7307 19.7359 12 19.7359L12 21.2359C13.3499 21.2359 14.2283 20.5044 15.5026 19.4999L14.574 18.3219ZM3.93003 12.6036C3.18403 11.4054 2.75 10.2312 2.75 9.13707H1.25C1.25 10.617 1.83054 12.0695 2.65666 13.3964L3.93003 12.6036ZM9.42605 18.3219C8.50908 17.599 7.49093 16.7307 6.52969 15.7718L5.47031 16.8337C6.48347 17.8445 7.54819 18.7515 8.49742 19.4998L9.42605 18.3219Z"
                                        fill="#1C274C"></path>
                                </g>
                            </svg>
                            <p>Записаться</p></div>
                    </Button>
                </Link>
                <Link to="/zapisi">

                    <Button variant="link">
                        <div className="nav">
                            <svg className={'icon'} width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M21 16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V13.0002M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V12.0002M8 4.00195C5.82497 4.01406 4.64706 4.11051 3.87868 4.87889C3.11032 5.64725 3.01385 6.82511 3.00174 9"
                                        stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                                    <path d="M9 17.5H15" stroke="#1C274C" strokeWidth="1.5"
                                          strokeLinecap="round"></path>
                                    <path
                                        d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
                                        stroke="#1C274C" strokeWidth="1.5"></path>
                                    <path d="M8 14H9M16 14H12" stroke="#1C274C" strokeWidth="1.5"
                                          strokeLinecap="round"></path>
                                    <path d="M17 10.5H15M12 10.5H7" stroke="#1C274C" strokeWidth="1.5"
                                          strokeLinecap="round"></path>
                                </g>
                            </svg>
                            <p>Записи</p>
                        </div>
                    </Button>
                </Link>
                <Link to="/profile">

                    <Button variant="link">

                        <div className="nav">
                            <svg className={'icon'} width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M8 13H16C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5M8 13C6.28928 13 4.84936 14.2804 4.64948 15.9795L4 21.5M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V17"
                                        stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                                    <circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5"></circle>
                                </g>
                            </svg>
                            <p>Профиль</p>
                        </div>
                    </Button>
                </Link>


            </ButtonGroup>
        </div>
    )
}