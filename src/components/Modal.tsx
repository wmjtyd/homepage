import React, { CSSProperties, useState } from 'react';

import { useInterval } from '@/utils/useInterval';

export const FModalWithBtn = ({
  closeBtn = true,
  btnText = '',
  title,
  description,
  action,
  key,
}: {
  closeBtn?: boolean;
  btnText?: string;
  title?: string;
  description?: string | Element | undefined;
  action?: string;
  key: string;
}) => {
  // console.log(closeBtn, btnText, title, description, action);
  const [show, setShow] = useState(true);
  return (
    <>
      {btnText && (
        <a href="#modal-2" className="btn" onClick={() => setShow(true)}>
          {btnText}
        </a>
      )}
      {show && (
        <div className="modal" id={key || 'modal-2'}>
          <div className="modal-box">
            {closeBtn && (
              <label
                htmlFor="modal-2"
                onClick={() => setShow(false)}
                className="btn btn-circle btn-sm absolute right-2 top-2"
              >
                ✕
              </label>
            )}
            {title && <h3 className="text-lg font-bold">{title}</h3>}
            {description && <p className="py-4">{description as React.ReactNode}</p>}
            {action && (
              <div className="modal-action">
                <a href="#" className="btn">
                  {action}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export const FModal = ({
  closeBtn = true,
  title,
  description,
  actions = [],
  duration,
  callback,
}: {
  closeBtn?: boolean;
  title?: string;
  description?: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  actions?: {
    label: string;
    callback: () => void;
  }[];
  callback?: () => void;
}) => {
  const [show, setShow] = useState(true);

  duration &&
    useInterval(duration, 50, () => {
      setShow(false);
      callback && callback();
    });

  return (
    <>
      {show && (
        <div className="modal pointer-events-auto visible opacity-100" id="modal-2">
          <div className="modal-box text-center">
            {closeBtn && (
              <label
                htmlFor="modal-2"
                onClick={() => setShow(false)}
                className="btn btn-circle btn-sm absolute right-2 top-2"
              >
                ✕
              </label>
            )}

            {title && <h3 className="text-3xl font-bold">{title}</h3>}
            {description && <p className="py-4 text-gray-400">{description}</p>}
            {actions.map((val, key) => (
              <div key={key} onClick={val.callback} className="modal-action">
                {val.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
