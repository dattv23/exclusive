export * from './SecureIcon';
export * from './ArrowDownLeftIcon';
export * from './ArrowDownRightIcon';
export * from './ArrowDownIcon';
export * from './ArrowLeftIcon';
export * from './ArrowRightIcon';
export * from './ArrowUpIcon';
export * from './BoxIcon';
export * from './CancelIcon';
export * from './CartIcon';
export * from './CustomerServiceIcon';
export * from './DeleteIcon';
export * from './DeliveryIcon';
export * from './DropdownIcon';
export * from './FacebookIcon';
export * from './FireIcon';
export * from './GoogleIcon';
export * from './HeartSmallIcon';
export * from './InstagramIcon';
export * from './LinkedinIcon';
export * from './LogoutIcon';
export * from './MinusIcon';
export * from './MoneyBagIcon';
export * from './PlusIcon';
export * from './ReturnIcon';
export * from './SearchIcon';
export * from './SendIcon';
export * from './UserIcon';
export * from './StarIcon';
export * from './TwitterIcon';
export * from './WishListIcon';
export * from './ShoppingBagIcon';
export * from './ReviewIcon';
export * from './PhoneIcon';
export * from './MailIcon';
export * from './CellPhoneIcon';
export * from './ComputerIcon';
export * from './SmartWatchIcon';
export * from './CameraIcon';
export * from './GamepadIcon';
export * from './HeadphoneIcon';
export * from './EyeIcon';

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
