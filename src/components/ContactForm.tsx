import { useForm } from '@formspree/react';
import { CircleCheckBig } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');

  const [state, handleSubmit] = useForm('xzzaakvn');

  const checkDisabledSubmit = () => {
    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
      return false;
    } else {
      return true;
    }
  };

  const checkForm = () => {
    if (state.errors) {
      const errorFields = state.errors.getAllFieldErrors();

      errorFields.forEach((field) => {
        switch (field[0]) {
          case 'name':
            setNameError('Campo non valido!');
            break;
          case 'email':
            setEmailError('Campo non valido!');
            break;
          case 'message':
            setMessageError('Campo non valido!');
            break;
        }
      });
    }
  };

  if (state.succeeded) {
    return (
      <div>
        <h3 className='text-2xl font-semibold mt-6 mb-2 flex justify-start items-center gap-2'>
          <CircleCheckBig className='w-5 h-5 text-green-500' />
          Messaggio inviato!
        </h3>
        <p>Sarai ricontattato il prima possibile!</p>
      </div>
    );
  }

  return (
    <>
      <h3 className='text-3xl font-bold mt-8 mb-2'>Inviami un messaggio</h3>
      <div className='w-[80px] bg-primary h-1 rounded-full mb-6'></div>

      <form
        id='contactForm'
        className='border border-gray-500 rounded-xl px-6 py-5'
        onSubmit={(e) => {
          e.preventDefault();
          checkForm();

          if (!nameError && !emailError && !messageError) {
            handleSubmit(e);
          }
        }}
        method='POST'
      >
        <div className='grid md:grid-cols-2 gap-6 justify-between items-start mb-6'>
          <div className='flex flex-col gap-y-2'>
            <label className='block leading-5' htmlFor='name'>
              Nome
            </label>
            <input
              className='h-12 appearance-none rounded-xl border border-gray-500 px-4 text-white bg-background-lighter outline-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:inset-1 focus-visible:ring-primary'
              id='name'
              name='name'
              placeholder='Nome'
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {nameError && <p className='text-red-600 text-xs'>{nameError}</p>}
            {/* <ValidationError prefix='Nome' field='name' errors={state.errors} /> */}
          </div>

          <div className='flex flex-col gap-y-2'>
            <label className='block leading-5 text-white' htmlFor='email'>
              Email
            </label>
            <input
              className='h-12 appearance-none rounded-xl border border-gray-500 px-4 text-white bg-background-lighter outline-none placeholder:text-text-gray-400 focus-visible:ring-1 focus-visible:inset-1 focus-visible:ring-primary'
              id='email'
              name='email'
              placeholder='e-mail'
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailError && <p className='text-red-600 text-xs'>{emailError}</p>}
            {/* <ValidationError prefix='Email' field='email' errors={state.errors} /> */}
          </div>
        </div>

        <div className='flex flex-col gap-y-2 mb-6'>
          <label className='block leading-5 text-white' htmlFor='message'>
            Messaggio
          </label>
          <textarea
            className='resize-y appearance-none rounded-xl border border-gray-500 px-3 py-2 text-white bg-background-lighter outline-none placeholder:text-text-gray-400 focus-visible:ring-1 focus-visible:inset-1 focus-visible:ring-primary'
            id='message'
            name='message'
            placeholder='Inserisci il tuo messaggio'
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          {messageError && (
            <p className='text-red-600 text-xs'>{messageError}</p>
          )}
          {/* <ValidationError
          prefix='Messaggio'
          field='message'
          errors={state.errors}
        /> */}
        </div>

        <div className='flex flex-row-reverse gap-x-6'>
          <button
            className='cursor-pointer rounded-full bg-primary/80 px-5 py-1.5 text-lg font-semibold leading-7 text-white transition-colors duration-200 shadow shadow-white selection:hadow-white hover:brightness-125 focus-visible:bg-[--color-primary-active] focus-visible:outline-2 focus-visible:outline-white disabled:bg-primary/30 disabled:text-white/30 disabled:cursor-not-allowed disabled:shadow-gray-500'
            type='submit'
            disabled={checkDisabledSubmit()}
          >
            Invia
          </button>
        </div>
      </form>
    </>
  );
}
