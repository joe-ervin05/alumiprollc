import { Resend } from 'resend';
import { PRIVATE_RESEND_KEY } from '$env/static/private';
import { receiveEmail, shortName } from '$lib/config/context.config.js';

const resend = new Resend(PRIVATE_RESEND_KEY);

export const actions = {
    default: async ({ request }) => {

        const formData = await request.formData();

        let html = '';

        for (const [key, value] of formData.entries()) {
            html += `<p><strong>${key}:</strong> ${value}</p>`;
        }

        const { data, error } = await resend.emails.send({
            from: `${shortName} Contact <noreply@quizit.app>`,
            to: [receiveEmail],
            subject: `New ${shortName} contact submission`,
            html,
          });
          if (error) {
            return {
                error: error.message
            }
          }
        
          console.log({ data });

          return {
            success: true
          }

    }
}