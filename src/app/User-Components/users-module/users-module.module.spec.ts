import { UsersModuleModule } from './users-module.module';

describe('UsersModuleModule', () => {
  let usersModuleModule: UsersModuleModule;

  beforeEach(() => {
    usersModuleModule = new UsersModuleModule();
  });

  it('should create an instance', () => {
    expect(usersModuleModule).toBeTruthy();
  });
});
