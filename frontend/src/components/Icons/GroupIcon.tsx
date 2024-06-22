import { Icon } from '@/types';

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
