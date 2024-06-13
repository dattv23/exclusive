import { Icon } from '@/types';
import React from 'react';

export const ArrowDownLeftIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icons:arrow-down-left">
        <path
          id="Vector"
          d="M6 18L18 6M6 8V18H16"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const ArrowDownRightIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icons:arrow-down-right">
        <path
          id="Vector"
          d="M18 18L6 6M8 18H18V8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const ArrowDownIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icons:arrow-down">
        <path
          id="Vector"
          d="M12 20V4M5 13L12 20L19 13"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const ArrowLeftIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icons:arrow-left">
        <path
          id="Vector"
          d="M11 5L4 12L11 19M4 12H20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const ArrowRightIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icons arrow-right">
        <path
          id="Vector"
          d="M3.5 12H20M20 12L13 5M20 12L13 19"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const ArrowUpIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icons:arrow-up">
        <path
          id="Vector"
          d="M12 20V4M5 11L12 4L19 11"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const BoxIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M1 5.29999V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H18C18.2652 20.5 18.5196 20.3946 18.7071 20.2071C18.8946 20.0196 19 19.7652 19 19.5V5.29999H1Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M19 5.3L16.1665 1.5H3.8335L1 5.3M13.7775 8.6C13.7775 10.699 12.0865 12.4 10 12.4C7.9135 12.4 6.222 10.699 6.222 8.6"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CancelIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-cancel" clipPath="url(#clip0_158_3778)">
        <path
          id="Vector"
          d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          id="Ellipse 26"
          cx="12"
          cy="12"
          r="11.25"
          stroke="black"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_158_3778">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CartIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Cart1">
        <path
          id="Vector"
          d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M2.25 3.75H5.25L7.5 16.5H19.5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CustomerServiceIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon-Customer service" clipPath="url(#clip0_138_1545)">
        <path
          id="Vector"
          d="M13.3333 25C13.3333 23.1591 11.8409 21.6667 9.99999 21.6667C8.15904 21.6667 6.66666 23.1591 6.66666 25V28.3334C6.66666 30.1743 8.15904 31.6667 9.99999 31.6667C11.8409 31.6667 13.3333 30.1743 13.3333 28.3334V25Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M33.3333 25C33.3333 23.1591 31.8409 21.6667 30 21.6667C28.159 21.6667 26.6667 23.1591 26.6667 25V28.3334C26.6667 30.1743 28.159 31.6667 30 31.6667C31.8409 31.6667 33.3333 30.1743 33.3333 28.3334V25Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M6.66666 25V20C6.66666 16.4638 8.07141 13.0724 10.5719 10.5719C13.0724 8.07145 16.4638 6.66669 20 6.66669C23.5362 6.66669 26.9276 8.07145 29.4281 10.5719C31.9286 13.0724 33.3333 16.4638 33.3333 20V25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M30 31.6667C30 32.9928 28.9464 34.2645 27.0711 35.2022C25.1957 36.1399 22.6522 36.6667 20 36.6667"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_138_1545">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DeleteIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-delete">
        <path
          id="Vector"
          d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
          stroke="black"
          strokeWidth="1.56"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const DeliveryIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-delivery" clipPath="url(#clip0_120_1374)">
        <path
          id="Vector"
          d="M11.6667 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6667 25C9.82573 25 8.33334 26.4924 8.33334 28.3333C8.33334 30.1743 9.82573 31.6667 11.6667 31.6667Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M5 11.8182H11.6667"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_6"
          d="M1.81818 15.4545H8.48484"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_7"
          d="M5 19.0909H11.6667"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_120_1374">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DropdownIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="DropDown">
        <path
          id="Vector"
          d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const EyeIcon: React.FC<Icon> = ({
  width = 22,
  height = 16,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const FacebookIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon-Facebook">
        <path
          id="Vector"
          d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const FireIcon: React.FC<Icon> = ({
  width = 20,
  height = 22,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M10 21C5.03 21 1 18.418 1 14V13.912C1 11.794 2.338 10.1 4.375 9C6.324 7.948 7.476 6.01 7.188 4L6.625 1L8.711 1.795C12.468 3.225 15.597 5.707 17.625 8.861C18.5167 10.2311 18.9941 11.8293 19 13.464V14C19 15.562 18.496 16.895 17.625 17.965"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M10 21C8.343 21 7 19.567 7 17.8C7 16.4 8.016 15.279 8.91 14.252L10 13L11.09 14.252C11.984 15.28 13 16.4 13 17.8C13 19.567 11.657 21 10 21Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const GoogleIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon-Google" clipPath="url(#clip0_155_1565)">
        <path
          id="Vector"
          d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
          fill="#4285F4"
        />
        <path
          id="Vector_2"
          d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z"
          fill="#34A853"
        />
        <path
          id="Vector_3"
          d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
          fill="#FBBC04"
        />
        <path
          id="Vector_4"
          d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_155_1565">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HeadphoneIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-headphone">
        <path
          id="Vector"
          d="M10.4 33V16.75C10.4 14.1641 11.4114 11.6842 13.2118 9.85571C15.0121 8.02723 17.4539 7 20 7C22.5461 7 24.9879 8.02723 26.7882 9.85571C28.5886 11.6842 29.6 14.1641 29.6 16.75V33M4 22.5431C4 19.207 7.2 18.375 10.4 18.375V33C8.70261 33 7.07475 32.3152 5.87452 31.0962C4.67428 29.8772 4 28.2239 4 26.5V22.5431ZM36 22.5431C36 19.207 32.8 18.375 29.6 18.375V33C31.2974 33 32.9252 32.3152 34.1255 31.0962C35.3257 29.8772 36 28.2239 36 26.5V22.5431Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const HeartSmallIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="heart small">
        <path
          id="Vector"
          d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const InstagramIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const LinkedinIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon-Linkedin">
        <path
          id="Vector"
          d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const LogoutIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon-logout">
        <path
          id="Vector"
          d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const MinusIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-minus">
        <path
          id="Vector"
          d="M20 12H4"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const MoneyBagIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.8676 19.6805C21.5863 18.8849 21.0652 18.1961 20.3762 17.709C19.6872 17.2218 18.8641 16.9602 18.0202 16.9602V15.9402H15.9803V16.9602C14.8982 16.9602 13.8604 17.39 13.0953 18.1552C12.3302 18.9203 11.9003 19.9581 11.9003 21.0401C11.9003 22.1222 12.3302 23.1599 13.0953 23.9251C13.8604 24.6902 14.8982 25.1201 15.9803 25.1201V29.2C15.0929 29.2 14.3371 28.6339 14.0555 27.8404C14.0138 27.7106 13.9464 27.5904 13.8574 27.4871C13.7684 27.3838 13.6595 27.2993 13.5373 27.2388C13.4151 27.1782 13.282 27.1428 13.1459 27.1346C13.0098 27.1264 12.8734 27.1456 12.7448 27.191C12.6162 27.2365 12.498 27.3072 12.3972 27.3991C12.2965 27.491 12.2151 27.6022 12.1581 27.7261C12.101 27.85 12.0694 27.984 12.0651 28.1203C12.0607 28.2566 12.0838 28.3924 12.1329 28.5197C12.4142 29.3153 12.9353 30.004 13.6243 30.4912C14.3133 30.9784 15.1364 31.24 15.9803 31.24V32.26H18.0202V31.24C19.1023 31.24 20.14 30.8102 20.9052 30.045C21.6703 29.2799 22.1002 28.2421 22.1002 27.1601C22.1002 26.078 21.6703 25.0402 20.9052 24.2751C20.14 23.51 19.1023 23.0801 18.0202 23.0801V19.0001C18.4421 19 18.8536 19.1307 19.1982 19.3742C19.5427 19.6177 19.8032 19.9621 19.9439 20.3598C20.034 20.6149 20.2217 20.8238 20.4658 20.9404C20.5867 20.9982 20.7177 21.0316 20.8515 21.0388C20.9853 21.0459 21.1191 21.0266 21.2454 20.982C21.3717 20.9374 21.488 20.8683 21.5877 20.7788C21.6873 20.6892 21.7683 20.581 21.8261 20.4601C21.8839 20.3392 21.9173 20.2082 21.9244 20.0744C21.9315 19.9407 21.9122 19.8068 21.8676 19.6805ZM15.9803 19.0001C15.4392 19.0001 14.9203 19.2151 14.5378 19.5976C14.1552 19.9802 13.9403 20.4991 13.9403 21.0401C13.9403 21.5812 14.1552 22.1 14.5378 22.4826C14.9203 22.8652 15.4392 23.0801 15.9803 23.0801V19.0001ZM18.0202 29.2C18.5613 29.2 19.0801 28.9851 19.4627 28.6025C19.8453 28.22 20.0602 27.7011 20.0602 27.1601C20.0602 26.619 19.8453 26.1001 19.4627 25.7176C19.0801 25.335 18.5613 25.1201 18.0202 25.1201V29.2Z"
          fill="black"
        />
        <path
          id="Vector_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.9364 3.31377C8.43945 2.08876 12.5459 0.640381 17.04 0.640381C21.4402 0.640381 25.4386 2.02858 27.9284 3.23727L28.0691 3.30561C28.8198 3.67689 29.4257 4.02776 29.8521 4.31234L26.0842 9.82027C34.7704 18.7003 41.4799 37.3569 17.04 37.3569C-7.39994 37.3569 -0.871 19.0389 7.8907 9.82027L4.14734 4.31234C4.436 4.12364 4.80217 3.90434 5.23873 3.67179C5.45497 3.55551 5.68752 3.43617 5.9364 3.31479V3.31377ZM23.6628 9.74683L26.6789 5.33743C23.8739 5.53938 20.5365 6.1983 17.3235 7.12852C15.0286 7.79152 12.4786 7.69054 10.1173 7.255C9.5223 7.14469 8.93136 7.01337 8.34561 6.86129L10.304 9.74479C14.5012 11.2391 19.4645 11.2391 23.6628 9.74683ZM9.1259 11.4829C14.0371 13.38 19.9398 13.38 24.8511 11.4808C26.9011 13.6419 28.616 16.0977 29.9388 18.7666C31.3178 21.5797 32.0685 24.3918 31.9461 26.8153C31.8278 29.1541 30.9077 31.1523 28.8066 32.6374C26.6167 34.1847 22.9335 35.3169 17.039 35.3169C11.1383 35.3169 7.43782 34.2041 5.22751 32.6741C3.11103 31.2074 2.18182 29.2368 2.05025 26.9296C1.91255 24.5326 2.64694 21.7348 4.02086 18.9022C5.33155 16.2013 7.16039 13.6014 9.1259 11.4829ZM7.95292 4.63465C8.76891 4.87741 9.62162 5.08855 10.4866 5.24869C12.6795 5.6526 14.8786 5.71176 16.7554 5.16811C18.9425 4.53097 21.1669 4.02987 23.4159 3.66771C21.5392 3.10263 19.3441 2.68036 17.039 2.68036C13.5251 2.68036 10.2479 3.66057 7.95292 4.63465Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export const PlusIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-plus">
        <path
          id="Vector"
          d="M12 20V12M12 12V4M12 12H20M12 12H4"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const ReturnIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon-return" clipPath="url(#clip0_261_4864)">
        <path
          id="Vector"
          d="M33.3333 18.3334C32.9257 15.4004 31.5651 12.6828 29.4611 10.5992C27.357 8.51557 24.6263 7.18155 21.6894 6.80261C18.7526 6.42366 15.7727 7.02082 13.2087 8.5021C10.6446 9.98337 8.63874 12.2666 7.49999 15M6.66666 8.33335V15H13.3333"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M6.66666 21.6667C7.07426 24.5997 8.43488 27.3173 10.5389 29.4009C12.643 31.4845 15.3737 32.8185 18.3105 33.1974C21.2473 33.5764 24.2273 32.9792 26.7913 31.4979C29.3554 30.0167 31.3612 27.7335 32.5 25M33.3333 31.6667V25H26.6667"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_261_4864">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SearchIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Component 2">
        <path
          id="Vector"
          d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const SendIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-send">
        <path
          id="Vector"
          d="M9.91199 12H3.99999L2.02299 4.13499C2.01033 4.08928 2.00262 4.04234 1.99999 3.99499C1.97799 3.27399 2.77199 2.77399 3.45999 3.10399L22 12L3.45999 20.896C2.77999 21.223 1.99599 20.737 1.99999 20.029C2.00201 19.9657 2.01313 19.9031 2.03299 19.843L3.49999 15"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const UserIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="User=Off">
        <path
          id="Vector"
          d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const StarIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#FFAD33',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        opacity="0.25"
        d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
        fill="black"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
          fill="white"
          stroke="black"
          strokeWidth="0.2"
        />
      </g>
    </svg>
  );
};

export const WishListIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Wishlist=Off">
        <path
          id="Vector"
          d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const ShoppingBagIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#0000',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="akar-icons:shopping-bag">
        <g id="Group">
          <path
            id="Vector"
            d="M3.97738 9.84C4.0176 9.33881 4.24513 8.87115 4.61465 8.53017C4.98417 8.18918 5.46857 7.9999 5.97138 8H18.0294C18.5322 7.9999 19.0166 8.18918 19.3861 8.53017C19.7556 8.87115 19.9832 9.33881 20.0234 9.84L20.8264 19.84C20.8485 20.1152 20.8133 20.392 20.7232 20.6529C20.6331 20.9139 20.4899 21.1533 20.3027 21.3562C20.1155 21.5592 19.8883 21.7211 19.6354 21.8319C19.3825 21.9427 19.1095 21.9999 18.8334 22H5.16738C4.8913 21.9999 4.61823 21.9427 4.36536 21.8319C4.11249 21.7211 3.88529 21.5592 3.69808 21.3562C3.51086 21.1533 3.36768 20.9139 3.27755 20.6529C3.18742 20.392 3.15229 20.1152 3.17438 19.84L3.97738 9.84V9.84Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const ReviewIcon: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#F4B740',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon-Reviews">
        <path
          id="Vector"
          d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export const PhoneIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#DB4444',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={'0 0 ${width} ${height}'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="icons-phone">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          id="Vector"
          d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const MailIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#DB4444',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={'0 0 ${width} ${height}'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="icons-mail">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          id="Vector"
          d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
