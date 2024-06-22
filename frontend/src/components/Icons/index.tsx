import { Icon } from '@/types';
import React from 'react';

export * from './SecureIcon';

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

export const CustomerServiceIcon: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.3"
        d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
        fill="#2F2E30"
      />
      <circle cx="40" cy="40" r="29" fill="black" />
      <g clipPath="url(#clip0_1139_348)">
        <path
          d="M33.3334 44.9998C33.3334 43.1589 31.841 41.6665 30 41.6665C28.1591 41.6665 26.6667 43.1589 26.6667 44.9998V48.3332C26.6667 50.1741 28.1591 51.6665 30 51.6665C31.841 51.6665 33.3334 50.1741 33.3334 48.3332V44.9998Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.3334 44.9998C53.3334 43.1589 51.841 41.6665 50 41.6665C48.1591 41.6665 46.6667 43.1589 46.6667 44.9998V48.3332C46.6667 50.1741 48.1591 51.6665 50 51.6665C51.841 51.6665 53.3334 50.1741 53.3334 48.3332V44.9998Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6667 44.9998V39.9998C26.6667 36.4636 28.0714 33.0722 30.5719 30.5717C33.0724 28.0713 36.4638 26.6665 40 26.6665C43.5362 26.6665 46.9276 28.0713 49.4281 30.5717C51.9286 33.0722 53.3334 36.4636 53.3334 39.9998V44.9998"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 51.6665C50 52.9926 48.9464 54.2644 47.0711 55.202C45.1957 56.1397 42.6522 56.6665 40 56.6665"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1139_348">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(20 20)"
          />
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

export const DeliveryIcon: React.FC<Icon> = ({ className }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.3"
        d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
        fill="#2F2E30"
      />
      <circle cx="40.5" cy="40" r="29" fill="black" />
      <g clipPath="url(#clip0_1122_331)">
        <path
          d="M32.1667 51.6667C34.0076 51.6667 35.5 50.1743 35.5 48.3333C35.5 46.4924 34.0076 45 32.1667 45C30.3257 45 28.8333 46.4924 28.8333 48.3333C28.8333 50.1743 30.3257 51.6667 32.1667 51.6667Z"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.8333 48.3335H27.5C26.3954 48.3335 25.5 47.4381 25.5 46.3335V41.6668M23.8333 28.3335H40.1666C41.2712 28.3335 42.1666 29.2289 42.1666 30.3335V48.3335M35.5 48.3335H45.5M52.1667 48.3335H53.5C54.6046 48.3335 55.5 47.4381 55.5 46.3335V38.3335M55.5 38.3335H42.1666M55.5 38.3335L51.0826 30.9712C50.7211 30.3688 50.0701 30.0002 49.3676 30.0002H42.1666"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 31.8184H32.1667"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.3182 35.4546H28.9848"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 39.0908H32.1667"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1122_331">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(20.5 20)"
          />
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

export const CellPhoneIcon: React.FC<Icon> = ({
  width = 56,
  height = 56,
  className,
  color = 'none',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1097_868)">
        <path
          d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.6667 7H31.1354"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 44.0052V44.0305"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="15.1667"
          y1="39.8334"
          x2="40.8333"
          y2="39.8334"
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1097_868">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ComputerIcon: React.FC<Icon> = ({
  width = 56,
  height = 56,
  className,
  color = 'none',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1097_613)">
        <path
          d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.3333 46.6666H39.6667"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 37.3334V46.6667"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 37.3334V46.6667"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 32H48"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1097_613">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SmartWatchIcon: React.FC<Icon> = ({
  width = 56,
  height = 56,
  className,
  color = 'none',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1097_629)">
        <path
          d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 42V49H35V42"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 14V7H35V14"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="23"
          x2="24"
          y2="34"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="28"
          x2="28"
          y2="34"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="26"
          x2="32"
          y2="34"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1097_629">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CameraIcon: React.FC<Icon> = ({
  width = 56,
  height = 56,
  className,
  color = 'none',
}) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_1570)">
        <path
          d="M11.6667 16.3333H14C15.2377 16.3333 16.4247 15.8416 17.2998 14.9665C18.175 14.0913 18.6667 12.9043 18.6667 11.6666C18.6667 11.0478 18.9125 10.4543 19.3501 10.0167C19.7877 9.57915 20.3812 9.33331 21 9.33331H35C35.6188 9.33331 36.2123 9.57915 36.6499 10.0167C37.0875 10.4543 37.3333 11.0478 37.3333 11.6666C37.3333 12.9043 37.825 14.0913 38.7002 14.9665C39.5753 15.8416 40.7623 16.3333 42 16.3333H44.3333C45.571 16.3333 46.758 16.825 47.6332 17.7001C48.5083 18.5753 49 19.7623 49 21V42C49 43.2377 48.5083 44.4246 47.6332 45.2998C46.758 46.175 45.571 46.6666 44.3333 46.6666H11.6667C10.429 46.6666 9.242 46.175 8.36683 45.2998C7.49167 44.4246 7 43.2377 7 42V21C7 19.7623 7.49167 18.5753 8.36683 17.7001C9.242 16.825 10.429 16.3333 11.6667 16.3333"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 37.3333C31.866 37.3333 35 34.1993 35 30.3333C35 26.4673 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4673 21 30.3333C21 34.1993 24.134 37.3333 28 37.3333Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_138_1570">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GamepadIcon: React.FC<Icon> = ({
  width = 56,
  height = 56,
  className,
  color = 'none',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_1571)">
        <path
          d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 28H23.3333M18.6667 23.3333V32.6666"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 25.6667V25.6909"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 30.3333V30.3574"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_138_1571">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HeadphoneIcon: React.FC<Icon> = ({
  width = 56,
  height = 56,
  className,
  color = 'none',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_1572)">
        <path
          d="M16.3334 30.3333H14C11.4227 30.3333 9.33337 32.4227 9.33337 35V42C9.33337 44.5773 11.4227 46.6666 14 46.6666H16.3334C18.9107 46.6666 21 44.5773 21 42V35C21 32.4227 18.9107 30.3333 16.3334 30.3333Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33337 35V28C9.33337 23.0493 11.3 18.3013 14.8007 14.8007C18.3014 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6987 11.3 41.1994 14.8007C44.7 18.3013 46.6667 23.0493 46.6667 28V35"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_138_1572">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ServicesIcon: React.FC<Icon> = ({
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
      <g id="icons-service">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          opacity="0.3"
          d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
          fill="#2F2E30"
        />
        <circle cx="40.5" cy="40" r="29" fill="black" />
      </g>
    </svg>
  );
};

export const ShopIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#000000',
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
      <g id="icons-shop">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z"
          stroke="#FAFAFA"
          strokeWidth="2"
        />
        <path
          d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z"
          stroke="#FAFAFA"
          strokeWidth="2"
        />
        <path
          d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z"
          stroke="#FAFAFA"
          strokeWidth="2"
        />
        <path
          d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11"
          stroke="#FAFAFA"
          strokeWidth="2"
        />
        <path
          d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeMiterlimit="16"
        />
      </g>
    </svg>
  );
};

export const SaleIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#FFFFFF',
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
      <g id="icons-sale">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453"
          stroke="black"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 8.18176V12.1212M20 27.8787V31.8181"
          stroke="black"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export const GroupIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#000000',
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
      <g id="icons-group">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M15.9278 15.1456V15.6456L16.4278 15.6456C17.0916 15.6457 17.739 15.8514 18.281 16.2346C18.8229 16.6178 19.2327 17.1595 19.454 17.7851C19.4727 17.8381 19.4808 17.8941 19.4778 17.9502C19.4748 18.0062 19.4608 18.0611 19.4366 18.1117C19.4124 18.1624 19.3784 18.2077 19.3367 18.2452C19.295 18.2828 19.2463 18.3117 19.1933 18.3304C19.1404 18.3491 19.0844 18.3571 19.0283 18.3542C18.9723 18.3512 18.9174 18.3372 18.8667 18.313C18.7645 18.2641 18.6858 18.1766 18.6481 18.0697L18.648 18.0695C18.4856 17.6104 18.1849 17.213 17.7873 16.9319C17.3896 16.6509 16.9146 16.5 16.4277 16.5002L15.9278 16.5003V17.0002V20.7092V21.2092H16.4278C17.2789 21.2092 18.0952 21.5473 18.697 22.1491C19.2988 22.7509 19.6369 23.5672 19.6369 24.4183C19.6369 25.2694 19.2988 26.0856 18.697 26.6874C18.0952 27.2892 17.2789 27.6273 16.4278 27.6273H15.9278V28.1273V28.5546H15.0733V28.1273V27.6273L14.5733 27.6273C13.9096 27.6273 13.2621 27.4215 12.7202 27.0383C12.1782 26.6551 11.7684 26.1134 11.5471 25.4876L11.5472 25.4875L11.5422 25.4744C11.5216 25.4211 11.512 25.3642 11.5138 25.3071C11.5156 25.25 11.5289 25.1939 11.5528 25.142C11.5767 25.0901 11.6107 25.0435 11.6529 25.005L11.317 24.6367L11.6529 25.005C11.6952 24.9665 11.7447 24.9369 11.7985 24.9179C11.8524 24.8988 11.9095 24.8908 11.9665 24.8942C12.0236 24.8977 12.0793 24.9125 12.1305 24.9379C12.1817 24.9632 12.2273 24.9986 12.2646 25.0419C12.3019 25.0852 12.3301 25.1355 12.3476 25.1899L12.3499 25.1969L12.3523 25.2039C12.6768 26.1186 13.5484 26.7728 14.5733 26.7728H15.0733V26.2728V22.5637V22.0637H14.5733C13.7222 22.0637 12.906 21.7256 12.3042 21.1238C11.7024 20.522 11.3643 19.7058 11.3643 18.8547C11.3643 18.0036 11.7024 17.1874 12.3042 16.5856C12.906 15.9837 13.7222 15.6456 14.5733 15.6456H15.0733V15.1456V14.7184H15.9278V15.1456ZM15.0733 17.0002V16.5002H14.5733C13.9488 16.5002 13.35 16.7482 12.9084 17.1898C12.4668 17.6314 12.2188 18.2302 12.2188 18.8547C12.2188 19.4792 12.4668 20.078 12.9084 20.5196C13.35 20.9612 13.9488 21.2092 14.5733 21.2092H15.0733V20.7092V17.0002ZM15.9278 26.2728V26.7728H16.4278C17.0523 26.7728 17.6512 26.5247 18.0927 26.0832C18.5343 25.6416 18.7824 25.0427 18.7824 24.4183C18.7824 23.7938 18.5343 23.1949 18.0927 22.7534C17.6512 22.3118 17.0523 22.0637 16.4278 22.0637H15.9278V22.5637V26.2728Z"
          fill="#FAFAFA"
          stroke="#FAFAFA"
        />
        <path
          d="M8.20572 9.57769L8.5219 9.69983C12.8707 11.3798 18.1083 11.3797 22.457 9.69804L22.7695 9.5772L23.0001 9.82027C24.8981 11.8211 26.4858 14.0948 27.7105 16.5658L27.7115 16.5677C28.9873 19.1703 29.7037 21.8133 29.5867 24.1301L29.5867 24.1301C29.4723 26.3912 28.5716 28.3572 26.5218 29.806L26.5218 29.806C24.4129 31.296 20.9467 32.3336 15.5354 32.3336C10.1198 32.3336 6.63966 31.3141 4.51316 29.8421L4.51293 29.842C2.44943 28.412 1.53763 26.472 1.41014 24.2374L8.20572 9.57769ZM8.20572 9.57769L7.97519 9.82617M8.20572 9.57769L7.97519 9.82617M7.97519 9.82617C6.15729 11.7856 4.46566 14.1897 3.25095 16.6929L3.25091 16.6929M7.97519 9.82617L3.25091 16.6929M3.25091 16.6929C1.98037 19.3123 1.2784 21.9432 1.41013 24.2372L3.25091 16.6929ZM25.3428 3.18136C25.7832 3.39921 26.1642 3.60759 26.4775 3.79428L23.3457 8.3725L23.1141 8.71114L23.401 9.00444C25.3394 10.9861 27.1697 13.5163 28.4805 16.1919C29.7935 18.8721 30.5679 21.6624 30.441 24.1735C30.3151 26.6637 29.3054 28.8863 27.0163 30.5035C24.7051 32.1363 21.0382 33.1881 15.5364 33.1881C10.0332 33.1881 6.35436 32.1551 4.02802 30.5441C1.72448 28.9489 0.699103 26.7543 0.558033 24.2856C0.415712 21.7951 1.17576 19.0153 2.48354 16.3201C3.7889 13.6299 5.62285 11.0598 7.58124 8.99926L7.85891 8.70711L7.63235 8.37375L4.52247 3.79791C4.67984 3.70521 4.8536 3.60746 5.04301 3.50656L5.04302 3.50656L5.04474 3.50564C5.23531 3.40316 5.44085 3.29767 5.66136 3.19013L5.85727 3.09458C8.10344 2.02401 11.6645 0.809448 15.5364 0.809448C19.4384 0.809448 22.9975 2.04283 25.2165 3.12005C25.2165 3.12005 25.2165 3.12005 25.2165 3.12006L25.3412 3.18057C25.3417 3.18083 25.3422 3.1811 25.3428 3.18136ZM21.7245 9.05917L21.8779 9.00466L21.9698 8.87033L24.7117 4.86178L25.2968 4.00635L24.2631 4.08078C21.6696 4.26751 18.6003 4.87479 15.6554 5.7274C13.6714 6.30056 11.4387 6.21929 9.33386 5.83106C8.80462 5.73294 8.27901 5.61613 7.75803 5.48086L6.47261 5.14712L7.21875 6.24574L8.99909 8.86711L9.09097 9.00238L9.24502 9.05723C13.1692 10.4543 17.7996 10.4542 21.7245 9.05917ZM7.08002 3.48035L5.80043 4.02347L7.1328 4.41985C7.88966 4.64501 8.68211 4.84132 9.48767 4.99046L9.48813 4.99055C11.523 5.36535 13.6079 5.42979 15.4168 4.90582L15.4175 4.90561C17.3859 4.33216 19.388 3.88116 21.4122 3.5552L21.4768 2.58279C19.7353 2.05845 17.6905 1.66397 15.5354 1.66397C12.2536 1.66397 9.20629 2.57787 7.08002 3.48035Z"
          fill="#FAFAFA"
          stroke="#FAFAFA"
        />
      </g>
    </svg>
  );
};
export const ShoppingBag1Icon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#000000',
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
      <g id="icons-shoppngbag1">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M11.667 11.6667V8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3748 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339V11.6667H30.8337C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667V30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667H13.3337C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001V14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667H11.667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417V14.1667H9.16699V30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8496C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667H22.7253ZM19.167 11.6667V8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339V11.6667H19.167ZM21.667 11.6667H25.8337V8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1772 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339V11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1929C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1929C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417V14.1667H24.1837V30.8417Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const Delivery1Icon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#000000',
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
      <g id="icons-delivery1">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M12.1663 31.6667C14.0073 31.6667 15.4997 30.1743 15.4997 28.3333C15.4997 26.4924 14.0073 25 12.1663 25C10.3254 25 8.83301 26.4924 8.83301 28.3333C8.83301 30.1743 10.3254 31.6667 12.1663 31.6667Z"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.83301 28.3335H7.49967C6.3951 28.3335 5.49967 27.4381 5.49967 26.3335V21.6668M3.83301 8.3335H20.1663C21.2709 8.3335 22.1663 9.22893 22.1663 10.3335V28.3335M15.4997 28.3335H25.4997M32.1663 28.3335H33.4997C34.6042 28.3335 35.4997 27.4381 35.4997 26.3335V18.3335M35.4997 18.3335H22.1663M35.4997 18.3335L31.0823 10.9712C30.7208 10.3688 30.0698 10.0002 29.3673 10.0002H22.1663"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 11.8181H12.1667"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.31836 15.4546H8.98503"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 19.0908H12.1667"
          stroke="#FAFAFA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1176_3517">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CustomerserviceIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#000000',
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
      <g id="icons-customerservice">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M13.3337 25.0001C13.3337 23.1591 11.8413 21.6667 10.0003 21.6667C8.15938 21.6667 6.66699 23.1591 6.66699 25.0001V28.3334C6.66699 30.1744 8.15938 31.6667 10.0003 31.6667C11.8413 31.6667 13.3337 30.1744 13.3337 28.3334V25.0001Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.3337 25.0001C33.3337 23.1591 31.8413 21.6667 30.0003 21.6667C28.1594 21.6667 26.667 23.1591 26.667 25.0001V28.3334C26.667 30.1744 28.1594 31.6667 30.0003 31.6667C31.8413 31.6667 33.3337 30.1744 33.3337 28.3334V25.0001Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66699 25.0001V20.0001C6.66699 16.4639 8.07175 13.0725 10.5722 10.572C13.0727 8.07151 16.4641 6.66675 20.0003 6.66675C23.5365 6.66675 26.9279 8.07151 29.4284 10.572C31.9289 13.0725 33.3337 16.4639 33.3337 20.0001V25.0001"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 31.6667C30 32.9928 28.9464 34.2646 27.0711 35.2023C25.1957 36.14 22.6522 36.6667 20 36.6667"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1176_3534">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SecureIcon: React.FC<Icon> = ({
  width = 40,
  height = 40,
  color = '#000000',
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
      <g id="icons-secure">
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M8.09943 30.5992L8.0992 30.5991C7.22647 29.9483 6.42586 28.9206 5.84306 27.759C5.26022 26.5973 4.91699 25.3451 4.91699 24.2666V11.8666C4.91699 9.50736 6.67182 6.96177 8.89149 6.13513L8.89245 6.13477L17.2087 3.01826C17.2088 3.01823 17.2089 3.0182 17.2089 3.01817C17.9624 2.73661 18.9619 2.5874 19.9837 2.5874C21.0054 2.5874 22.0049 2.73661 22.7584 3.01817C22.7585 3.0182 22.7585 3.01823 22.7586 3.01826L31.0749 6.13477L31.0758 6.13513C33.2955 6.96177 35.0503 9.50736 35.0503 11.8666V24.2499C35.0503 25.3371 34.7069 26.5892 34.1244 27.7483C33.5419 28.9073 32.7414 29.9313 31.8681 30.5824L31.8679 30.5826L24.7012 35.9326L24.7012 35.9325L24.695 35.9373C23.4123 36.9264 21.7243 37.4332 20.0003 37.4332C18.2777 37.4332 16.5855 36.927 15.2652 35.9486C15.265 35.9484 15.2649 35.9483 15.2647 35.9482L8.09943 30.5992ZM17.7422 4.43145L17.7415 4.4317L9.42487 7.54837L9.42416 7.54863C8.59658 7.86019 7.85535 8.52248 7.32443 9.29061C6.79333 10.059 6.43366 10.9898 6.43366 11.8832V24.2666C6.43366 25.161 6.74424 26.1892 7.20124 27.101C7.65813 28.0126 8.29361 28.8722 9.00118 29.4005L9.00122 29.4006L16.1676 34.7503C17.2296 35.5445 18.6286 35.9249 20.0024 35.9249C21.3764 35.9249 22.7786 35.5445 23.8481 34.7516L23.8494 34.7506L31.0161 29.4006L31.017 29.3999C31.7317 28.8638 32.3672 28.005 32.8225 27.0943C33.2779 26.1837 33.5837 25.16 33.5837 24.2666V11.8666C33.5837 10.9804 33.2232 10.0538 32.6929 9.28645C32.1624 8.51889 31.4226 7.85396 30.5979 7.5338L30.598 7.53376L30.5925 7.5317L22.2758 4.41503L22.2758 4.41495L22.2667 4.41174C21.6286 4.18651 20.8005 4.08314 20.001 4.08532C19.2024 4.0875 18.3755 4.19514 17.7422 4.43145Z"
          fill="#FAFAFA"
          stroke="#FAFAFA"
        />
        <path
          d="M17.4135 21.0536L17.7671 21.4071L18.1206 21.0536L24.4039 14.7703C24.692 14.4822 25.1754 14.4822 25.4635 14.7703C25.7516 15.0583 25.7516 15.5417 25.4635 15.8298L18.2968 22.9965C18.1455 23.1478 17.9583 23.2167 17.7671 23.2167C17.5758 23.2167 17.3886 23.1478 17.2373 22.9965L14.5539 20.3131C14.2659 20.0251 14.2659 19.5417 14.5539 19.2536C14.842 18.9655 15.3254 18.9655 15.6135 19.2536L17.4135 21.0536Z"
          fill="#FAFAFA"
          stroke="#FAFAFA"
        />
      </g>
    </svg>
  );
};
