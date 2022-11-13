import { v4 as uuidv4 } from 'uuid';
import create, { GetState, SetState } from 'zustand';

export type IMessage = {
  id?: string;
  type?: 'alert' | 'modal';
  duration?: number;
  doNotAutoRemove?: boolean;
  title: string;
  description: string;
  status: 'success' | 'error' | 'info' | 'warning' | 'loading';
  link?: string;
};

type IMessageStore = {
  messages: { [id: string]: IMessage };
  pushMessage: (message: IMessage) => string;
  removeMessage: (id: string) => void;
  clearMessages: () => void;
};

export const useMessageStore = create(
  (set: SetState<IMessageStore>, get: GetState<IMessageStore>): IMessageStore => ({
    messages: {},
    pushMessage: (message: IMessage): string => {
      const { messages } = get();
      const id = uuidv4();
      set(() => ({
        messages: {
          ...messages,
          [id]: {
            type: 'alert',
            ...message,
          },
        },
      }));
      return id;
    },
    removeMessage: (id: string) => {
      set((state: IMessageStore) => {
        delete state.messages[id];
        return state;
      });
    },
    clearMessages: () => set({ messages: {} }),
  })
);
