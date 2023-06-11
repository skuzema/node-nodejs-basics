const ARG_PREFIX = '--';

const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = {};
  let stringArgs = '';

  for (let i = 0; i < args.length; i += 2) {
    if (args[i].startsWith(ARG_PREFIX)) {
      const key = args[i].replace(/^--/, '');
      const value = args[i + 1];
      result[key] = value;
    }
  }
  for (const [key, value] of Object.entries(result)) {
    stringArgs =
      stringArgs + (stringArgs.length === 0 ? '' : ', ') + `${key} is ${value}`;
  }
  console.log(stringArgs);
};

parseArgs();
