import React from 'react'

import styles from './Links.module.scss'

const Links: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="https://github.com/e6ntff" target="_blank" rel="noreferrer">
          <svg
            className={styles.github}
            width="20px"
            height="20px"
            viewBox="0 0 98 98"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="#fff"
            />
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://t.me/e6ntff" target="_blank" rel="noreferrer">
          <svg
            className={styles.telegram}
            width="22px"
            height="22px"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)" />
            <path
              d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
              fill="#fff"
            />
            <defs>
              <linearGradient
                id="paint0_linear_87_7225"
                x1="16"
                y1="2"
                x2="16"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#37BBFE" />
                <stop offset="1" stopColor="#007DBB" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </li>
    </ul>
  )
}

export default Links
