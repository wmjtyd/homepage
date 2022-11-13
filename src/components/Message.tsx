import { useMessageStore } from '@xweb3/react-hooks';

import { classnames } from '@/utils/classnames';

import { FAlert } from './Alert';
import { FModal } from './Modal';

export const FMessage = () => {
  const { messages, removeMessage } = useMessageStore();

  return (
    <div>
      {Object.keys(messages).map((id: string, k: number) => {
        return (messages[id] as any)?.type === 'modal' ? (
          <FModal key={id} {...messages[id]} />
        ) : (
          <FAlert
            key={id}
            {...messages[id]}
            className={classnames({
              'fixed right-3 z-50 w-80': true,
            })}
            style={{
              top: `${64 * (Object.keys(messages).length - k)}px`,
            }}
            // status={messages[id].status}
            // description={messages[id].description}
            callback={() => id && removeMessage(Number(id))}
          />
        );
      })}
    </div>
  );
};
