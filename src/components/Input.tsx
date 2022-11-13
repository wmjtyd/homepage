import { classnames } from '@/utils/classnames';

export type IProps = {
  [key: string]: any;
};

export const FInput = ({ className = '', ...props }: IProps) => {
  return (
    <div
      className={classnames({
        [className]: true,
        'to-black-900 relative bg-gradient-to-r from-blue-500': true,
        'w-full cursor-pointer rounded-full p-[1px]': true,
      })}
    >
      <input className="text-theme-white input input-bordered w-full rounded-full" type="number" {...props} />
    </div>
  );
};
