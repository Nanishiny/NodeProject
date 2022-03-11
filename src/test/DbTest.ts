import { UserCredentialsDBAccess } from '../Authorization/UserCredentialsDBAccess';
import { AccessRight } from '../Shared/Models';
import { UserDBAccess } from '../Users/UserDBAccess';

class DbTest {
  public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
  public UserDBAccess: UserDBAccess = new UserDBAccess();
}

/* 
new DbTest().dbAccess.putUserCredentials({
  username: 'user1',
  password: 'password1',
  accessRights: [AccessRight.CREATE, AccessRight.READ]
}); */

new DbTest().UserDBAccess.putUser({
  age: 30,
  name: 'Jean',
  id: '1',
  email: 'jean@ezr'
});
