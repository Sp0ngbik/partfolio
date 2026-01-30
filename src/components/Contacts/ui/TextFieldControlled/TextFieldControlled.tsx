import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import s from './TextFieldControlled.module.scss'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

type TextField<T extends ElementType> = {
  as?: T
  errorMessage?: string
  label?: string
  required?: boolean
} & ComponentPropsWithoutRef<T>

type Props<T extends FieldValues, Tag extends ElementType> = UseControllerProps<T> &
  TextField<Tag> &
  Omit<ComponentPropsWithoutRef<Tag>, keyof UseControllerProps<T> | keyof TextField<Tag>>

const TextFieldControlled = <T extends FieldValues, Tag extends ElementType = 'input'>({
  control,
  as,
  name,
  className,
  defaultValue,
  shouldUnregister,
  errorMessage,
  required = false,
  ...rest
}: Props<T, Tag>) => {
  const Component = as || 'input'
  const { field } = useController({
    control,
    name,
    disabled: rest.disabled,
    shouldUnregister,
  })
  return (
    <div className={s.textFieldWrapper}>
      {rest.label && (
        <label className={s.fieldLabel}>
          {rest.label}
          {required && <span>*</span>}
        </label>
      )}
      <Component {...rest} {...field} className={clsx(s.inputStyle, className)} />
      <div className={s.errorContainer}>
        <AnimatePresence mode="wait">
          {errorMessage && (
            <motion.span
              key={errorMessage} // Важно для смены одного текста на другой
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className={s.errorMessage}
            >
              {errorMessage}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TextFieldControlled
