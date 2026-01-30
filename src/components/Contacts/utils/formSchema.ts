import z from 'zod'

export type FormSchemaType = z.infer<typeof formSchema>
export const formSchema = z.object({
  email: z.email({ error: 'Email is required' }),
  company: z.string().min(2, { error: 'Company is required' }),
  firstName: z.string().min(2, { error: 'First Name is required' }),
  telegram: z
    .string()
    .optional()
    .refine(val => !val || /^@[\w\d_]{3,32}$/.test(val), {
      message: 'Telegram must start with @ and be 3-32 chars',
    }),
  message: z.string().min(2, { error: 'Message is required' }),
})
