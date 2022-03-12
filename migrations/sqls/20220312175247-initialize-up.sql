CREATE TYPE AccessRight AS ENUM ('CREATE', 'READ', 'UPDATE','DELETE');

CREATE TABLE SessionToken (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username Varchar,
    valid boolean,
    expirationTime Date,
    AccessRight AccessRight
)

CREATE TABLE User (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name Varchar,
        age Number,
        email Varchar
)

INSERT INTO UserCredentials(id,username,password,AccessRight) VALUES(user1,password1,[0,1])

CREATE TABLE UserCredentials (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
       username Varchar,
        password Varchar,
        AccessRight AccessRight,

)