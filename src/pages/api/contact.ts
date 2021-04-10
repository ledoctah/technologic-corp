import { NextApiRequest, NextApiResponse } from 'next';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import ZohoMailService from '../../services/ZohoMailService';
import HandlebarsService from '../../services/HandlebarsService';

interface BodyData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method not allowed');
  }

  const { email, name, subject, message } = req.body as BodyData;

  const mailService = new ZohoMailService();
  const handlebars = new HandlebarsService();

  // const file = path.resolve(__dirname, 'src', 'templates', 'contact.hbs');
  const file = './src/templates/contact.hbs';

  const html = await handlebars.parse({
    file,
    variables: {
      name,
      message,
      timestamp: format(new Date(), "dd/MM/yyyy 'às' HH:mm", {
        locale: ptBr,
      }),
    },
  });

  await mailService.sendMail({
    to: {
      email,
      name,
    },
    from: {},
    subject,
    html,
  });

  return res.status(200).end('Mail has been sent');
};
