import { forwardRef, ReactElement } from 'react';

import { LinkSvg } from '@/components/Svg';
import { classnames } from '@/utils/classnames';

export const Button = (
  {
    children,
    className = '',
    actived = false,
    linked = false,
    ...props
  }: {
    className?: string;
    actived?: boolean;
    linked?: boolean;
    children: ReactElement | string;
    onClick?: () => void;
  },
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      className={classnames({
        [className]: true,
        'to-black-800 bg-gradient-to-r from-blue-500': actived,
        'hover:to-black-800 hover:bg-gradient-to-r hover:from-blue-500': !actived,
        'border border-gray-600 hover:text-gray-500': !actived,
        'relative w-full cursor-pointer items-center rounded-xl p-[1px]': true,
      })}
      {...props}
      ref={ref}
    >
      <span
        className={classnames({
          'absolute top-1/4 left-[1px] inline-block h-1/2 w-1 rounded-xl bg-blue-500': true,
          hidden: !actived,
        })}
      ></span>
      <div
        className={classnames({
          'rounded-xl bg-base-200': true,
          'flex h-full flex-col px-4 py-1': true,
        })}
      >
        <div
          className={classnames({
            'my-2 flex-1': true,
          })}
        >
          <div>{children}</div>
        </div>
        {linked && (
          <span className="bg-theme-black absolute bottom-0 right-0 rounded-tl-xl rounded-br-xl px-2 py-1">
            <LinkSvg width="16" />
          </span>
        )}
      </div>
    </button>
  );
};

export const FButton = forwardRef(Button);
