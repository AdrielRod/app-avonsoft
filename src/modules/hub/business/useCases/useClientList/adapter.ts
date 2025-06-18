import type { ClientListResponse } from '@modules/hub/business/useCases/useClientList/interfaces';

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);

export function clientListAdapter(
  response: ClientListResponse,
): ClientListModel {
  const items = response.items.map(item => {
    const name = item.info.nomeCompleto;

    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    const nameChars = cleanName.split('');

    const missingLetter =
      alphabet.find(letter => !nameChars.includes(letter)) || '-';

    return {
      name: item.info.nomeCompleto,
      dateOfBirth: item.info.detalhes.nascimento,
      email: item.info.detalhes.email,
      id: item.info.id,
      missingLetter,
    };
  });

  return {
    items,
    page: response.page,
    pageSize: response.page_size,
    pageCount: response.page_count,
    total: response.total,
  };
}
