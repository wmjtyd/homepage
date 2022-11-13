import Link from 'next/link';
import { CSSProperties, useMemo, useState } from 'react';

import { classnames } from '@/utils/classnames';
import { useInterval } from '@/utils/useInterval';

import { AlertSvg, ErrorSvg, InfoSvg, LoadingSvg, SuccessSvg, WarningSvg, XSvg } from './Svg';

export type IAlertStatus = 'info' | 'success' | 'warning' | 'error' | 'loading';

export const icons = (status: IAlertStatus, className = '') => ({
  loading: (
    <LoadingSvg
      className={classnames('h-6 w-6 flex-shrink-0 stroke-info', {
        [className]: true,
      })}
    />
  ),
  alert: (
    <AlertSvg
      className={classnames('h-6 w-6 flex-shrink-0 stroke-info', {
        [className]: true,
      })}
    />
  ),
  info: (
    <InfoSvg
      className={classnames('h-6 w-6 flex-shrink-0 stroke-info', {
        [className]: true,
      })}
    />
  ),
  success: (
    <SuccessSvg
      className={classnames('h-6 w-6 flex-shrink-0 stroke-info', {
        [className]: true,
      })}
    />
  ),
  warning: (
    <WarningSvg
      className={classnames('h-6 w-6 flex-shrink-0 stroke-info', {
        [className]: true,
      })}
    />
  ),
  error: (
    <ErrorSvg
      className={classnames('h-6 w-6 flex-shrink-0 stroke-info', {
        [className]: true,
      })}
    />
  ),
});

export const FAlert = ({
  status = 'info',
  description,
  link = '',
  style = {},
  className = '',
  callback,
}: {
  status: IAlertStatus;
  description: string;
  link?: string | undefined;
  className?: string;
  style?: CSSProperties;
  callback: () => void;
}) => {
  const [show, setShow] = useState(true);
  const [, textColor, , fromColor] = useMemo(() => {
    return [
      classnames({
        ['bg-loading']: status === 'loading',
        ['bg-info']: status === 'info',
        ['bg-error']: status === 'error',
        ['bg-success']: status === 'success',
        ['bg-warning']: status === 'warning',
      }),
      classnames({
        ['text-loading']: status === 'loading',
        ['text-info']: status === 'info',
        ['text-error']: status === 'error',
        ['text-success']: status === 'success',
        ['text-warning']: status === 'warning',
      }),
      classnames({
        ['alert-loading']: status === 'loading',
        ['alert-info']: status === 'info',
        ['alert-error']: status === 'error',
        ['alert-success']: status === 'success',
        ['alert-warning']: status === 'warning',
      }),
      classnames({
        ['from-loading']: status === 'loading',
        ['from-info']: status === 'info',
        ['from-error']: status === 'error',
        ['from-success']: status === 'success',
        ['from-warning']: status === 'warning',
      }),
    ];
  }, [status]);

  const time = useInterval(100, 50, () => {
    setShow(false);
    callback && callback();
  });

  return (
    <div>
      {show && (
        <div
          style={style}
          className={classnames({
            [className]: true,
            [`from-blue-500`]: true,
            'to-black-600 bg-gradient-to-r': true,
            'alert alert-success rounded-2xl p-[1.5px] shadow-lg': true,
            [`${fromColor}`]: true,
          })}
        >
          <Link href={link || ''}>
            <a className="bg-theme-black flex h-full w-full rounded-2xl p-3">
              {icons(status, textColor)[status || 'alert']}
              <span
                className={classnames({
                  'flex-1': true,
                  [textColor]: true,
                })}
              >
                {description}
              </span>
              <div
                className={classnames({
                  'border-theme-white after:none radial-progress h-6 w-6 cursor-pointer': true,
                })}
                onClick={() => setShow(false)}
                style={
                  {
                    '--value': time, // for daisyui
                    '--thickness': '1.5px',
                  } as CSSProperties
                }
              >
                <XSvg width="16" />
              </div>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
