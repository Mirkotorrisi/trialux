import * as migration_20260512_160006_add_department_to_jobs from './20260512_160006_add_department_to_jobs';

export const migrations = [
  {
    up: migration_20260512_160006_add_department_to_jobs.up,
    down: migration_20260512_160006_add_department_to_jobs.down,
    name: '20260512_160006_add_department_to_jobs'
  },
];
