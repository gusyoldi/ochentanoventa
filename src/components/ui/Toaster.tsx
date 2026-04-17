import { Toaster as ReactHotToast, ToasterProps } from 'react-hot-toast';

const Toaster = (props: ToasterProps) => {
  return (
    <ReactHotToast
      position="bottom-center"
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 6000,
        },
        style: {
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundColor: 'black',
          border: '1px solid var(--color-gold)',
          color: 'var(--color-white)',
          fontFamily: 'var(--font-roboto)',
          fontWeight: '700',
        },
      }}
      {...props}
    />
  );
};

export default Toaster;
