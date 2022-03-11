CREATE TYPE AccessRight AS ENUM ('CREATE', 'READ', 'UPDATE','DELETE');

CREATE TABLE SessionToken (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username Varchar,
    valid boolean,
    expirationTime Date,
    AccessRight AccessRight
)