const prefix = 'RSS_';

const parseEnv = () => {
    const regex = new RegExp(`^${prefix}`);
    const rssVariables = Object.entries(process.env)
      .filter(([key]) => regex.test(key))
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');

    console.log(rssVariables);
};

parseEnv();
