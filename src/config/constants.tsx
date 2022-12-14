import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export const menus = [
  {
    text: "About Us",
    url: "/#about-us",
  },
  {
    text: "How it Works",
    url: "/#how-it-works",
  },
  {
    text: "For Experts",
    url: "/#for-experts",
  },
  {
    text: "For Businesses",
    url: "/#for-businesses",
  },
];

export const quickLinks = [
  {
    text: "About Us",
    url: "/about-us",
  },
  {
    text: "For Experts",
    url: "/health-care",
  },
  {
    text: "For Businesses",
    url: "/for-business",
  },
  {
    text: "Our Team",
    url: "/about-us#our-team",
  },
  {
    text: "Our Journey",
    url: "/about-us#our-journey",
  },
];

export const socials = [
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/mymusawo",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/mymusawo",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/mymusawo",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UCOB9MqQxbt0EFk0WZWAHY5A",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/my-musawo",
  },
  {
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@mymusawo?lang=en",
  },
];

export const facilities = [
  {
    icon: (
      <svg
        className="w-full"
        viewBox="0 0 117 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.368 29.928L29.5 43.268L26.368 56.55L38.026 63.742L45.16 75.4L58.5 72.268L71.84 75.4L78.974 63.742L90.632 56.55L87.5 43.268L90.632 29.928L79.032 22.736L71.84 11.078L58.5 14.268L45.218 11.136L37.968 22.736L26.368 29.928ZM58.558 66.7C52.405 66.7 46.504 64.2557 42.1531 59.9049C37.8023 55.554 35.358 49.653 35.358 43.5C35.358 37.347 37.8023 31.446 42.1531 27.0951C46.504 22.7443 52.405 20.3 58.558 20.3C71.318 20.3 81.7 30.682 81.7 43.442C81.7 56.318 71.318 66.7 58.558 66.7ZM58.442 60.9C48.814 60.9 41.1 53.128 41.1 43.5C41.1 33.93 48.814 26.1 58.442 26.1C68.07 26.1 75.9 33.93 75.9 43.5C75.9 53.128 68.07 60.9 58.442 60.9ZM80.714 67.28L73.29 80.272L61.226 77.546L75.9 111.36L84.02 98.6H98.52L80.714 67.28ZM36.054 67.686L43.304 80.736L55.658 77.778L41.1 111.36L32.98 98.6H18.48L36.054 67.686Z"
          fill="url(#paint0_linear_9_81)"
        />
        <circle cx="58.5" cy="43.5" r="17.5" fill="white" />
        <path
          d="M50.25 43.5L57.75 49.75L67.75 37.25M59 61C56.7019 61 54.4262 60.5473 52.303 59.6679C50.1798 58.7884 48.2507 57.4994 46.6256 55.8744C45.0006 54.2493 43.7116 52.3202 42.8321 50.197C41.9527 48.0738 41.5 45.7981 41.5 43.5C41.5 41.2019 41.9527 38.9262 42.8321 36.803C43.7116 34.6798 45.0006 32.7507 46.6256 31.1256C48.2507 29.5006 50.1798 28.2116 52.303 27.3321C54.4262 26.4527 56.7019 26 59 26C63.6413 26 68.0925 27.8437 71.3744 31.1256C74.6563 34.4075 76.5 38.8587 76.5 43.5C76.5 48.1413 74.6563 52.5925 71.3744 55.8744C68.0925 59.1563 63.6413 61 59 61Z"
          stroke="url(#paint1_linear_9_81)"
          strokeWidth={3}
        />
        <defs>
          <linearGradient
            id="paint0_linear_9_81"
            x1="18.48"
            y1="11.078"
            x2="116.266"
            y2="89.1259"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9_81"
            x1="41.5"
            y1={26}
            x2="76.5"
            y2={61}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Friendly Council Certified Health and Wellness Experts",
  },
  {
    icon: (
      <svg
        className="w-full"
        viewBox="0 0 117 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90.9828 49.9777C90.9828 49.9777 50.9692 49.9777 37.6314 49.9777C36.0895 49.9777 36.1558 48.6839 36.1558 48.6839V38.7038C36.1558 26.3498 46.2066 16.2989 58.5603 16.2989C66.2343 16.2989 73.0149 20.1799 77.054 26.0795C77.4159 26.6085 78.1324 27.7135 79.4345 27.7135H85.4651C87.0413 27.7135 86.6591 26.3117 86.3376 25.6305C81.4188 15.2206 70.8178 8 58.5606 8C41.6305 8 27.8568 21.7736 27.8568 38.7038V48.7524C27.8568 48.7524 28.0372 49.9777 26.5981 49.9777C26.483 49.9777 26.1379 49.9777 26.1379 49.9777C24.9622 49.9777 24 50.9399 24 52.1158V106.142C24 107.318 24.9622 108.28 26.1379 108.28H90.9828C92.1588 108.28 93.1209 107.318 93.1209 106.142C93.1209 106.142 93.1209 102.412 93.1209 101.169C93.1209 99.9155 91.9513 99.9797 91.9513 99.9797H82.6989C80.586 99.9797 78.8731 98.2667 78.8731 96.1538C78.8731 94.0409 80.586 92.3279 82.6989 92.3279H91.6344C91.6344 92.3279 93.1209 92.3806 93.1209 91.1383C93.1209 89.8971 93.1209 87.7121 93.1209 86.1737C93.1209 84.9451 91.872 84.984 91.872 84.984H82.6989C80.586 84.984 78.8731 83.2711 78.8731 81.1582C78.8731 79.0452 80.586 77.3323 82.6989 77.3323H91.9318C91.9318 77.3323 93.1209 77.301 93.1209 76.1426C93.1209 74.9014 93.1209 72.7164 93.1209 71.1778C93.1209 69.9546 92.0702 69.9881 92.0702 69.9881H82.6992C80.5863 69.9881 78.8733 68.2751 78.8733 66.1622C78.8733 64.0493 80.5863 62.3363 82.6992 62.3363H91.9515C91.9515 62.3363 93.1212 62.4293 93.1212 61.1467C93.1212 58.889 93.1212 52.1156 93.1212 52.1156C93.1209 50.9399 92.1588 49.9777 90.9828 49.9777ZM63.9898 84.5531C63.9898 85.9031 63.9956 88.7649 63.9956 88.7649C63.9956 91.7665 61.5625 94.1999 58.5609 94.1999C55.5593 94.1999 53.1262 91.7665 53.1262 88.7649C53.1262 88.7649 53.132 85.9031 53.132 84.5531C53.132 81.6699 47.5937 81.8443 47.5937 75.0253C47.5937 68.9681 52.504 64.0578 58.5611 64.0578C64.6183 64.0578 69.5286 68.9681 69.5286 75.0253C69.5281 81.8443 63.9898 81.6699 63.9898 84.5531Z"
          fill="url(#paint0_linear_9_89)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9_89"
            x1={24}
            y1={8}
            x2="117.717"
            y2="72.5972"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "24/7 Quality Access on your Mobile Phone",
  },
  {
    icon: (
      <svg
        className="w-full"
        viewBox="0 0 117 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.7706 98.7935H34.9262C35.0107 98.7855 35.0957 98.7855 35.1802 98.7935H54.3826C54.5504 98.7935 54.7166 98.8265 54.8716 98.8908C55.0267 98.955 55.1676 99.0491 55.2862 99.1678C55.4049 99.2865 55.4991 99.4273 55.5633 99.5824C55.6275 99.7374 55.6606 99.9036 55.6606 100.071V106.994C55.6616 107.162 55.6294 107.329 55.5656 107.485C55.5019 107.641 55.4079 107.783 55.2892 107.903C55.1704 108.022 55.0291 108.117 54.8735 108.182C54.718 108.247 54.5511 108.28 54.3826 108.28H34.2299C34.0614 108.28 33.8945 108.247 33.739 108.182C33.5834 108.117 33.4421 108.022 33.3233 107.903C33.2046 107.783 33.1106 107.641 33.0469 107.485C32.9831 107.329 32.9509 107.162 32.9519 106.994V100.071C32.9476 99.9009 32.9774 99.7312 33.0396 99.5723C33.1019 99.4135 33.1954 99.2687 33.3145 99.1465C33.4336 99.0244 33.5759 98.9273 33.7332 98.861C33.8904 98.7948 34.0593 98.7606 34.2299 98.7607H34.5003C34.6009 98.7482 34.7027 98.7482 34.8034 98.7607L34.7706 98.7935ZM54.3334 95.7542H35.4915C35.308 95.7547 35.1265 95.7154 34.9596 95.639C34.7928 95.5627 34.6444 95.451 34.5248 95.3118C33.7957 94.5909 33.0339 93.8536 32.2392 93.0917L29.7816 90.7406C28.0121 89.1022 26.2098 87.3654 24.342 85.4976C22.4742 83.6298 20.5982 81.7129 18.6648 79.46C16.9535 77.6185 15.486 75.5645 14.2984 73.3487C13.4295 71.4195 12.7571 69.4078 12.2914 67.3438L11.8981 65.8693L11.4066 64.1243C10.6611 61.4701 9.93202 58.7749 9.14557 56.1288C8.63228 54.6974 8.27789 53.2139 8.08879 51.705C7.90567 50.5051 8.00668 49.2789 8.3837 48.1251C8.48493 47.8357 8.62257 47.5605 8.79331 47.3059C8.97451 47.0452 9.20224 46.8203 9.46507 46.6423C9.69061 46.4978 9.94037 46.3951 10.2024 46.3392C10.4519 46.2982 10.7065 46.2982 10.956 46.3392C11.4697 46.3942 11.9648 46.5621 12.406 46.8307C12.8585 47.1006 13.2673 47.4375 13.6185 47.8302C13.7226 47.9351 13.8035 48.0607 13.8561 48.1988L20.5736 64.1735V64.239C20.6164 64.2903 20.6548 64.3451 20.6883 64.4029C20.8741 64.7293 21.0879 65.0391 21.3273 65.3286C21.5648 65.6191 21.8221 65.8928 22.0974 66.1478L35.4342 78.8456L35.5243 78.9521C35.6076 79.0276 35.715 79.0712 35.8274 79.075C35.935 79.0849 36.0425 79.0558 36.1305 78.9931L36.2124 78.9193C36.2786 78.8374 36.3185 78.7375 36.3271 78.6326C36.3344 78.5278 36.3054 78.4237 36.2452 78.3377L36.1305 78.2066C32.3457 73.7911 27.9875 68.1385 24.0225 64.0998C23.6264 63.7323 23.2745 63.3199 22.9739 62.8709C22.678 62.4235 22.4566 61.9311 22.3185 61.4127C22.1029 60.688 22.1376 59.9117 22.4168 59.209C22.6171 58.7395 22.9327 58.3281 23.3344 58.013C23.7078 57.7279 24.1337 57.5192 24.5878 57.3986C25.4979 57.1681 26.4583 57.24 27.3239 57.6034C27.9775 57.8844 28.5895 58.2537 29.1426 58.7011C29.7388 59.1948 30.2874 59.7433 30.781 60.3396C32.2065 61.806 33.7793 63.256 35.2457 64.6896C36.2124 65.6071 37.3102 66.7704 38.5226 68.0156C41.267 70.9238 44.4701 74.3072 47.026 75.708C47.2834 75.843 47.5324 75.9935 47.7715 76.1586C48.0255 76.3224 48.2549 76.4863 48.476 76.6583C48.6972 76.8303 48.9184 77.0024 49.1724 77.2072C49.1724 77.2072 49.795 77.7397 49.8196 77.7397C50.7679 78.5215 51.6377 79.394 52.4165 80.3448C53.051 81.1326 53.5645 82.0106 53.9402 82.9499V83.0154C54.2994 83.9576 54.5575 84.9352 54.7103 85.9318C54.8987 86.9886 55.038 88.1847 55.1936 89.5527C55.2509 90.0197 55.3083 90.5768 55.3656 91.1912C55.423 91.8056 55.4721 92.3626 55.4967 92.8296L55.5868 94.4025C55.5945 94.5699 55.569 94.7373 55.5117 94.8948C55.4544 95.0523 55.3664 95.1969 55.253 95.3203C55.1395 95.4437 55.0027 95.5434 54.8505 95.6136C54.6983 95.6839 54.5337 95.7233 54.3662 95.7296L54.3334 95.7542Z"
          fill="url(#paint0_linear_9_97)"
        />
        <path
          d="M81.8672 98.7935H81.9245C82.0225 98.7814 82.1215 98.7814 82.2195 98.7935H82.498C82.8369 98.7935 83.162 98.9281 83.4016 99.1678C83.6413 99.4074 83.776 99.7325 83.776 100.071V106.994C83.777 107.162 83.7448 107.329 83.681 107.485C83.6173 107.641 83.5233 107.783 83.4046 107.903C83.2858 108.022 83.1445 108.117 82.9889 108.182C82.8334 108.247 82.6665 108.28 82.498 108.28H62.3125C62.144 108.28 61.9772 108.247 61.8216 108.182C61.666 108.117 61.5248 108.022 61.406 107.903C61.2872 107.783 61.1932 107.641 61.1295 107.485C61.0658 107.329 61.0335 107.162 61.0346 106.994V100.071C61.0346 99.7325 61.1692 99.4074 61.4089 99.1678C61.6485 98.9281 61.9736 98.7935 62.3125 98.7935H81.5149C81.5994 98.7855 81.6844 98.7855 81.7689 98.7935H81.8672ZM81.1872 95.7624H62.2962C61.9586 95.7454 61.6414 95.5953 61.4142 95.3451C61.187 95.0948 61.0681 94.7647 61.0837 94.427L61.1738 92.8623C61.1738 92.3872 61.2476 91.8383 61.3049 91.2239C61.3623 90.6095 61.4196 90.0361 61.4769 89.5855C61.6326 88.2174 61.7719 87.0213 61.9603 85.9646C62.1264 84.9416 62.4011 83.9392 62.7795 82.9744C63.1552 82.0352 63.6687 81.1572 64.3032 80.3693C65.082 79.4185 65.9518 78.546 66.9001 77.7642L67.5473 77.2317C67.7603 77.0515 67.9897 76.8713 68.2437 76.6829C68.4976 76.4944 68.6942 76.347 68.9482 76.1831C69.1873 76.018 69.4363 75.8675 69.6937 75.7326C72.2496 74.3317 75.4282 70.9484 78.1971 68.0401C79.3686 66.7949 80.4663 65.6317 81.474 64.7141C82.9404 63.2805 84.5133 61.8305 85.9387 60.3641C86.4285 59.7644 86.9774 59.2155 87.5771 58.7257C88.1302 58.2783 88.7422 57.9089 89.3958 57.6279C90.2614 57.2645 91.2218 57.1926 92.1319 57.4231C92.586 57.5437 93.0119 57.7525 93.3853 58.0375C93.787 58.3526 94.1026 58.764 94.3029 59.2336C94.5822 59.9363 94.6168 60.7125 94.4012 61.4373C94.2614 61.955 94.0402 62.4473 93.7458 62.8955C93.4472 63.3631 93.0923 63.7923 92.689 64.1735C88.6421 68.5726 84.6197 74.2416 80.5073 78.3541C80.4266 78.4499 80.3856 78.573 80.3926 78.6981C80.3991 78.8236 80.4551 78.9415 80.5483 79.0258C80.6386 79.1026 80.7533 79.1447 80.8718 79.1447C80.9904 79.1447 81.1051 79.1026 81.1954 79.0258L81.2855 78.9193L94.5978 66.1478C94.8731 65.8928 95.1304 65.6191 95.3678 65.3286C95.5923 65.041 95.795 64.737 95.9741 64.4192C96.0075 64.3614 96.0459 64.3066 96.0887 64.2554V64.1898L102.798 48.2152C102.857 48.0782 102.94 47.9533 103.044 47.8465C103.395 47.4539 103.804 47.1169 104.256 46.8471C104.697 46.5774 105.192 46.4095 105.706 46.3556C105.956 46.3146 106.21 46.3146 106.46 46.3556C106.722 46.4114 106.972 46.5141 107.197 46.6587C107.46 46.8366 107.688 47.0616 107.869 47.3222C108.04 47.5768 108.177 47.8521 108.279 48.1414C108.653 49.2901 108.754 50.5104 108.574 51.705C108.382 53.2283 108.022 54.7256 107.5 56.1697L105.239 64.1243L104.756 65.8692L104.363 67.3438C103.897 69.4077 103.225 71.4195 102.356 73.3487C101.168 75.5662 99.6972 77.6204 97.9811 79.46C96.0642 81.6719 94.1718 83.6544 92.3204 85.5058C90.4689 87.3572 88.6831 89.0858 86.9135 90.7242L84.4559 93.0098L84.3986 93.0753C83.5793 93.8372 82.8421 94.5745 82.113 95.2954C81.9934 95.4346 81.845 95.5463 81.6781 95.6226C81.5113 95.699 81.3298 95.7383 81.1463 95.7378L81.1872 95.7624Z"
          fill="url(#paint1_linear_9_97)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M86.1927 16.995C87.6017 45.561 77.0503 62.4368 58.3394 69.4738C40.3167 62.8792 29.6178 46.7406 30.4042 16.5608C39.8989 17.0605 49.2461 15.0125 58.2575 8C66.2612 13.0627 76.4686 17.8715 86.1927 16.995ZM83.1124 19.4035C84.3658 44.7991 74.9858 59.8153 58.3558 66.0987C42.2992 60.2331 32.8045 45.8805 33.509 19.043C42.4257 19.7068 51.265 16.9865 58.2657 11.4243C65.3601 15.8972 74.4697 20.1735 83.1124 19.3871V19.4035Z"
          fill="url(#paint2_linear_9_97)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.1125 19.3871C84.3659 44.7827 74.9859 59.7989 58.3558 66.0823C42.2992 60.2167 32.8045 45.8641 33.5091 19.0267C42.4257 19.6904 51.2651 16.9702 58.2657 11.408C65.3601 15.8973 74.4698 20.1736 83.1125 19.3871Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.3446 23.1145C79.3604 43.5948 71.7909 55.7356 58.3557 60.7983C45.3876 56.0551 37.7279 44.4632 38.326 22.795C45.5248 23.3364 52.6629 21.1423 58.3148 16.6509C64.0493 20.2964 71.4222 23.7453 78.3773 23.1145H78.3446Z"
          fill="url(#paint3_linear_9_97)"
        />
        <path
          d="M46.8048 36.5824L50.9009 36.5333H50.9664L51.2777 36.607H51.3515C51.7693 36.8446 52.1707 37.1067 52.5721 37.377C52.9735 37.6474 53.3421 37.9505 53.7026 38.2536C54.0631 38.5567 54.2187 38.7042 54.5218 38.9581L55.0297 39.466C55.6933 38.4093 56.3896 37.377 57.0941 36.3858C57.7987 35.3945 58.7326 34.2313 59.5518 33.2318C60.371 32.2324 61.3868 31.0937 62.3535 30.0942C63.3202 29.0948 64.295 28.1527 65.3027 27.2516L65.3846 27.1942L65.7778 27.0468C65.8101 27.0388 65.8438 27.0388 65.8761 27.0468H70.3163C70.388 27.0468 70.4567 27.0752 70.5074 27.1259C70.5581 27.1766 70.5866 27.2454 70.5866 27.3171C70.5852 27.3882 70.5557 27.4559 70.5047 27.5055L69.6199 28.4886C68.2436 30.0123 66.9411 31.5606 65.6959 33.1253C64.4507 34.69 63.2383 36.3203 62.1241 37.9505C61.01 39.5807 59.9368 41.2274 58.9292 42.8658C57.9216 44.5042 56.9631 46.2655 56.0619 48.0023L55.5049 49.0836C55.4718 49.144 55.4169 49.1895 55.3515 49.2108C55.286 49.2321 55.2149 49.2276 55.1526 49.1983C55.1002 49.1706 55.0574 49.1278 55.0297 49.0754L54.5218 47.9695C54.0636 46.9741 53.5437 46.0083 52.9653 45.0777C52.4075 44.1706 51.7918 43.3004 51.1221 42.4726C50.4537 41.6421 49.7254 40.8617 48.943 40.1378C48.1474 39.3992 47.2986 38.7201 46.4034 38.1061C46.3593 38.0744 46.3262 38.0298 46.3086 37.9784C46.291 37.9271 46.2898 37.8715 46.3051 37.8194L46.6328 36.7299C46.6478 36.6729 46.6822 36.623 46.7301 36.5886C46.7779 36.5543 46.8362 36.5376 46.8949 36.5414L46.8048 36.5824Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9_97"
            x1={8}
            y1="46.3085"
            x2="67.8949"
            y2="92.372"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9_97"
            x1="61.0345"
            y1="46.3248"
            x2="120.907"
            y2="92.3496"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_9_97"
            x1="30.3636"
            y1={8}
            x2="91.5665"
            y2="63.7076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_9_97"
            x1="38.2933"
            y1="16.6509"
            x2="82.2418"
            y2="56.6119"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Safe Community to share without fear or pressure",
  },
];

export const howItWorks = [
  {
    title: "Browse",
    description:
      "Browse previously asked health and wellness questions, health experts, and directory.",
  },
  {
    title: "Ask",
    description:
      "Ask quick response questions and have a licensed health expert respond immediately",
  },
  {
    title: "Engage",
    description: "Like, Share, Comment on responses, book appointments, etc",
  },
];

export const healthExpertSteps = [
  {
    icon: (
      <svg
        width={70}
        height={70}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={70} height={70} rx={20} fill="#0EB6D3" fillOpacity="0.1" />
        <g clipPath="url(#clip0_56_403)">
          <path
            d="M44.6667 47C44.6667 46.6389 44.5347 46.3264 44.2708 46.0625C44.0069 45.7986 43.6944 45.6667 43.3333 45.6667C42.9722 45.6667 42.6597 45.7986 42.3958 46.0625C42.1319 46.3264 42 46.6389 42 47C42 47.3611 42.1319 47.6736 42.3958 47.9375C42.6597 48.2014 42.9722 48.3333 43.3333 48.3333C43.6944 48.3333 44.0069 48.2014 44.2708 47.9375C44.5347 47.6736 44.6667 47.3611 44.6667 47ZM50 47C50 46.6389 49.8681 46.3264 49.6042 46.0625C49.3403 45.7986 49.0278 45.6667 48.6667 45.6667C48.3056 45.6667 47.9931 45.7986 47.7292 46.0625C47.4653 46.3264 47.3333 46.6389 47.3333 47C47.3333 47.3611 47.4653 47.6736 47.7292 47.9375C47.9931 48.2014 48.3056 48.3333 48.6667 48.3333C49.0278 48.3333 49.3403 48.2014 49.6042 47.9375C49.8681 47.6736 50 47.3611 50 47ZM52.6667 42.3333V49C52.6667 49.5556 52.4722 50.0278 52.0833 50.4167C51.6944 50.8056 51.2222 51 50.6667 51H20C19.4444 51 18.9722 50.8056 18.5833 50.4167C18.1944 50.0278 18 49.5556 18 49V42.3333C18 41.7778 18.1944 41.3056 18.5833 40.9167C18.9722 40.5278 19.4444 40.3333 20 40.3333H29.6875L32.5 43.1667C33.3056 43.9444 34.25 44.3333 35.3333 44.3333C36.4167 44.3333 37.3611 43.9444 38.1667 43.1667L41 40.3333H50.6667C51.2222 40.3333 51.6944 40.5278 52.0833 40.9167C52.4722 41.3056 52.6667 41.7778 52.6667 42.3333ZM45.8958 30.4792C46.1319 31.0486 46.0347 31.5347 45.6042 31.9375L36.2708 41.2708C36.0208 41.5347 35.7083 41.6667 35.3333 41.6667C34.9583 41.6667 34.6458 41.5347 34.3958 41.2708L25.0625 31.9375C24.6319 31.5347 24.5347 31.0486 24.7708 30.4792C25.0069 29.9375 25.4167 29.6667 26 29.6667H31.3333V20.3333C31.3333 19.9722 31.4653 19.6597 31.7292 19.3958C31.9931 19.1319 32.3056 19 32.6667 19H38C38.3611 19 38.6736 19.1319 38.9375 19.3958C39.2014 19.6597 39.3333 19.9722 39.3333 20.3333V29.6667H44.6667C45.25 29.6667 45.6597 29.9375 45.8958 30.4792Z"
            fill="url(#paint0_linear_56_403)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_56_403"
            x1={18}
            y1={19}
            x2="49.8978"
            y2="53.5559"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00CECB" />
            <stop offset={1} stopColor="#0EB6D3" />
          </linearGradient>
          <clipPath id="clip0_56_403">
            <rect
              width="34.6667"
              height={32}
              fill="white"
              transform="translate(18 19)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Download the  My Musawo, Sign Up and  create your profile",
  },
  {
    icon: (
      <svg
        width={70}
        height={71}
        viewBox="0 0 70 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.5"
          width={70}
          height={70}
          rx={20}
          fill="#0EB6D3"
          fillOpacity="0.1"
        />
        <g clipPath="url(#clip0_56_413)">
          <path
            d="M46.7999 26.4H45.1999V39.2C45.1999 40.08 44.4799 40.8 43.5999 40.8H24.3999V42.4C24.3999 44.16 25.8399 45.6 27.5999 45.6H43.5999L49.9999 52V29.6C49.9999 27.84 48.5599 26.4 46.7999 26.4ZM41.9999 34.4V23.2C41.9999 21.44 40.5599 20 38.7999 20H21.1999C19.4399 20 17.9999 21.44 17.9999 23.2V44L24.3999 37.6H38.7999C40.5599 37.6 41.9999 36.16 41.9999 34.4Z"
            fill="url(#paint0_linear_56_413)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_56_413"
            x1="17.9999"
            y1={20}
            x2="49.9999"
            y2={52}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <clipPath id="clip0_56_413">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(18 19.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Answer health  and wellness Questions in the Ask a Musawo forum",
  },
  {
    icon: (
      <svg
        width={70}
        height={70}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={70} height={70} rx={20} fill="#0EB6D3" fillOpacity="0.1" />
        <g clipPath="url(#clip0_56_423)">
          <path
            d="M27.6384 20.091C25.498 20.4998 23.8014 22.0312 23.1401 24.1455C22.8793 24.9896 22.8616 26.5122 23.1052 27.3214C23.6619 29.1744 25.0889 30.6712 26.8988 31.2887C27.4993 31.4889 28.9697 31.6107 29.5353 31.5062L29.8311 31.4539L29.8833 30.7754C30.0747 28.313 31.7106 25.7638 33.7031 24.8156C34.2948 24.537 34.2948 24.537 34.2425 24.2327C34.2164 24.0675 34.0339 23.5976 33.8422 23.1885C33.3638 22.1965 32.3023 21.1176 31.3364 20.6477C30.1442 20.0649 28.813 19.8647 27.6384 20.091Z"
            fill="url(#paint0_linear_56_423)"
          />
          <path
            d="M37.2092 24.5366C34.4337 25.1632 32.3021 27.1991 31.5886 29.9309C31.3277 30.9141 31.3277 32.5235 31.5886 33.4982C32.2933 36.1608 34.3119 38.1706 36.9483 38.8491C38.3403 39.2057 40.3155 39.0493 41.6206 38.4749C43.6219 37.5874 45.1791 35.8039 45.7881 33.6981C46.049 32.7844 46.1101 31.2707 45.9187 30.3136C45.2141 26.8419 42.2123 24.3884 38.6972 24.4145C38.1666 24.4148 37.4965 24.4759 37.2092 24.5366Z"
            fill="url(#paint1_linear_56_423)"
          />
          <path
            d="M23.3058 31.1407C22.1398 31.9061 21.122 32.9676 20.3909 34.1859C19.9298 34.9513 19.4253 36.1869 19.1991 37.144C18.8771 38.4491 18.7726 38.3273 20.2606 38.3273H21.5485L23.3058 36.5696L25.072 34.8034L26.4556 36.1869L27.8391 37.5704L28.5698 36.8396C29.1876 36.2134 30.3883 35.2909 30.7276 35.1779C30.8059 35.1518 30.7625 34.8214 30.5535 33.9423L30.2665 32.7502L29.6921 32.8197C27.5951 33.0806 25.8551 32.5412 24.324 31.1665L23.8802 30.7662L23.3058 31.1407Z"
            fill="url(#paint2_linear_56_423)"
          />
          <path
            d="M22.1225 39.6587L19.6516 42.0254L21.0263 42.0688L22.4098 42.1122L22.6446 43.0344C23.4449 46.1841 25.5419 48.3069 28.9003 49.3596C29.3528 49.4987 29.8661 49.6381 30.0314 49.6727L30.336 49.725L30.0751 49.5336C29.4834 49.0987 28.5959 48.1589 28.161 47.5065C27.3257 46.2536 26.8647 44.766 26.7514 42.9821L26.6991 42.0685L28.1522 42.0512L29.6052 42.0251L27.1256 39.6499C25.7597 38.3535 24.6371 37.2832 24.6198 37.2832C24.6021 37.2832 23.4799 38.3535 22.1225 39.6587Z"
            fill="url(#paint3_linear_56_423)"
          />
          <path
            d="M31.8148 38.5709C31.3799 38.8495 30.7794 39.2844 30.4751 39.5368L29.9268 40.0067L31.4145 41.4944C32.2325 42.3123 32.9022 43.017 32.9022 43.0519C32.9022 43.0869 31.8495 43.113 30.5704 43.113H28.2299L28.3082 43.6524C28.4039 44.4354 28.7781 45.5838 29.1347 46.2451C29.761 47.4023 30.3788 48.0286 32.0666 49.238L32.7539 49.7252H41.8723H50.9998V49.0029C50.991 44.4351 49.1987 40.9461 45.6751 38.6144L44.831 38.0576L44.1348 38.6581C43.021 39.624 41.8726 40.2242 40.5068 40.5638C39.5758 40.79 37.679 40.7639 36.7308 40.5115C35.3734 40.1461 33.9464 39.3458 33.0766 38.4583C32.8679 38.2408 32.6677 38.0668 32.6416 38.0668C32.6155 38.0668 32.2413 38.2924 31.8148 38.5709Z"
            fill="url(#paint4_linear_56_423)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_56_423"
            x1="22.933"
            y1="31.5444"
            x2="34.4753"
            y2="20.2157"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_56_423"
            x1="31.3929"
            y1="39.0392"
            x2="46.0178"
            y2="24.4016"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_56_423"
            x1="18.9999"
            y1="38.3303"
            x2="25.8819"
            y2="27.627"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_56_423"
            x1="19.6516"
            y1="49.725"
            x2="31.9505"
            y2="39.1633"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_56_423"
            x1="28.2299"
            y1="49.7252"
            x2="37.7004"
            y2="31.2429"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <clipPath id="clip0_56_423">
            <rect
              width={32}
              height={32}
              fill="white"
              transform="translate(19 19)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Activate your referral link and earn UGX 10K for every qualifying  referral",
  },
];

export const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    text: "+256 706193685",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "14A Naguru Drive Close",
  },
  {
    icon: <FaEnvelope />,
    text: "business@mymusawo.com",
  },
];

export const categories = [
  {
    imgSrc: "/img/1.png",
    title: "Children care",
  },
  {
    imgSrc: "/img/2.png",
    title: "Adolescent care",
  },
  {
    imgSrc: "/img/3.png",
    title: "Elderly care",
  },
  {
    imgSrc: "/img/4.png",
    title: "Primary care",
  },
  {
    imgSrc: "/img/5.png",
    title: "Urgent care",
  },
  {
    imgSrc: "/img/6.png",
    title: "Mental health",
  },
  {
    imgSrc: "/img/7.png",
    title: "Alternative care",
  },
  {
    imgSrc: "/img/8.png",
    title: "Chronic care",
  },
  {
    imgSrc: "/img/9.png",
    title: "Preventative",
  },
  {
    imgSrc: "/img/10.png",
    title: "Women's care",
  },
  {
    imgSrc: "/img/11.png",
    title: "Men's care",
  },
  {
    imgSrc: "/img/12.png",
    title: "Wellness",
  },
];

export const forHealthExperts = [
  {
    title: "For Health and Wellness Experts",
    description:
      "Answer users' health questions, earn badges, earn referral allowances, network with colleagues, and build your personal brand.",
    link: "/health-care",
  },
  {
    title: "For Health & Wellness Businesses",
    description:
      "Get direct bookings, improve brand awareness, and increase revenue for your business.",
    link: "/for-business",
  },
];

export const steadilyStats = [
  {
    value: "50",
    label: "Health Experts",
  },
  {
    value: "100",
    label: "Beta Testers",
  },
  {
    value: "$15,000",
    label: "Funding",
  },
];

export const pressHighlights = [
  {
    imgSrc: "/img/wechat.png",
    description:
      "China's digital economy experience helps African entrepreneurial youth",
    link: "https://mp.weixin.qq.com/s/EIyo__TLuQQUGzFb6-Rl7w",
  },
  {
    imgSrc: "/img/xinhuanet.png",
    description: "African Youth Behind Digital Innovation in Africa",
    link: "https://english.news.cn/africa/20220923/af5b7ebc57c14f4ab537b377e6584ef1/c.html",
  },
  {
    imgSrc: "/img/chinadaily.png",
    description: "China experience boosted African Youth Innovation",
    link: "https://global.chinadaily.com.cn/a/202209/28/WS633392baa310fd2b29e7a1c3.html",
  },
  {
    imgSrc: "/img/thecapitaltimes.png",
    description: "45 Ugandan Innovators to share Ugx 7.39 Billion NIISP Grant",
    link: "https://thecapitaltimes.co.ug/2021/02/06/45-ugandan-innovators-to-share-ugx7-39-billion-niisp-grant",
  },
];

export const pricePlans = [
  {
    icon: (
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_56_709)">
          <path
            d="M49.2187 0.30692C49.8325 0.753348 50.0836 1.34859 49.972 2.09263L42.8292 44.9498C42.7362 45.4892 42.4385 45.9077 41.9363 46.2054C41.6759 46.3542 41.3876 46.4286 41.0714 46.4286C40.8667 46.4286 40.6435 46.3821 40.4017 46.2891L27.7622 41.1272L21.01 49.3583C20.6751 49.7861 20.2194 50 19.6428 50C19.401 50 19.1964 49.9628 19.0289 49.8884C18.6755 49.7582 18.3919 49.5396 18.1779 49.2327C17.964 48.9258 17.8571 48.5863 17.8571 48.2143V38.4766L41.9642 8.92857L12.1372 34.7377L1.116 30.2176C0.427754 29.9572 0.0557299 29.4457 -7.36297e-05 28.683C-0.037276 27.939 0.260343 27.3903 0.892783 27.0368L47.3214 0.251116C47.6004 0.0837054 47.898 0 48.2142 0C48.5862 0 48.9211 0.102307 49.2187 0.30692Z"
            fill="url(#paint0_linear_56_709)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_56_709"
            x1="-0.00317383"
            y1={0}
            x2="49.9968"
            y2="50.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <clipPath id="clip0_56_709">
            <rect width={50} height={50} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Quarterly Plan",
    title: "UGX 450K",
    features: [
      "1 Month Free Trial",
      "In-app Bookings",
      "In-app Locator",
      "Monthly Report",
      "24/7 Support",
    ],
  },
  {
    bestValue: true,
    icon: (
      <svg
        width={70}
        height={70}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_56_781)">
          <path
            d="M48.9892 10.8874L39.673 20.207L26.796 17.3208C28.0109 15.6227 29.8701 11.6693 28.3532 10.1524C26.6181 8.42072 21.715 11.0921 20.6209 12.1828L17.5569 15.2468L8.52926 13.2198L1.75013 19.9989L9.24073 23.563L8.96554 23.8382L14.6707 29.5434L16.9864 27.2412L27.6014 32.2886L15.0936 44.783H4.50205L0.686279 48.6021L12.7679 51.7836L18.9094 57.9251L22.0875 70L25.9033 66.1842V55.5893L38.4044 43.0882L43.4518 53.7066L41.1429 56.0088L46.8548 61.714L47.1233 61.4456L50.6907 68.9294L57.4698 62.1503L55.4428 53.1294L58.5035 50.0687C59.5975 48.9747 62.2622 44.0615 60.5305 42.3298C59.0102 40.8129 55.0602 42.6654 53.3621 43.887L50.4759 31.0066L59.7922 21.687C62.9703 18.5055 71.8738 5.36675 68.5849 2.08794C65.3061 -1.19423 52.1674 7.70253 48.9859 10.8807L48.9892 10.8874Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_56_781">
            <rect width={70} height={70} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Bi-Annual Plan",
    title: "UGX 870K",
    features: [
      "1 Month Free Trial",
      "In-app Bookings",
      "In-app Locator",
      "Monthly Report",
      "24/7 Support",
    ],
  },
  {
    icon: (
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_56_745)">
          <path
            d="M18.4228 9.90088C13.1958 15.7684 9.60866 24.1982 9.27557 24.9925L0.000244141 21.021L10.3773 10.6439C11.5816 9.43968 13.3239 8.90161 15.015 9.2347L18.4228 9.90088ZM23.496 37.1888C23.496 37.1888 33.0788 33.2173 38.5876 27.7085C52.4238 13.8724 50.1177 3.05969 49.3747 0.62556C46.9406 -0.143113 36.1279 -2.42351 22.2918 11.4126C16.7829 16.9214 12.8115 26.5042 12.8115 26.5042L23.496 37.1888ZM40.0994 31.5775C34.2318 36.8044 25.802 40.3916 25.0077 40.7247L28.9792 50L39.3563 39.6229C40.5606 38.4187 41.0986 36.6763 40.7655 34.9852L40.0994 31.5775ZM17.936 39.751C17.936 41.8777 17.0648 43.7994 15.6812 45.183C12.6577 48.2064 0.000244141 50 0.000244141 50C0.000244141 50 1.79382 37.3425 4.81726 34.3191C5.89032 33.2404 7.25972 32.5049 8.75158 32.2061C10.2434 31.9072 11.7905 32.0584 13.1962 32.6405C14.602 33.2225 15.8031 34.2092 16.647 35.4753C17.4909 36.7413 17.9395 38.2295 17.936 39.751ZM28.1849 16.6908C28.1849 13.8724 30.4909 11.5663 33.3094 11.5663C36.1279 11.5663 38.4339 13.8724 38.4339 16.6908C38.4339 19.5093 36.1279 21.8153 33.3094 21.8153C30.4909 21.8153 28.1849 19.5093 28.1849 16.6908Z"
            fill="url(#paint0_linear_56_745)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_56_745"
            x1="0.000244141"
            y1={0}
            x2="50.0002"
            y2="49.9886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0EB6D3" />
            <stop offset={1} stopColor="#00CECB" />
          </linearGradient>
          <clipPath id="clip0_56_745">
            <rect width={50} height={50} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Annual Plan",
    title: "UGX 1.5M",
    features: [
      "1 Month Free Trial",
      "In-app Bookings",
      "In-app Locator",
      "Monthly Report",
      "24/7 Support",
    ],
  },
];

export const teams = [
  {
    imgSrc: "/img/deliah-nalukwago.png",
    name: "Deliah Nalukwago",
    title: "Co-Founder, CEO",
    about:
      "Sino-Africa Entrepreneur, Creative director Event Couture Beijing. MBBS from Xi'an Jiaotong University School of Medicine, China.",
  },
  {
    imgSrc: "/img/louis-musanje-michael.png",
    name: "Louis Musanje Michael",
    title: "Co-Founder, CTO",
    about:
      "Created Yonja App, Technical lead Tyro Uganda. Computer Software Engineering at Aptech Uganda. Worked at Andela.",
  },
  {
    imgSrc: "/img/dr-farida-nansubuga.png",
    name: "Dr. Farida Nansubuga",
    title: "Medical Team Lead",
    about:
      "OB/GYN Bugando Hospital, Tanzania., China-Uganda Friendship Hospital, MBBS from Nanchang University. Masters in Obstetrics & Gyneacology from Wuhan Medical University.",
  },
];

type CX = string | boolean | undefined;
export const cx = (...args: CX[]) => args.join(" ");

export const roadmaps = [
  {
    date: "November, 2019",
    title: "Start",
    description: "My Musawo is started",
  },
  {
    date: "december, 2020",
    title: "Award",
    description:
      "My Musawo wins the Uganda Ministry of ICT NIISP innovation award",
  },
  {
    date: "September, 2021",
    title: "prototype",
    description: "Internal testing of the prototype",
  },
  {
    date: "December, 2021",
    title: "top 10",
    description:
      "My Musawo makes it to the Top 10 of the UNDP ideathon competition",
  },
  {
    date: "September, 2022",
    title: "Current stage",
    description: "Beta launch on the Google play store",
  },
  {
    date: "October, 2022",
    title: "coming soon",
    description: "Beta app launch on iOS App store",
  },
];
