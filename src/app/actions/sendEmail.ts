'use server'
import { Resend } from 'resend'
import { FormSchemaType } from '@/components/Contacts/utils/formSchema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormSchemaType) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sp0ngbik@gmail.com',
      subject: 'New Message from Portfolio',
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 24px; text-align: center;">
      <h2 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Message Inquiry</h2>
    </div>
    
    <div style="padding: 32px; background-color: #ffffff;">
      <p style="font-size: 16px; color: #666; margin-bottom: 24px;">You have received a new message from your portfolio website:</p>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; width: 120px;"><strong>Name:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${
            formData.firstName
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888;"><strong>Email:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #3b82f6;">
            <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${
              formData.email
            }</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888;"><strong>Company:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${
            formData.company
          }</td>
        </tr>
        
        ${
          formData.telegram
            ? `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888;"><strong>Telegram:</strong></td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333;">
            <a href="https://t.me/${formData.telegram.replace(
              '@',
              ''
            )}" style="background-color: #f0f7ff; color: #0088cc; padding: 4px 8px; border-radius: 4px; font-size: 14px; text-decoration: none; font-weight: 500;">
              ${formData.telegram}
            </a>
          </td>
        </tr>
        `
            : ''
        }
      </table>
      
      <div style="margin-top: 32px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #3b82f6; border-radius: 4px;">
        <strong style="display: block; margin-bottom: 8px; color: #555;">Message:</strong>
        <p style="margin: 0; color: #333; white-space: pre-wrap;">${formData.message}</p>
      </div>
    </div>
    
    <div style="background-color: #f4f4f7; padding: 16px; text-align: center; font-size: 12px; color: #999;">
      <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
    </div>
  </div>
`,
    })
    return { success: true }
  } catch (e) {
    return { success: false, e }
  }
}
