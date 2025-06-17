import type { UUIDApi } from '@core/uuid/interfaces';

function generate() {
  const date = Date.now();

  const rng = Math.floor(Math.random() * 1000000000000);

  return `${date}-${rng}`;
}

const UUID: UUIDApi = {
  generate,
};

export default UUID;
