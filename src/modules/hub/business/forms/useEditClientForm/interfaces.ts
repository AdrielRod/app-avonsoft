import { z } from 'zod';

import { editClientSchema } from '@modules/hub/business/forms/useEditClientForm/schema';

export type EditClientForm = z.infer<typeof editClientSchema>;
