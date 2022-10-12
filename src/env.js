const NODE_ENV = process.env.NODE_ENV

const getEnv = () => {
  const map = {
    production: 'pro',
    development: 'local',
  }
  return map[NODE_ENV] || 'local'
}

// 地址结尾必须带/
const envs = {
  real: {
    BASE: '//1.116.178.22/',
  },
  pre: {
    BASE: '//1.116.178.22/',
  },
  dev: {
    BASE: '//1.116.178.22/',
  },
}

const hosts = envs[getEnv()]

const getHost = (serviceName = 'BASE') => {
  return hosts ? hosts[serviceName] : '/'
}

export { getEnv, getHost }
