### Create migration

- yarn typeorm migration:create src/database/migrations/CreateCategory 
- yarn typeorm migration:create src/database/migrations/CreateSpecifications

### Run migration

- yarn migration:run

### Revert migration

- yarn migration:revert