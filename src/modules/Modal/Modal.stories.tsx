import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal, ModalProvider, useModal } from './Modal';

export default {
  title: 'Modules/Modal',
  component: Modal,
  argTypes: {
    openModal: {
      type: 'function',
      description: 'Function to open modal',
    },
    closeModal: {
      type: 'function',
      description: 'Function to close modal',
    },
    toggleModal: {
      type: 'function',
      description: 'Function to toggle modal',
    },
    statusModal: {
      type: 'boolean',
      default: 'false',
      description: 'Modal opened status',
    },
    setContentModal: {
      type: 'function',
      description: 'Function to set modal content and open Modal',
    },
  },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ children, ...args }) => {
  const { statusModal, setContentModal } = useModal();

  return (
    <>
      <Modal {...args}>{children}</Modal>
      <p>Modal Status {statusModal} </p>
      <button
        onClick={() => {
          setContentModal(<p>Welcome !</p>);
        }}
      >
        Handle Modal
      </button>
    </>
  );
};

export const Default = Template.bind({});
