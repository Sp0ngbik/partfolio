import React from 'react'
import s from './Contacts.module.scss'
import TextFieldControlled from '@/components/Contacts/ui/TextFieldControlled/TextFieldControlled'
import { useForm } from 'react-hook-form'
import { formSchema, FormSchemaType } from '@/components/Contacts/utils/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '@/app/actions/sendEmail'
import { toast } from 'react-toastify'

const Contacts = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      telegram: '',
      message: '',
      company: '',
      firstName: '',
    },
  })
  const onSubmit = async (data: FormSchemaType) => {
    const result = await sendEmail(data)
    if (result.success) {
      toast.success('Message was sent successfully.', { theme: 'dark', hideProgressBar: true })
      reset()
    }
  }
  return (
    <div id="contacts" className={s.contactBlock}>
      <div className={s.touchBlock}>
        <h5>Get in touch</h5>
        <span>
          Have a project in mind or just want to chat about Frontend? Feel free to reach out! Drop
          me a message here or find me on Telegram — I&apos;m usually just a click away.
        </span>
      </div>
      <div>
        <form className={s.formSide} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextFieldControlled
              control={control}
              name="firstName"
              label={'Firstname'}
              required
              errorMessage={errors.firstName?.message}
            />
            <TextFieldControlled
              control={control}
              name="company"
              label={'Company'}
              required
              errorMessage={errors.company?.message}
            />
          </div>
          <div>
            <TextFieldControlled
              control={control}
              name="email"
              label={'Email address'}
              required
              errorMessage={errors.email?.message}
            />
            <TextFieldControlled
              control={control}
              name="telegram"
              label={'Telegram'}
              errorMessage={errors.telegram?.message}
            />
          </div>
          <TextFieldControlled
            as="textarea"
            control={control}
            name="message"
            label={'Message'}
            required
            placeholder="Start typing here..."
            className={s.messageStyle}
            errorMessage={errors.message?.message}
          />
          <button type={'submit'}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts
