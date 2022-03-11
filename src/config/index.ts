export const loadEnvironmentvariable = (envName: string) => {
  if (process.env[envName]) {
    return process.env[envName];
  }

  throw new Error(`${envName} env does not exist`);
};
